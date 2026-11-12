-- Esquema inicial para la guia de pregrados y tecnologias.
-- Ejecutar una vez en Supabase: SQL Editor -> New query.
-- En una base existente, ejecutar supabase-posgrados-migration.sql para
-- habilitar e importar el catálogo de posgrados.
--
-- Despues de crear las cuentas en Authentication -> Users, agregue sus
-- UUID a public.admin_users. Ejemplo (reemplace los correos):
-- INSERT INTO public.admin_users (user_id)
-- SELECT id FROM auth.users
-- WHERE email IN ('admin1@ejemplo.com', 'admin2@ejemplo.com', 'admin3@ejemplo.com')
-- ON CONFLICT (user_id) DO NOTHING;
--
-- catalog admite 'pregrados', 'tecnologias' y 'posgrados'. Los programas actuales deben
-- migrarse desde script.js a public.programs; este archivo crea el esquema,
-- pero no importa automaticamente los datos locales del navegador.

CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE IF NOT EXISTS public.programs (
  id text PRIMARY KEY,
  catalog text NOT NULL CONSTRAINT programs_catalog_check
    CHECK (catalog IN ('pregrados', 'tecnologias', 'posgrados')),
  title text NOT NULL,
  faculty text NOT NULL,
  price text NOT NULL,
  semesters text NOT NULL,
  modality text NOT NULL,
  degree text NOT NULL,
  snies text NOT NULL,
  summary text NOT NULL,
  overview text NOT NULL,
  competencies jsonb NOT NULL DEFAULT '[]'::jsonb
    CHECK (pg_catalog.jsonb_typeof(competencies) = 'array'),
  practices text NOT NULL,
  advantages jsonb NOT NULL DEFAULT '[]'::jsonb
    CHECK (pg_catalog.jsonb_typeof(advantages) = 'array'),
  extra_sections jsonb NOT NULL DEFAULT '[]'::jsonb
    CHECK (pg_catalog.jsonb_typeof(extra_sections) = 'array'),
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE INDEX IF NOT EXISTS programs_catalog_order_idx
  ON public.programs (catalog, sort_order);

-- El identificador del administrador proviene de la sesion autenticada.
CREATE TABLE IF NOT EXISTS public.program_change_history (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  program_id text NOT NULL,
  program_title text NOT NULL,
  catalog text NOT NULL CONSTRAINT program_change_history_catalog_check
    CHECK (catalog IN ('pregrados', 'tecnologias', 'posgrados')),
  operation text NOT NULL CHECK (operation IN ('INSERT', 'UPDATE', 'DELETE')),
  actor_id uuid,
  actor_email text,
  changed_fields jsonb NOT NULL DEFAULT '[]'::jsonb
    CHECK (pg_catalog.jsonb_typeof(changed_fields) = 'array'),
  before_data jsonb NOT NULL DEFAULT '{}'::jsonb
    CHECK (pg_catalog.jsonb_typeof(before_data) = 'object'),
  after_data jsonb NOT NULL DEFAULT '{}'::jsonb
    CHECK (pg_catalog.jsonb_typeof(after_data) = 'object'),
  changed_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE INDEX IF NOT EXISTS program_change_history_program_date_idx
  ON public.program_change_history (program_id, changed_at DESC);

CREATE OR REPLACE FUNCTION public.is_program_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users AS admin
    WHERE admin.user_id = (SELECT auth.uid())
  );
$function$;

REVOKE ALL ON FUNCTION public.is_program_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_program_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.set_program_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at := pg_catalog.now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.log_program_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
DECLARE
  old_data jsonb := '{}'::jsonb;
  new_data jsonb := '{}'::jsonb;
  program_id_value text;
  program_title_value text;
  catalog_value text;
  actor_id_value uuid := (SELECT auth.uid());
  actor_email_value text;
  changed_fields_value jsonb;
BEGIN
  IF TG_OP = 'INSERT' THEN
    new_data := pg_catalog.to_jsonb(NEW) - ARRAY['created_at', 'updated_at'];
    program_id_value := NEW.id;
    program_title_value := NEW.title;
    catalog_value := NEW.catalog;
  ELSIF TG_OP = 'UPDATE' THEN
    old_data := pg_catalog.to_jsonb(OLD) - ARRAY['created_at', 'updated_at'];
    new_data := pg_catalog.to_jsonb(NEW) - ARRAY['created_at', 'updated_at'];
    program_id_value := NEW.id;
    program_title_value := NEW.title;
    catalog_value := NEW.catalog;
  ELSE
    old_data := pg_catalog.to_jsonb(OLD) - ARRAY['created_at', 'updated_at'];
    program_id_value := OLD.id;
    program_title_value := OLD.title;
    catalog_value := OLD.catalog;
  END IF;

  SELECT COALESCE(pg_catalog.jsonb_agg(keys.key ORDER BY keys.key), '[]'::jsonb)
  INTO changed_fields_value
  FROM (
    SELECT old_fields.key
    FROM pg_catalog.jsonb_object_keys(old_data) AS old_fields(key)
    UNION
    SELECT new_fields.key
    FROM pg_catalog.jsonb_object_keys(new_data) AS new_fields(key)
  ) AS keys
  WHERE old_data -> keys.key IS DISTINCT FROM new_data -> keys.key;

  SELECT user_record.email
  INTO actor_email_value
  FROM auth.users AS user_record
  WHERE user_record.id = actor_id_value;

  INSERT INTO public.program_change_history (
    program_id,
    program_title,
    catalog,
    operation,
    actor_id,
    actor_email,
    changed_fields,
    before_data,
    after_data
  )
  VALUES (
    program_id_value,
    program_title_value,
    catalog_value,
    TG_OP,
    actor_id_value,
    actor_email_value,
    changed_fields_value,
    old_data,
    new_data
  );

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$function$;

REVOKE ALL ON FUNCTION public.set_program_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.log_program_change() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS programs_set_updated_at ON public.programs;
CREATE TRIGGER programs_set_updated_at
  BEFORE UPDATE ON public.programs
  FOR EACH ROW
  EXECUTE FUNCTION public.set_program_updated_at();

DROP TRIGGER IF EXISTS programs_log_changes ON public.programs;
CREATE TRIGGER programs_log_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.programs
  FOR EACH ROW
  EXECUTE FUNCTION public.log_program_change();

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.program_change_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Programs are visible to everyone" ON public.programs;
CREATE POLICY "Programs are visible to everyone"
  ON public.programs
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Admins can insert programs" ON public.programs;
CREATE POLICY "Admins can insert programs"
  ON public.programs
  FOR INSERT
  TO authenticated
  WITH CHECK ((SELECT public.is_program_admin()));

DROP POLICY IF EXISTS "Admins can update programs" ON public.programs;
CREATE POLICY "Admins can update programs"
  ON public.programs
  FOR UPDATE
  TO authenticated
  USING ((SELECT public.is_program_admin()))
  WITH CHECK ((SELECT public.is_program_admin()));

DROP POLICY IF EXISTS "Admins can delete programs" ON public.programs;
CREATE POLICY "Admins can delete programs"
  ON public.programs
  FOR DELETE
  TO authenticated
  USING ((SELECT public.is_program_admin()));

DROP POLICY IF EXISTS "Admins can read program history" ON public.program_change_history;
CREATE POLICY "Admins can read program history"
  ON public.program_change_history
  FOR SELECT
  TO authenticated
  USING ((SELECT public.is_program_admin()));

GRANT SELECT ON public.programs TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.programs TO authenticated;
GRANT SELECT ON public.program_change_history TO authenticated;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE
  ON public.program_change_history FROM anon, authenticated;
REVOKE ALL ON public.admin_users FROM anon, authenticated;
REVOKE ALL ON public.programs FROM PUBLIC;
REVOKE ALL ON public.program_change_history FROM PUBLIC;
REVOKE ALL ON public.admin_users FROM PUBLIC;

-- Reaplicar los permisos de lectura/escritura despues de revocar PUBLIC.
GRANT SELECT ON public.programs TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.programs TO authenticated;
GRANT SELECT ON public.program_change_history TO authenticated;

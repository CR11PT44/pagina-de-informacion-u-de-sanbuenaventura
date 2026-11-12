-- Habilita el catalogo de posgrados en una base ya creada y carga la oferta
-- publicada en https://www.usbbog.edu.co/posgrados/.
-- Ejecutar una vez en Supabase: SQL Editor -> New query.
-- Los requisitos especificos no se publican de forma consistente por programa;
-- las fichas muestran un aviso y enlazan el proceso oficial de admision.

BEGIN;

ALTER TABLE public.programs
  DROP CONSTRAINT IF EXISTS programs_catalog_check;
ALTER TABLE public.programs
  ADD CONSTRAINT programs_catalog_check
  CHECK (catalog IN ('pregrados', 'tecnologias', 'posgrados'));

ALTER TABLE public.program_change_history
  DROP CONSTRAINT IF EXISTS program_change_history_catalog_check;
ALTER TABLE public.program_change_history
  ADD CONSTRAINT program_change_history_catalog_check
  CHECK (catalog IN ('pregrados', 'tecnologias', 'posgrados'));

WITH posgrado_seed(sort_order, id, title, faculty, official_url) AS (
  VALUES
    (10, 'especializacion-psicologia-seguridad-salud-trabajo', 'Especialización en Psicología de la Seguridad y Salud en el Trabajo', 'Psicología', 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/especializacion-en-psicologia-de-la-seguridad-y-salud-en-el-trabajo/'),
    (20, 'especializacion-evaluacion-diagnostico-neuropsicologico', 'Especialización en Evaluación y Diagnóstico Neuropsicológico', 'Psicología', 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/especializacion-en-evaluacion-y-diagnostico-neuropsicologico/'),
    (30, 'maestria-psicologia-clinica', 'Maestría en Psicología Clínica', 'Psicología', 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/maestria-en-psicologia-clinica/'),
    (40, 'especializacion-pedagogia-docencia-universitaria', 'Especialización en Pedagogía y Docencia Universitaria', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/especializacion-en-pedagogia-y-docencia-universitaria/'),
    (50, 'maestria-educacion-mediada-tic', 'Maestría en Educación Mediada con las TIC', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-educacion-mediada-con-las-tic/'),
    (60, 'maestria-ciencias-educacion', 'Maestría en Ciencias de la Educación', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-ciencias-de-la-educacion/'),
    (70, 'maestria-filosofia-contemporanea', 'Maestría en Filosofía Contemporánea', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-filosofia-contemporanea/'),
    (80, 'maestria-teologia-biblia', 'Maestría en Teología de la Biblia', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-teologia-de-la-biblia/'),
    (90, 'doctorado-humanidades-humanismo-persona', 'Doctorado en Humanidades. Humanismo y Persona', 'Humanidades y Ciencias de la Educación', 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/doctorado-en-humanidades-humanismo-y-persona/'),
    (100, 'especializacion-produccion-audiovisual-ia', 'Especialización en Producción Audiovisual Asistida por Inteligencia Artificial', 'Ingeniería', 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-produccion-audiovisual-asistida-por-inteligencia-artificial/'),
    (110, 'especializacion-automatizacion-procesos-industriales', 'Especialización en Automatización de Procesos Industriales', 'Ingeniería', 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-automatizacion-de-procesos-industriales/'),
    (120, 'especializacion-gestion-soluciones-digitales', 'Especialización en Gestión de Soluciones Digitales', 'Ingeniería', 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-gestion-de-soluciones-digitales/'),
    (130, 'maestria-ingenieria-informatica', 'Maestría en Ingeniería Informática', 'Ingeniería', 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/maestria-en-ingenieria-informatica/'),
    (140, 'maestria-internet-cosas-transformacion-digital', 'Maestría en Internet de las Cosas y Transformación Digital', 'Ingeniería', 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/maestria-en-internet-de-las-cosas-y-transformacion-digital/'),
    (150, 'maestria-direccion-empresas-mba', 'Maestría en Dirección de Empresas (MBA)', 'Ciencias Económicas y Administrativas', 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-economicas-y-administrativas/maestria-en-direccion-de-empresas/'),
    (160, 'especializacion-contratacion-estatal-derecho-sancionatorio', 'Especialización en Contratación Estatal y Derecho Sancionatorio', 'Ciencias Jurídicas y Políticas', 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/especializacion-en-contratacion-estatal-y-derecho-sancionatorio/'),
    (170, 'maestria-derecho-administracion-justicia', 'Maestría en Derecho y Administración de Justicia', 'Ciencias Jurídicas y Políticas', 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-derecho-y-administracion-de-justicia/'),
    (180, 'maestria-dinamicas-territoriales-desarrollo', 'Maestría en Dinámicas Territoriales y Desarrollo', 'Ciencias Jurídicas y Políticas', 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-dinamicas-territoriales-y-desarrollo/'),
    (190, 'maestria-derecho-internacional-relaciones-internacionales', 'Maestría en Derecho Internacional y Relaciones Internacionales', 'Ciencias Jurídicas y Políticas', 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-derecho-internacional-y-relaciones-internacionales/')
)
INSERT INTO public.programs (
  id,
  catalog,
  title,
  faculty,
  price,
  semesters,
  modality,
  degree,
  snies,
  summary,
  overview,
  competencies,
  practices,
  advantages,
  extra_sections,
  sort_order
)
SELECT
  seed.id,
  'posgrados',
  seed.title,
  seed.faculty,
  'Consultar ficha oficial',
  'Consultar ficha oficial',
  'Consultar ficha oficial',
  'Posgrado',
  'Consultar ficha oficial',
  'Consulta la ficha oficial para conocer la información académica vigente de este programa.',
  'Consulta la ficha oficial del programa para conocer su perfil, plan de estudios y modalidad.',
  '["Consulta la ficha oficial del programa."]'::jsonb,
  'Consulta la ficha oficial del programa para conocer su plan de estudios y actividades formativas.',
  '["Consulta la ficha oficial del programa."]'::jsonb,
  pg_catalog.jsonb_build_array(
    pg_catalog.jsonb_build_object(
      'title', 'Requisitos de admisión',
      'text', 'Los requisitos específicos para este programa están pendientes de confirmación en una fuente oficial. Consulta el proceso de admisión de posgrado y confirma los requisitos vigentes con la Universidad.',
      'url', 'https://www.usbbog.edu.co/admisiones/posgrado/'
    ),
    pg_catalog.jsonb_build_object(
      'title', 'Ficha oficial del programa',
      'text', 'Consulta la información académica vigente en el sitio oficial de la Universidad.',
      'url', seed.official_url
    )
  ),
  seed.sort_order
FROM posgrado_seed AS seed
ON CONFLICT (id) DO NOTHING;

COMMIT;

SELECT id, title, faculty
FROM public.programs
WHERE catalog = 'posgrados'
ORDER BY sort_order, id;

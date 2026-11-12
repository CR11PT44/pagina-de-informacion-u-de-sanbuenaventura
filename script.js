const programData = [
      {
        id: "psicologia",
        title: "Psicología",
        faculty: "Psicología",
        price: "$7.638.000",
        semesters: "9 Semestres",
        modality: "Presencial / Diurna",
        degree: "Psicólogo(a)",
        snies: "SNIES 1373",
        summary: "Formación integral en psicología clínica, organizacional, educativa, neuropsicología y social comunitaria con sólida base humanista-franciscana.",
        overview: "El programa de Psicología de la USB Bogotá forma profesionales capaces de evaluar, diagnosticar e intervenir en procesos psicológicos individuales, grupales y comunitarios. Combina fundamentación científica rigorosa con un enfoque profundamente ético y social.",
        competencies: [
          "Evaluación y diagnóstico psicológico en contextos clínicos, hospitalarios y privados.",
          "Gestión de clima organizacional, selección de talento y bienestar laboral en empresas.",
          "Intervención psicoeducativa en comunidades escolares y atención a necesidades de aprendizaje.",
          "Desarrollo de proyectos comunitarios y atención a poblaciones vulnerables.",
          "Aplicación de herramientas en evaluación neuropsicológica y salud mental."
        ],
        practices: "Las prácticas profesionales inician a partir del 7.º semestre (mínimo 480 horas). Se desarrollan en el Centro de Atención Psicológica (CAP) propio de la universidad, así como en clínicas, hospitales, colegios públicos y privados, e instituciones del sector social e industrial en convenio.",
        advantages: [
          "Acceso directo a prácticas en el Centro de Atención Psicológica (CAP) propio.",
          "Posibilidad de continuar estudios con las Maestrías en Psicología Clínica y Neuropsicología de la facultad.",
          "Formación en investigación aplicada a través de grupos categorizados ante MinCiencias."
        ]
      },
      {
        id: "ing-sistemas",
        title: "Ingeniería de Sistemas",
        faculty: "Ingeniería",
        price: "$6.728.000",
        semesters: "8 Semestres",
        modality: "Presencial / Diurna",
        degree: "Ingeniero(a) de Sistemas",
        snies: "Registro Calificado Vigente",
        summary: "Enfocado en arquitectura de software, ciberseguridad, inteligencia artificial, analítica de datos y cloud computing.",
        overview: "Forma ingenieros líderes en la transformación digital capaces de diseñar, construir y administrar sistemas complejos de software, infraestructura en la nube y modelos de inteligencia artificial aplicados a la resolución de problemas globales.",
        competencies: [
          "Diseño y arquitectura de aplicaciones web, móviles y empresariales.",
          "Implementación de modelos de Machine Learning y Ciencia de Datos.",
          "Gestión de la ciberseguridad, auditoría de redes y gobierno de TI.",
          "Administración de infraestructura Cloud (AWS, Azure, Google Cloud).",
          "Dirección de proyectos tecnológicos ágiles (Scrum, DevOps)."
        ],
        practices: "Pasantías en empresas tecnológicas del sector real, multinacionales de desarrollo de software, startups de base tecnológica o mediante proyectos de innovación e investigación aplicada.",
        advantages: [
          "Plan de estudios actualizado con énfasis en IA y Ciberseguridad.",
          "Laboratorios de computación especializada y redes de alto rendimiento.",
          "Articulación directa con posgrados como la Maestría en Internet de las Cosas (IoT)."
        ]
      },
      {
        id: "ing-electronica",
        title: "Ingeniería Electrónica",
        faculty: "Ingeniería",
        price: "$6.758.000",
        semesters: "10 Semestres",
        modality: "Presencial / Diurna",
        degree: "Ingeniero(a) Electrónico(a)",
        snies: "Registro Calificado Vigente",
        summary: "Especializado en automatización industrial, sistemas embebidos, procesamiento de señales, telecomunicaciones e IoT.",
        overview: "El Ingeniero Electrónico de la USB Bogotá domina la integración del hardware y software para automatizar procesos, diseñar sistemas de comunicaciones avanzados y crear soluciones electrónicas sostenibles e inteligentes.",
        competencies: [
          "Diseño e implementación de sistemas de control industrial y automatización.",
          "Programación de microcontroladores y sistemas embebidos.",
          "Gestión y optimización de redes de telecomunicaciones.",
          "Desarrollo de dispositivos IoT (Internet de las Cosas) para Smart Cities e Industria 4.0.",
          "Mantenimiento de equipamiento electrónico de alta precisión."
        ],
        practices: "Desarrollo de prácticas profesionales en plantas industriales, empresas del sector de las telecomunicaciones, integradoras de tecnología y laboratorios de investigación robótica.",
        advantages: [
          "Laboratorios especializados en microelectrónica, automatización y comunicaciones.",
          "Participación en semilleros de investigación en robótica y domótica.",
          "Ruta de doble titulación y movilidad académica internacional."
        ]
      },
      {
        id: "ing-aeronautica",
        title: "Ingeniería Aeronáutica",
        faculty: "Ingeniería",
        price: "$11.051.000",
        semesters: "8 Semestres",
        modality: "Presencial / Mixta",
        degree: "Ingeniero(a) Aeronáutico(a)",
        snies: "Programa de Alta Especialización",
        summary: "Diseño aerodinámico, mantenimiento MRO, estructuras de vuelo, sistemas de propulsión y certificación de aviación.",
        overview: "Uno de los programas insigne en Colombia para la industria aeroespacial. Forma ingenieros expertos en la operación, diseño, fabricación, mantenimiento y regulación de aeronaves comerciales, militares y sistemas no tripulados (drones).",
        competencies: [
          "Gestión y supervisión de talleres de MRO (Mantenimiento, Reparación y Operación).",
          "Análisis aerodinámico y simulación computacional de fluidos (CFD).",
          "Diseño estructural y verificación de materiales aeronáuticos.",
          "Certificación y auditoría de seguridad operacional bajo normativas de la Aerocivil y FAA.",
          "Gestión de flotas aéreas e ingeniería de mantenimiento en aerolíneas."
        ],
        practices: "Prácticas en aerolíneas líderes (Avianca, LATAM, Satena), centros de mantenimiento MRO, la Aeronáutica Civil de Colombia (Aerocivil) y empresas de logística aeroespacial.",
        advantages: [
          "Laboratorios de simulación aerodinámica, túnel de viento y materiales aeronáuticos.",
          "Convenios institucionales con el sector aéreo colombiano e internacional.",
          "Alto índice de empleabilidad en el sector aeroportuario y de aviación."
        ]
      },
      {
        id: "ing-mecatronica",
        title: "Ingeniería Mecatrónica",
        faculty: "Ingeniería",
        price: "$8.698.000",
        semesters: "10 Semestres",
        modality: "Presencial / Diurna",
        degree: "Ingeniero(a) Mecatrónico(a)",
        snies: "Registro Calificado Vigente",
        summary: "Sinergia entre mecánica, electrónica, control y software para crear robótica avanzada e Industria 4.0.",
        overview: "Combina de forma armónica la mecánica, la electrónica y la informática para diseñar productos y procesos industriales inteligentes, robóticos y automatizados.",
        competencies: [
          "Diseño de brazos robóticos y celdas de manufactura automatizada.",
          "Integración de sensores, actuadores y controladores lógicos (PLC).",
          "Programación de algoritmos de control inteligente e IA aplicada a máquinas.",
          "Modelado 3D de elementos mecánicos y diseño asistido por computador (CAD/CAM).",
          "Optimización de líneas de ensamble y procesos fabriles."
        ],
        practices: "Prácticas profesionales en empresas del sector automotriz, plantas embotelladoras, manufactura avanzada y automatización fabril.",
        advantages: [
          "Laboratorio de Robótica e Industria 4.0 equipado con brazos manipuladores y sistemas neumáticos.",
          "Enfoque multidisciplinar que amplía las oportunidades de empleo.",
          "Proyectos de grado orientados a la creación de prototipos funcionales patentables."
        ]
      },
      {
        id: "ing-multimedia",
        title: "Ingeniería Multimedia",
        faculty: "Ingeniería",
        price: "$8.337.000",
        semesters: "10 Semestres",
        modality: "Presencial / Diurna",
        degree: "Ingeniero(a) Multimedia",
        snies: "SNIES 103343",
        summary: "Desarrollo de videojuegos, animación 2D/3D, realidad virtual/aumentada, diseño UX/UI y contenido digital interactivo.",
        overview: "El Ingeniero Multimedia bonaventuriano crea soluciones tecnológicas innovadoras integrando programación, arte digital y narrativa interactiva para industrias creativas, entretenimiento, educación y simulación.",
        competencies: [
          "Desarrollo de videojuegos para consolas, PC y dispositivos móviles.",
          "Diseño y modelado 3D, animación y renderizado de alta fidelidad.",
          "Creación de experiencias inmersivas en Realidad Virtual (VR) y Aumentada (AR).",
          "Diseño de interfaces y experiencia de usuario (UX/UI) para plataformas digitales.",
          "Dirección técnica de producciones transmedia y comunicación interactiva."
        ],
        practices: "Pasantías en estudios de desarrollo de videojuegos, agencias interactivas, productoras audiovisuales, canales de televisión y laboratorios de simulación.",
        advantages: [
          "Salas Mac especializadas, laboratorios de captura de movimiento y VR.",
          "Participación en festivales de videojuegos y animación a nivel nacional e internacional.",
          "Fuerte componente de emprendimiento en industrias culturales y creativas."
        ]
      },
      {
        id: "ing-sonido",
        title: "Ingeniería de Sonido",
        faculty: "Ingeniería",
        price: "$10.300.000",
        semesters: "8 Semestres",
        modality: "Presencial / Diurna",
        degree: "Ingeniero(a) de Sonido",
        snies: "Programa Destacado en Colombia",
        summary: "Acústica arquitectónica, producción musical, diseño sonoro para cine/videojuegos y sonido en vivo.",
        overview: "Programa pionero y de altísimo reconocimiento. Combina el rigor técnico de las ondas sonoras y la física del sonido con la sensibilidad artística en la producción y el control acústico.",
        competencies: [
          "Diseño, grabación, mezcla y masterización de música en estudios profesionales.",
          "Diseño acústico y aislamiento para auditorios, salas de grabación y recintos.",
          "Ingeniería de sonido en vivo para conciertos y eventos multitudinarios.",
          "Foley, efectos de audio y diseño sonoro para cine, televisión y videojuegos.",
          "Medición y control de contaminación auditiva y ruido ambiental."
        ],
        practices: "Prácticas en estudios de grabación comerciales, empresas de sonido en vivo, firmas consultoras de diseño acústico y productoras de cine y TV.",
        advantages: [
          "Estudios de grabación profesionales insonorizados e insonorización de nivel comercial.",
          "Consolas analógicas y digitales de última generación.",
          "Red de egresados altamente posicionada en la industria musical e ingeniería acústica."
        ]
      },
      {
        id: "admin-empresas",
        title: "Administración de Empresas",
        faculty: "Ciencias Económicas y Administrativas",
        price: "$6.223.000",
        semesters: "8 Semestres",
        modality: "Presencial / Tarde, noche y sábado (Flexible)",
        degree: "Administrador(a) de Empresas",
        snies: "SNIES 53056",
        summary: "Dirección estratégica, gestión de proyectos, modelos de negocio sostenibles, finanzas y emprendimiento.",
        overview: "Forma gerentes líderes con visión global, capacidad analítica y pensamiento ético para dirigir organizaciones públicas o privadas o crear negocios de impacto sostenible.",
        competencies: [
          "Planeación estratégica y prospectiva de negocios.",
          "Análisis financiero, evaluación de proyectos y presupuestación corporativa.",
          "Liderazgo de equipos de alto desempeño y gestión del talento humano.",
          "Estrategias de mercadeo tradicional y marketing digital.",
          "Modelación y ejecución de planes de emprendimiento e innovación."
        ],
        practices: "Realización de práctica profesional en empresas del sector real, entidades financieras, programas de consultoría empresarial o mediante la consolidación del plan de empresa propio.",
        advantages: [
          "Horarios flexibles ideales para estudiar y trabajar.",
          "Posibilidad de cursar créditos de posgrado (MBA) desde el pregrado.",
          "Intercambios académicos internacionales con universidades aliadas."
        ]
      },
      {
        id: "contaduria",
        title: "Contaduría Pública",
        faculty: "Ciencias Económicas y Administrativas",
        price: "$5.816.000",
        semesters: "9 Semestres",
        modality: "Presencial",
        degree: "Contador(a) Público(a)",
        snies: "Registro Calificado Vigente",
        summary: "NIIF, auditoría financiera y forense, revisoría fiscal, tributaria y aseguramiento de la información.",
        overview: "El Contador Público bonaventuriano es un garante de la confianza pública y la transparencia financiera, experto en normatividad internacional (NIIF) e inteligencia de negocios contable.",
        competencies: [
          "Dictamen de estados financieros bajo Normas Internacionales (NIIF).",
          "Auditoría interna, externa y revisoría fiscal en organizaciones.",
          "Planeación tributaria y asesoría en impuestos corporativos.",
          "Implementación de sistemas de control de gestión y costos.",
          "Auditoría forense y prevención del riesgo de lavado de activos."
        ],
        practices: "Pasantías en reconocidas firmas de auditoría internacionales y nacionales, áreas contables y de contraloría corporativa.",
        advantages: [
          "Formación alineada a estándares globales NIIF / NIAS.",
          "Herramientas informáticas contables de vanguardia.",
          "Acompañamiento especializado para la obtención de la tarjeta profesional."
        ]
      },
      {
        id: "derecho",
        title: "Derecho",
        faculty: "Ciencias Jurídicas y Políticas",
        price: "$7.075.000",
        semesters: "9 Semestres",
        modality: "Presencial / Diurna",
        degree: "Abogado(a)",
        snies: "SNIES 53397",
        summary: "Litigio procesal, derecho público/privado, resolución de conflictos, técnica probatoria y judicatura.",
        overview: "Forma juristas integrales con sólidos conocimientos teóricos y prácticos en las diversas ramas del derecho, comprometidos con la justicia social, la defensa de los derechos humanos y la ética profesional.",
        competencies: [
          "Litigio procesal ante estrados judiciales en materia penal, civil, laboral y administrativa.",
          "Asesoría y consultoría jurídica para empresas públicas y privadas.",
          "Mecanismos alternativos de solución de conflictos (Conciliación y Arbitraje).",
          "Análisis constitucional y defensa de los Derechos Humanos.",
          "Formulación de contratos corporativos y gestión del derecho privado."
        ],
        practices: "Práctica obligatoria mediante el Consultorio Jurídico y Centro de Conciliación de la USB Bogotá, laboratorios de simulación de juicios orales o judicatura en despachos judiciales y fiscalías.",
        advantages: [
          "Consultorio Jurídico acreditado e integrado a la comunidad.",
          "Salas de audiencias de juzgados simulados para práctica oratoria.",
          "Opciones de doble programa con Ciencia Política y Relaciones Internacionales."
        ]
      },
      {
        id: "ciencia-politica",
        title: "Ciencia Política",
        faculty: "Ciencias Jurídicas y Políticas",
        price: "$7.075.000",
        semesters: "8 Semestres",
        modality: "Presencial / Diurna",
        degree: "Politólogo(a)",
        snies: "SNIES 53058",
        summary: "Formulación de políticas públicas, análisis electoral, gobernanza, gestión pública y relaciones institucionales.",
        overview: "Analiza y transforma los fenómenos políticos, el poder, el Estado y las políticas públicas con el fin de fortalecer la democracia y promover el desarrollo territorial incluyente.",
        competencies: [
          "Diseño, implementación y evaluación de políticas públicas.",
          "Consultoría en estrategias electorales, marketing político y campañas.",
          "Asesoría legislativa en el Congreso de la República, concejos y asambleas.",
          "Análisis de riesgos políticos para inversión y proyectos corporativos.",
          "Mediación y gestión de conflictos sociales y comunitarios."
        ],
        practices: "Mínimo 480 horas de práctica en el 7.º u 8.º semestre en entidades públicas (Congreso, Ministerios, Alcaldías), partidos políticos, ONG u organismos multilaterales.",
        advantages: [
          "Núcleo básico compartido que facilita el doble programa con Derecho o Relaciones Internacionales.",
          "Red de semilleros de investigación en temas de paz, territorio y gobernanza.",
          "Cerca de 125 profesionales destacados formados en la sede."
        ]
      },
      {
        id: "relaciones-internacionales",
        title: "Relaciones Internacionales",
        faculty: "Ciencias Jurídicas y Políticas",
        price: "$7.075.000",
        semesters: "9 Semestres",
        modality: "Presencial / Diurna",
        degree: "Profesional en Relaciones Internacionales",
        snies: "Registro Calificado Vigente",
        summary: "Diplomacia, geopolítica, cooperación internacional, comercio exterior y organismos multilaterales.",
        overview: "Forma expertos en el escenario global capaces de comprender la interacción entre Estados, organizaciones internacionales, ONGs y empresas multinacionales para impulsar la cooperación y los negocios internacionales.",
        competencies: [
          "Análisis de coyuntura geopolítica y relaciones diplomáticas.",
          "Gestión y consecución de fondos en proyectos de Cooperación Internacional.",
          "Asesoría en comercio exterior y negocios internacionales.",
          "Representación y negociación en foros multilaterales.",
          "Diseño de estrategias de internacionalización para entes públicos y privados."
        ],
        practices: "Pasantías profesionales en el Ministerio de Relaciones Exteriores (Cancillería), embajadas, agencias de cooperación (APC Colombia), ONGs internacionales y multinacionales.",
        advantages: [
          "Formación multidisciplinar en diplomacia, economía internacional y derecho internacional.",
          "Intercambios y modelos de simulación de la ONU (MUN).",
          "Posibilidad de titulación conjunta o doble programa."
        ]
      },
      {
        id: "lic-educacion-infantil",
        title: "Licenciatura en Educación Infantil",
        faculty: "Humanidades y Ciencias de la Educación",
        price: "$4.267.000",
        semesters: "8 Semestres",
        modality: "Presencial",
        degree: "Licenciado(a) en Educación Infantil",
        snies: "Registro Calificado Vigente",
        summary: "Pedagogía de la primera infancia, desarrollo infantil, inclusión educativa, lenguaje y expresión artística.",
        overview: "Forma educadores apasionados y capacitados para liderar los procesos pedagógicos, de cuidado y de desarrollo integral en la primera infancia con enfoques inclusivos e innovadores.",
        competencies: [
          "Diseño e implementación de currículos y estrategias didácticas para la primera infancia.",
          "Atención a la diversidad e inclusión de niños con necesidades educativas especiales.",
          "Liderazgo de centros educativos y jardines infantiles.",
          "Acompañamiento a familias en pautas de crianza y desarrollo socioemocional.",
          "Investigación pedagógica aplicada al aprendizaje temprano."
        ],
        practices: "Prácticas pedagógicas continuas desde los primeros semestres en jardines infantiles del ICBF, instituciones educativas públicas y privadas, y proyectos sociales.",
        advantages: [
          "Uso de aulas especializadas en expresión artística, juego y literatura infantil.",
          "Enfoque práctico con alto compromiso social.",
          "Convenios con redes de educación inicial en Bogotá y la región."
        ]
      },
      {
        id: "lic-filosofia",
        title: "Licenciatura en Filosofía",
        faculty: "Humanidades y Ciencias de la Educación",
        price: "$4.064.000",
        semesters: "8 Semestres",
        modality: "Presencial / Diurna",
        degree: "Licenciado(a) en Filosofía",
        snies: "SNIES 1371 - Acreditación de Alta Calidad",
        summary: "Enseñanza de la filosofía, bioética, pensamiento crítico, epistemología y gestión educativa.",
        overview: "Programa Acreditado en Alta Calidad. Prepara docentes e investigadores con capacidad reflexiva para promover el pensamiento crítico, la ética y la comprensión de los retos contemporáneos.",
        competencies: [
          "Docencia de la filosofía y ciencias humanas en educación media y superior.",
          "Desarrollo de proyectos de pensamiento crítico y bioética para la comunidad.",
          "Asesoría editorial y redacción de textos académicos y filosóficos.",
          "Gestión de proyectos culturales y de desarrollo humano.",
          "Investigación en filosofía de la educación y humanismo."
        ],
        practices: "Prácticas docentes supervisadas desde 2.º semestre en instituciones de educación básica, media y proyectos de educación no formal.",
        advantages: [
          "Acreditación de Alta Calidad por 7 años concedida por el Ministerio de Educación.",
          "Oportunidades de movilidad internacional (Programa ROMA).",
          "Publicación de trabajos en revistas de investigación filosófica."
        ]
      },
      {
        id: "lic-teologia",
        title: "Licenciatura en Teología",
        faculty: "Humanidades y Ciencias de la Educación",
        price: "$4.064.000",
        semesters: "8 Semestres",
        modality: "Presencial / Diurna",
        degree: "Licenciado(a) en Teología",
        snies: "Registro Calificado Vigente",
        summary: "Teología sistemática, hermenéutica bíblica, pensamiento franciscano, ética y acción pastoral.",
        overview: "Ofrece una formación teológica rigurosa, crítica e interdisciplinar en diálogo con el mundo actual, la cultura contemporánea y las demandas de justicia social.",
        competencies: [
          "Docencia en las áreas de educación religiosa, ética y valores morales.",
          "Diseño y liderazgo de programas socio-pastorales e interreligiosos.",
          "Investigación bíblica y teológica en contexto.",
          "Asesoría ética en instituciones hospitalarias, educativas y sociales.",
          "Gestión de comunidades y proyectos de construcción de paz."
        ],
        practices: "Prácticas en instituciones educativas, organizaciones no gubernamentales, comunidades parroquiales y centros de acompañamiento social.",
        advantages: [
          "Sólida tradición franciscana de diálogo y humanismo.",
          "Enfoque en ecumenismo y responsabilidad social.",
          "Interacción con redes teológicas de América Latina."
        ]
      },
      {
        id: "prof-lengua-inglesa",
        title: "Profesional en Lengua Inglesa",
        faculty: "Humanidades y Ciencias de la Educación",
        price: "$4.955.000",
        semesters: "8 Semestres",
        modality: "Virtual / Horarios flexibles",
        degree: "Profesional en Lengua Inglesa",
        snies: "Modalidad 100% Virtual",
        summary: "Dominio avanzado de inglés, traducción, interpretación, lingüística aplicada y enseñanza.",
        overview: "Diseñado para formar profesionales bilingües de alto rendimiento capaces de desempeñarse con excelencia en entornos multiculturales, traducción, interpretación y enseñanza del idioma.",
        competencies: [
          "Comunicación efectiva en nivel avanzado (C1/C2) según el Marco Común Europeo.",
          "Traducción e interpretación de textos comerciales, técnicos y literarios.",
          "Enseñanza del idioma inglés mediante entornos virtuales e interactivos.",
          "Gestión de la comunicación corporativa bilingüe para multinacionales.",
          "Diseño de contenidos pedagógicos digitales para el aprendizaje de idiomas."
        ],
        practices: "Prácticas aplicadas en empresas de servicios bilingües, plataformas de e-learning, centros de lenguas y agencias de traducción.",
        advantages: [
          "Modalidad 100% virtual con máxima flexibilidad de horarios.",
          "Acompañamiento del Centro Bonaventuriano de Lenguas y Culturas (CBLC).",
          "Plataforma tecnológica interactiva de última generación."
        ]
      }
    ];

    const technologyData = [
      {
        id: "tec-desarrollo-software",
        title: "Tecnología en Desarrollo de Software",
        faculty: "Ingeniería",
        price: "$2.574.000",
        semesters: "6 Semestres",
        modality: "Presencial / Nocturna",
        degree: "Tecnólogo(a) en Desarrollo de Software",
        snies: "Registro Calificado Vigente",
        summary: "Diseño, construcción, pruebas y mantenimiento de soluciones de software web, móviles y de escritorio.",
        overview: "Forma tecnólogos capacitados en el diseño, construcción, pruebas y mantenimiento de soluciones de software web, móviles y de escritorio, orientados a impulsar la transformación digital en organizaciones mediante lenguajes de programación modernos y arquitecturas de software eficientes.",
        competencies: [
          "Desarrollo y programación de aplicaciones web y móviles responsivas.",
          "Modelado, consulta y administración de bases de datos relacionales y NoSQL.",
          "Implementación de metodologías ágiles de desarrollo de software (Scrum, Kanban).",
          "Integración de APIs, servicios web y soluciones en la nube.",
          "Control de versiones, pruebas de software y aseguramiento de calidad (QA)."
        ],
        practices: "Pasantías laborales en empresas de la industria TI, casas de desarrollo de software, departamentos de sistemas corporativos, startups tecnológicas o mediante el desarrollo de proyectos aplicados de innovación.",
        advantages: [
          "Cadena de formación y homologación directa hacia el programa profesional de Ingeniería de Sistemas.",
          "Horarios nocturnos que facilitan alternar el estudio con el desarrollo de experiencia laboral en la industria.",
          "Acceso a laboratorios de cómputo de alto rendimiento y licencias de software especializado."
        ]
      },
      {
        id: "tec-automatizacion-industrial",
        title: "Tecnología en Automatización Industrial",
        faculty: "Ingeniería",
        price: "$2.574.000",
        semesters: "6 Semestres",
        modality: "Presencial / Nocturna",
        degree: "Tecnólogo(a) en Automatización Industrial",
        snies: "Registro Calificado Vigente",
        summary: "Instrumentación, programación y mantenimiento de sistemas automatizados y electromecánicos para la Industria 4.0.",
        overview: "Capacita profesionales en la instrumentación, operación, programación, inspección y mantenimiento de sistemas automatizados y electromecánicos en entornos fabriles de la Industria 4.0, garantizando la eficiencia operacional de las líneas de producción.",
        competencies: [
          "Programación y puesta en marcha de controladores lógicos programables (PLC) e interfaces HMI.",
          "Selección, calibración e inspección de sensores, actuadores y sistemas neumático-hidráulicos.",
          "Mantenimiento predictivo y correctivo de líneas de producción e instrumentación industrial.",
          "Integración de redes de comunicación industrial (Profinet, Modbus, Ethernet/IP).",
          "Supervisión de procesos mediante sistemas SCADA e integración de celdas automatizadas."
        ],
        practices: "Prácticas empresariales en plantas fabriles, industrias manufactureras, empresas de alimentos, embotelladoras, firmas integradoras de tecnología e instrumentación industrial.",
        advantages: [
          "Articulación y cadena de homologación hacia las carreras profesionales de Ingeniería Electrónica e Ingeniería Mecatrónica.",
          "Formación práctica intensiva en laboratorios especializados de automatización y control industrial.",
          "Horario nocturno diseñado para favorecer la vinculación laboral temprana en el sector industrial."
        ]
      },
      {
        id: "tec-produccion-audio",
        title: "Tecnología en Producción de Audio para Medios Audiovisuales",
        faculty: "Ingeniería",
        price: "$2.574.000",
        semesters: "6 Semestres",
        modality: "Presencial / Nocturna",
        degree: "Tecnólogo(a) en Producción de Audio para Medios Audiovisuales",
        snies: "Registro Calificado Vigente",
        summary: "Captura, edición, mezcla, sonorización, diseño sonoro y posproducción de audio para medios y entretenimiento digital.",
        overview: "Forma especialistas en la captura de sonido directo, microfonía en set, edición, mezcla, sonorización, diseño sonoro y posproducción de audio para televisión, cine, radio, plataformas de streaming y videojuegos.",
        competencies: [
          "Captura de sonido directo y microfonía en sets de rodaje y producciones audiovisuales.",
          "Edición, mezcla y posproducción de sonido estéreo, multicanal e inmersivo.",
          "Creación de efectos de sonido foley, ambientes y diseño sonoro para medios interactivos.",
          "Restauración sonora, ecualización y procesamiento de diálogos para cine y televisión.",
          "Operación de estaciones de trabajo de audio digital (DAWs) y consolas en entornos de radiodifusión."
        ],
        practices: "Pasantías y proyectos de aplicación en estudios de posproducción audiovisual, canales de televisión, casas productoras de cine, emisoras de radio y proyectos del semillero de investigación «ESTARTE».",
        advantages: [
          "Cadena de homologación directa con el programa profesional de Ingeniería de Sonido.",
          "Uso de estudios de grabación profesional, salas de mezcla e insonorización de nivel comercial.",
          "Enfoque con alta demanda en el sector de las industrias creativas y del entretenimiento digital."
        ]
      },
      {
        id: "tec-contabilidad-finanzas",
        title: "Tecnología en Contabilidad y Finanzas Internacionales",
        faculty: "Ciencias Económicas y Administrativas",
        price: "$2.574.000",
        semesters: "6 Semestres",
        modality: "Virtual (con opción flexible de cursar asignaturas presenciales)",
        degree: "Tecnólogo(a) en Contabilidad y Finanzas Internacionales",
        snies: "Registro Calificado Vigente",
        summary: "Procesamiento y análisis de información contable, presupuestal y financiera bajo NIIF, con visión global.",
        overview: "Forma técnicos superiores expertos en el procesamiento, análisis y soporte de información contable, presupuestal y financiera conforme a las Normas Internacionales de Información Financiera (NIIF), capacitados para apoyar la toma de decisiones en organizaciones con visión e inserción global.",
        competencies: [
          "Registro, conciliación y procesamiento de transacciones contables bajo estándares NIIF.",
          "Análisis de estados financieros, liquidación de impuestos y costos operativos.",
          "Manejo de software contable corporativo y herramientas informáticas de inteligencia financiera.",
          "Apoyo en auditorías internas, control presupuestal y tesorería corporativa.",
          "Asistencia en procesos de comercio exterior y operaciones financieras internacionales."
        ],
        practices: "Pasantías laborales en departamentos contables y financieros de empresas multinacionales, firmas de auditoría y consultoría, sector bancario, entidades públicas y PYMES.",
        advantages: [
          "Homologación 100% directa hacia el título profesional de Contaduría Pública en la universidad.",
          "Modalidad virtual flexible que permite estudiar desde cualquier lugar y alternar con la jornada laboral.",
          "Plan académico alineado a las exigencias globales del mercado tributario y financiero."
        ]
      }
    ];

    const posgradoAdmissionUrl = 'https://www.usbbog.edu.co/admisiones/posgrado/';
    const posgradoData = [
      {
        id: 'especializacion-psicologia-seguridad-salud-trabajo',
        title: 'Especialización en Psicología de la Seguridad y Salud en el Trabajo',
        faculty: 'Psicología',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/especializacion-en-psicologia-de-la-seguridad-y-salud-en-el-trabajo/'
      },
      {
        id: 'especializacion-evaluacion-diagnostico-neuropsicologico',
        title: 'Especialización en Evaluación y Diagnóstico Neuropsicológico',
        faculty: 'Psicología',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/especializacion-en-evaluacion-y-diagnostico-neuropsicologico/'
      },
      {
        id: 'maestria-psicologia-clinica',
        title: 'Maestría en Psicología Clínica',
        faculty: 'Psicología',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-psicologia/maestria-en-psicologia-clinica/'
      },
      {
        id: 'especializacion-pedagogia-docencia-universitaria',
        title: 'Especialización en Pedagogía y Docencia Universitaria',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/especializacion-en-pedagogia-y-docencia-universitaria/'
      },
      {
        id: 'maestria-educacion-mediada-tic',
        title: 'Maestría en Educación Mediada con las TIC',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-educacion-mediada-con-las-tic/'
      },
      {
        id: 'maestria-ciencias-educacion',
        title: 'Maestría en Ciencias de la Educación',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-ciencias-de-la-educacion/'
      },
      {
        id: 'maestria-filosofia-contemporanea',
        title: 'Maestría en Filosofía Contemporánea',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-filosofia-contemporanea/'
      },
      {
        id: 'maestria-teologia-biblia',
        title: 'Maestría en Teología de la Biblia',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/maestria-en-teologia-de-la-biblia/'
      },
      {
        id: 'doctorado-humanidades-humanismo-persona',
        title: 'Doctorado en Humanidades. Humanismo y Persona',
        faculty: 'Humanidades y Ciencias de la Educación',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-humanidades-y-ciencias-de-la-educacion/doctorado-en-humanidades-humanismo-y-persona/'
      },
      {
        id: 'especializacion-produccion-audiovisual-ia',
        title: 'Especialización en Producción Audiovisual Asistida por Inteligencia Artificial',
        faculty: 'Ingeniería',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-produccion-audiovisual-asistida-por-inteligencia-artificial/'
      },
      {
        id: 'especializacion-automatizacion-procesos-industriales',
        title: 'Especialización en Automatización de Procesos Industriales',
        faculty: 'Ingeniería',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-automatizacion-de-procesos-industriales/'
      },
      {
        id: 'especializacion-gestion-soluciones-digitales',
        title: 'Especialización en Gestión de Soluciones Digitales',
        faculty: 'Ingeniería',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/especializacion-en-gestion-de-soluciones-digitales/'
      },
      {
        id: 'maestria-ingenieria-informatica',
        title: 'Maestría en Ingeniería Informática',
        faculty: 'Ingeniería',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/maestria-en-ingenieria-informatica/'
      },
      {
        id: 'maestria-internet-cosas-transformacion-digital',
        title: 'Maestría en Internet de las Cosas y Transformación Digital',
        faculty: 'Ingeniería',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ingenieria/maestria-en-internet-de-las-cosas-y-transformacion-digital/'
      },
      {
        id: 'maestria-direccion-empresas-mba',
        title: 'Maestría en Dirección de Empresas (MBA)',
        faculty: 'Ciencias Económicas y Administrativas',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-economicas-y-administrativas/maestria-en-direccion-de-empresas/'
      },
      {
        id: 'especializacion-contratacion-estatal-derecho-sancionatorio',
        title: 'Especialización en Contratación Estatal y Derecho Sancionatorio',
        faculty: 'Ciencias Jurídicas y Políticas',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/especializacion-en-contratacion-estatal-y-derecho-sancionatorio/'
      },
      {
        id: 'maestria-derecho-administracion-justicia',
        title: 'Maestría en Derecho y Administración de Justicia',
        faculty: 'Ciencias Jurídicas y Políticas',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-derecho-y-administracion-de-justicia/'
      },
      {
        id: 'maestria-dinamicas-territoriales-desarrollo',
        title: 'Maestría en Dinámicas Territoriales y Desarrollo',
        faculty: 'Ciencias Jurídicas y Políticas',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-dinamicas-territoriales-y-desarrollo/'
      },
      {
        id: 'maestria-derecho-internacional-relaciones-internacionales',
        title: 'Maestría en Derecho Internacional y Relaciones Internacionales',
        faculty: 'Ciencias Jurídicas y Políticas',
        url: 'https://www.usbbog.edu.co/facultades/facultad-de-ciencias-juridicas-y-politicas/maestria-en-derecho-internacional-y-relaciones-internacionales/'
      }
    ].map(program => ({
      id: program.id,
      title: program.title,
      faculty: program.faculty,
      price: 'Consultar ficha oficial',
      semesters: 'Consultar ficha oficial',
      modality: 'Consultar ficha oficial',
      degree: 'Posgrado',
      snies: 'Consultar ficha oficial',
      summary: 'Consulta la ficha oficial para conocer la información académica vigente de este programa.',
      overview: 'Consulta la ficha oficial del programa para conocer su perfil, plan de estudios y modalidad.',
      competencies: ['Consulta la ficha oficial del programa.'],
      practices: 'Consulta la ficha oficial del programa para conocer su plan de estudios y actividades formativas.',
      advantages: ['Consulta la ficha oficial del programa.'],
      extraSections: [
        {
          title: 'Requisitos de admisión',
          text: 'Los requisitos específicos para este programa están pendientes de confirmación en una fuente oficial. Consulta el proceso de admisión de posgrado y confirma los requisitos vigentes con la Universidad.',
          url: posgradoAdmissionUrl
        },
        {
          title: 'Ficha oficial del programa',
          text: 'Consulta la información académica vigente en el sitio oficial de la Universidad.',
          url: program.url
        }
      ]
    }));

    const programFields = [
      'title', 'faculty', 'price', 'semesters', 'modality', 'degree',
      'snies', 'summary', 'overview', 'competencies', 'practices', 'advantages'
    ];
    let programChangeHistory = [];
    let supabaseClient = null;
    let remoteProgramCount = 0;
    let remotePosgradoCount = 0;
    let currentAdminUser = '';
    let adminLoggedIn = false;
    const bundledPrograms = programData.map(program => ({
      ...program,
      competencies: [...program.competencies],
      advantages: [...program.advantages]
    }));
    const bundledTechnologies = technologyData.map(program => ({
      ...program,
      competencies: [...program.competencies],
      advantages: [...program.advantages]
    }));
    const bundledPosgrados = posgradoData.map(program => ({
      ...program,
      competencies: [...program.competencies],
      advantages: [...program.advantages],
      extraSections: program.extraSections.map(section => ({ ...section }))
    }));

    function showSupabaseStatus(message, isError = false) {
      const status = document.getElementById('supabaseStatus');
      status.textContent = message;
      status.hidden = !message;
      status.classList.toggle('is-error', isError);
    }

    function fromDatabaseProgram(row) {
      return {
        id: row.id,
        title: row.title,
        faculty: row.faculty,
        price: row.price,
        semesters: row.semesters,
        modality: row.modality,
        degree: row.degree,
        snies: row.snies,
        summary: row.summary,
        overview: row.overview,
        competencies: row.competencies,
        practices: row.practices,
        advantages: row.advantages,
        extraSections: row.extra_sections || [],
        sortOrder: row.sort_order
      };
    }

    function toDatabaseProgram(program, catalog, sortOrder) {
      return {
        id: program.id,
        catalog,
        title: program.title,
        faculty: program.faculty,
        price: program.price,
        semesters: program.semesters,
        modality: program.modality,
        degree: program.degree,
        snies: program.snies,
        summary: program.summary,
        overview: program.overview,
        competencies: program.competencies,
        practices: program.practices,
        advantages: program.advantages,
        extra_sections: program.extraSections || [],
        sort_order: sortOrder
      };
    }

    async function loadProgramsFromSupabase() {
      const { data, error } = await supabaseClient
        .from('programs')
        .select('*')
        .order('catalog')
        .order('sort_order')
        .order('id');
      if (error) throw error;

      const pregrados = data.filter(row => row.catalog === 'pregrados').map(fromDatabaseProgram);
      const technologies = data.filter(row => row.catalog === 'tecnologias').map(fromDatabaseProgram);
      const posgrados = data.filter(row => row.catalog === 'posgrados').map(fromDatabaseProgram);
      programData.splice(0, programData.length, ...pregrados);
      technologyData.splice(0, technologyData.length, ...technologies);
      posgradoData.splice(0, posgradoData.length, ...(posgrados.length ? posgrados : bundledPosgrados));
      remoteProgramCount = data.length;
      remotePosgradoCount = posgrados.length;
      switchCatalog(currentCatalog);
      if (adminLoggedIn) renderAdminProgramList();
      return data;
    }

    async function loadProgramHistory() {
      const { data, error } = await supabaseClient
        .from('program_change_history')
        .select('id, program_id, program_title, operation, actor_id, actor_email, changed_fields, before_data, after_data, changed_at')
        .order('changed_at', { ascending: false })
        .limit(500);
      if (error) throw error;

      const labels = {
        id: 'Identificador',
        catalog: 'Catálogo',
        title: 'Nombre del programa',
        faculty: 'Facultad',
        price: 'Precio por semestre',
        semesters: 'Duración',
        modality: 'Modalidad',
        degree: 'Título otorgado',
        snies: 'SNIES / registro',
        summary: 'Resumen',
        overview: 'Enfoque y perfil',
        competencies: 'Competencias',
        practices: 'Prácticas profesionales',
        advantages: 'Ventajas',
        extra_sections: 'Información adicional',
        sort_order: 'Orden'
      };
      programChangeHistory = data.map(entry => ({
        id: String(entry.id),
        timestamp: entry.changed_at,
        actor: entry.actor_email || entry.actor_id || 'Administrador',
        action: entry.operation === 'INSERT' ? 'Programa creado'
          : entry.operation === 'UPDATE' ? 'Programa actualizado' : 'Programa eliminado',
        programTitle: entry.program_title,
        changes: (entry.changed_fields || []).map(field => ({
          field: labels[field] || field,
          before: entry.operation === 'INSERT'
            ? '(nuevo programa)'
            : formatAuditValue(entry.before_data?.[field]),
          after: entry.operation === 'DELETE'
            ? '(programa eliminado)'
            : formatAuditValue(entry.after_data?.[field])
        }))
      }));
      renderProgramHistory();
    }

    async function initializeSupabase() {
      const config = window.SUPABASE_CONFIG;
      if (!config || !config.url || !config.publishableKey || !window.supabase?.createClient) {
        showSupabaseStatus('No se pudo iniciar Supabase. Verifica la conexión a internet y el archivo supabase-config.js.', true);
        return;
      }

      try {
        supabaseClient = window.supabase.createClient(config.url, config.publishableKey);
        supabaseClient.auth.onAuthStateChange(event => {
          if (event !== 'PASSWORD_RECOVERY') return;

          document.getElementById('adminPanel').hidden = false;
          document.body.classList.add('admin-mode');
          document.getElementById('adminLogin').hidden = false;
          document.getElementById('adminLoginForm').hidden = true;
          document.getElementById('forgotAdminPassword').hidden = true;
          document.getElementById('adminRecoveryForm').hidden = true;
          document.getElementById('adminSetPasswordForm').hidden = false;
          document.getElementById('adminLoginMessage').textContent = '';
          document.getElementById('adminSetPasswordMessage').textContent = '';
          document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('adminNewPassword').focus();
        });
        await loadProgramsFromSupabase();
        if (remoteProgramCount === 0) {
          showSupabaseStatus('La base de datos aún está vacía. Inicia sesión como administrador para importar el catálogo inicial.');
        } else {
          showSupabaseStatus('');
        }
      } catch (error) {
        showSupabaseStatus(`No se pudo cargar el catálogo de Supabase: ${error.message}`, true);
      }
    }

    let currentCatalog = 'pregrados';
    let currentFaculty = 'todas';

    function getActivePrograms() {
      if (currentCatalog === 'tecnologias') return technologyData;
      if (currentCatalog === 'posgrados') return posgradoData;
      return programData;
    }

    function switchCatalog(catalog) {
      currentCatalog = catalog;
      currentFaculty = 'todas';
      closeDetail();

      const isTechnology = catalog === 'tecnologias';
      const isPosgrado = catalog === 'posgrados';
      const undergraduateTab = document.getElementById('undergraduateTab');
      const technologyTab = document.getElementById('technologyTab');
      if (undergraduateTab && technologyTab) {
        undergraduateTab.classList.toggle('active', !isTechnology);
        undergraduateTab.setAttribute('aria-selected', String(!isTechnology));
        technologyTab.classList.toggle('active', isTechnology);
        technologyTab.setAttribute('aria-selected', String(isTechnology));
      }
      document.getElementById('catalogHeading').innerText = isTechnology
        ? 'Tecnologías por facultad'
        : isPosgrado ? 'Posgrados' : 'Pregrados profesionales';

      renderFacultyFilters();
      filterPrograms();
    }

    function renderFacultyFilters() {
      const container = document.getElementById('facultyFilters');
      const faculties = [...new Set(getActivePrograms().map(program => program.faculty))];
      if (!faculties.includes(currentFaculty)) currentFaculty = 'todas';

      container.replaceChildren();
      ['todas', ...faculties].forEach(faculty => {
        const pill = document.createElement('button');
        pill.className = `pill${faculty === currentFaculty ? ' active' : ''}`;
        pill.type = 'button';
        pill.dataset.faculty = faculty;
        pill.textContent = faculty === 'todas' ? 'Todas las Facultades' : faculty;
        pill.addEventListener('click', () => filterFaculty(faculty));
        container.appendChild(pill);
      });
    }

    function escapeHTML(value) {
      return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[character]);
    }

    function renderCards(programs) {
      const grid = document.getElementById('programsGrid');
      grid.innerHTML = '';
      grid.classList.toggle('technology-grid', currentCatalog === 'tecnologias');

      if (programs.length === 0) {
        grid.innerHTML = `
          <div class="empty-results">
            <h3>No se encontraron programas</h3>
            <p>Intenta con otros términos de búsqueda o cambia el filtro de facultad.</p>
          </div>
        `;
        return;
      }

      if (currentCatalog === 'tecnologias') {
        const programsByFaculty = new Map();
        programs.forEach(program => {
          if (!programsByFaculty.has(program.faculty)) {
            programsByFaculty.set(program.faculty, []);
          }
          programsByFaculty.get(program.faculty).push(program);
        });

        programsByFaculty.forEach((facultyPrograms, faculty) => {
          const section = document.createElement('section');
          section.className = 'technology-faculty-section';

          const heading = document.createElement('h3');
          heading.className = 'technology-faculty-title';
          heading.textContent = `Facultad de ${faculty}`;
          section.appendChild(heading);

          const buttons = document.createElement('div');
          buttons.className = 'technology-program-buttons';
          facultyPrograms.forEach(program => {
            const button = document.createElement('button');
            button.className = 'technology-program-button';
            button.type = 'button';
            button.textContent = program.title;
            button.setAttribute('aria-label', `Ver información de ${program.title}`);
            button.addEventListener('click', () => openDetail(program.id));
            buttons.appendChild(button);
          });

          section.appendChild(buttons);
          grid.appendChild(section);
        });
        return;
      }

      programs.forEach(prog => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver información detallada de ${prog.title}`);
        card.onclick = () => openDetail(prog.id);
        card.onkeydown = event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openDetail(prog.id);
          }
        };

        card.innerHTML = `
          <div class="card-faculty">${escapeHTML(prog.faculty)}</div>
          <div class="card-title">${escapeHTML(prog.title)}</div>
          <div class="card-tags">
            <span class="tag">${escapeHTML(prog.modality.split('/')[0])}</span>
            <span class="tag">${escapeHTML(prog.semesters)}</span>
          </div>
          <div class="card-price">${currentCatalog === 'posgrados'
            ? escapeHTML(prog.price)
            : `${escapeHTML(prog.price)} <span>/ semestre</span>`}</div>
          <div class="card-summary">${escapeHTML(prog.summary)}</div>
          <div class="card-footer">
            <span>Ver información detallada</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function filterPrograms() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      
      const filtered = getActivePrograms().filter(prog => {
        const matchesFaculty = (currentFaculty === 'todas' || prog.faculty === currentFaculty);
        const searchableContent = [
          prog.title,
          prog.summary,
          prog.faculty,
          prog.overview,
          prog.degree,
          prog.modality,
          ...prog.competencies,
          prog.practices,
          ...prog.advantages,
          ...(prog.extraSections || []).flatMap(section => [section.title, section.text])
        ].join(' ').toLowerCase();
        const matchesSearch = searchableContent.includes(searchTerm);
        return matchesFaculty && matchesSearch;
      });

      renderCards(filtered);
    }

    function filterFaculty(faculty) {
      currentFaculty = faculty;
      
      // Update active pill button UI
      const pills = document.querySelectorAll('#facultyFilters .pill');
      pills.forEach(pill => {
        if (pill.dataset.faculty === faculty) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });

      // Close detail view if open
      closeDetail();
      filterPrograms();
    }

    function openDetail(progId) {
      const prog = getActivePrograms().find(p => p.id === progId);
      if (!prog) return;

      document.getElementById('detFaculty').innerText = prog.faculty;
      document.getElementById('detTitle').innerText = prog.title;
      document.getElementById('detSub').innerText = `${prog.degree} • ${prog.snies}`;
      const isPosgrado = currentCatalog === 'posgrados';
      document.getElementById('detPriceHeading').textContent = isPosgrado ? 'Valor de matrícula' : 'Valor por Semestre';
      document.getElementById('detPrice').innerText = isPosgrado
        ? prog.price
        : `${prog.price} COP`;
      document.getElementById('detDuration').innerText = prog.semesters;
      document.getElementById('detModality').innerText = prog.modality;
      document.getElementById('detDegree').innerText = prog.degree;
      document.getElementById('detOverview').innerText = prog.overview;
      document.getElementById('detPractices').innerText = prog.practices;
      document.getElementById('detOverview').closest('.detail-section').hidden = isPosgrado;
      document.getElementById('detCompetencies').closest('.detail-section').hidden = isPosgrado;
      document.getElementById('detPractices').closest('.detail-section').hidden = isPosgrado;
      document.getElementById('detAdvantages').closest('.detail-section').hidden = isPosgrado;

      // Populate list items
      const compUl = document.getElementById('detCompetencies');
      compUl.replaceChildren(...prog.competencies.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
      }));

      const advUl = document.getElementById('detAdvantages');
      advUl.replaceChildren(...prog.advantages.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
      }));

      const extraSections = document.getElementById('detExtraSections');
      extraSections.replaceChildren(...(prog.extraSections || []).map(section => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'detail-section';
        const heading = document.createElement('h3');
        heading.textContent = section.title;
        const text = document.createElement('p');
        text.textContent = section.text;
        sectionElement.append(heading, text);
        const safeUrl = getHttpsUrl(section.url);
        if (safeUrl) {
          const link = document.createElement('a');
          link.href = safeUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = 'Consultar fuente oficial';
          sectionElement.appendChild(link);
        }
        return sectionElement;
      }));

      // Hide Grid & Show Detail View
      document.getElementById('programsGrid').style.display = 'none';
      document.getElementById('detailView').style.display = 'block';
      
      // Scroll to top of detail view
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }

    function closeDetail() {
      document.getElementById('detailView').style.display = 'none';
      document.getElementById('programsGrid').style.removeProperty('display');
      document.querySelectorAll('#detailView .detail-section').forEach(section => {
        section.hidden = false;
      });
    }

    function getHttpsUrl(value) {
      try {
        const url = new URL(value);
        return url.protocol === 'https:' ? url.href : '';
      } catch {
        return '';
      }
    }

    function renderAdminProgramList() {
      const list = document.getElementById('adminProgramList');
      list.replaceChildren();

      [
        ...programData.map(program => ({ program, catalog: 'pregrados' })),
        ...technologyData.map(program => ({ program, catalog: 'tecnologias' })),
        ...posgradoData.map(program => ({ program, catalog: 'posgrados' }))
      ].forEach(({ program, catalog }) => {
        const row = document.createElement('div');
        row.className = 'admin-program-row';

        const label = document.createElement('div');
        const name = document.createElement('span');
        name.className = 'admin-program-name';
        name.textContent = program.title;
        const type = document.createElement('span');
        type.className = 'admin-program-type';
        type.textContent = catalog === 'pregrados' ? 'Pregrado profesional'
          : catalog === 'tecnologias' ? 'Tecnología' : 'Posgrado';
        label.append(name, type);

        const actions = document.createElement('div');
        actions.className = 'admin-program-actions';
        const editButton = document.createElement('button');
        editButton.className = 'admin-button';
        editButton.type = 'button';
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => editProgram(catalog, program));
        const deleteButton = document.createElement('button');
        deleteButton.className = 'admin-button admin-button-danger';
        deleteButton.type = 'button';
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', () => deleteProgram(catalog, program));
        actions.append(editButton, deleteButton);

        row.append(label, actions);
        list.appendChild(row);
      });
    }

    function editProgram(catalog, program) {
      document.getElementById('adminEditingId').value = program.id;
      document.getElementById('adminProgramCatalog').value = catalog;
      document.getElementById('adminProgramTitle').value = program.title;
      document.getElementById('adminProgramFaculty').value = program.faculty;
      document.getElementById('adminProgramPrice').value = program.price;
      document.getElementById('adminProgramSemesters').value = program.semesters;
      document.getElementById('adminProgramModality').value = program.modality;
      document.getElementById('adminProgramDegree').value = program.degree;
      document.getElementById('adminProgramSnies').value = program.snies;
      document.getElementById('adminProgramSummary').value = program.summary;
      document.getElementById('adminProgramOverview').value = program.overview;
      document.getElementById('adminProgramCompetencies').value = program.competencies.join('\n');
      document.getElementById('adminProgramPractices').value = program.practices;
      document.getElementById('adminProgramAdvantages').value = program.advantages.join('\n');
      renderExtraSectionFields(program.extraSections || []);
      document.getElementById('adminFormHeading').textContent = `Editar: ${program.title}`;
      document.getElementById('adminFormMessage').textContent = '';
      document.getElementById('adminProgramForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function resetProgramEditor() {
      const form = document.getElementById('adminProgramForm');
      form.reset();
      document.getElementById('adminEditingId').value = '';
      renderExtraSectionFields([]);
      document.getElementById('adminProgramCatalog').value = currentCatalog;
      document.getElementById('adminFormHeading').textContent = 'Agregar programa';
      document.getElementById('adminFormMessage').textContent = '';
    }

    function renderExtraSectionFields(sections) {
      const container = document.getElementById('adminExtraSectionList');
      container.replaceChildren(...sections.map(section => createExtraSectionField(section)));
    }

    let extraSectionFieldId = 0;

    function createExtraSectionField(section = { title: '', text: '', url: '' }) {
      extraSectionFieldId += 1;
      const fieldId = extraSectionFieldId;
      const wrapper = document.createElement('div');
      wrapper.className = 'admin-extra-section';

      const titleLabel = document.createElement('label');
      titleLabel.textContent = 'Título de la sección adicional';
      titleLabel.htmlFor = `adminExtraTitle${fieldId}`;
      const titleInput = document.createElement('input');
      titleInput.id = `adminExtraTitle${fieldId}`;
      titleInput.className = 'admin-extra-section-title';
      titleInput.maxLength = 100;
      titleInput.value = section.title;
      titleInput.placeholder = 'Ejemplo: Perfil del egresado';

      const textLabel = document.createElement('label');
      textLabel.textContent = 'Texto';
      textLabel.htmlFor = `adminExtraText${fieldId}`;
      const textInput = document.createElement('textarea');
      textInput.id = `adminExtraText${fieldId}`;
      textInput.className = 'admin-extra-section-text';
      textInput.rows = 4;
      textInput.value = section.text;
      textInput.placeholder = 'Escribe la información que se mostrará en la ficha pública.';

      const urlLabel = document.createElement('label');
      urlLabel.textContent = 'Enlace de referencia (opcional)';
      urlLabel.htmlFor = `adminExtraUrl${fieldId}`;
      const urlInput = document.createElement('input');
      urlInput.id = `adminExtraUrl${fieldId}`;
      urlInput.className = 'admin-extra-section-url';
      urlInput.type = 'url';
      urlInput.value = section.url || '';
      urlInput.placeholder = 'https://...';

      const removeButton = document.createElement('button');
      removeButton.className = 'admin-button admin-button-danger';
      removeButton.type = 'button';
      removeButton.textContent = 'Quitar espacio';
      removeButton.addEventListener('click', () => wrapper.remove());

      wrapper.append(titleLabel, titleInput, textLabel, textInput, urlLabel, urlInput, removeButton);
      return wrapper;
    }

    function createProgramId(title) {
      const baseId = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'programa';
      const existingIds = new Set([...programData, ...technologyData].map(program => program.id));
      posgradoData.forEach(program => existingIds.add(program.id));
      let candidate = baseId;
      let suffix = 2;
      while (existingIds.has(candidate)) {
        candidate = `${baseId}-${suffix}`;
        suffix += 1;
      }
      return candidate;
    }

    function formatAuditValue(value) {
      if (Array.isArray(value)) {
        return value.map(item => typeof item === 'string'
          ? item
          : `${item.title}: ${item.text}${item.url ? ` (${item.url})` : ''}`).join('\n') || '(vacío)';
      }
      return value === null || value === undefined || value === ''
        ? '(vacío)'
        : String(value);
    }

    function renderProgramHistory() {
      const container = document.getElementById('adminHistoryList');
      const searchTerm = document.getElementById('adminHistorySearch').value.trim().toLocaleLowerCase();
      const entries = programChangeHistory.filter(entry => [
        entry.programTitle,
        entry.actor,
        entry.action,
        ...entry.changes.flatMap(change => [change.field, change.before, change.after])
      ].join(' ').toLocaleLowerCase().includes(searchTerm));

      container.replaceChildren();
      if (!entries.length) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'admin-history-empty';
        emptyMessage.textContent = programChangeHistory.length
          ? 'No hay cambios que coincidan con la búsqueda.'
          : 'Todavía no hay cambios registrados.';
        container.appendChild(emptyMessage);
        return;
      }

      entries.forEach(entry => {
        const item = document.createElement('article');
        item.className = 'admin-history-entry';

        const heading = document.createElement('div');
        heading.className = 'admin-history-entry-heading';
        const title = document.createElement('h4');
        title.textContent = entry.programTitle;
        const action = document.createElement('span');
        action.className = 'admin-history-action';
        action.textContent = entry.action;
        heading.append(title, action);

        const metadata = document.createElement('p');
        metadata.className = 'admin-history-metadata';
        const date = new Date(entry.timestamp);
        metadata.textContent = `${Number.isNaN(date.getTime()) ? entry.timestamp : date.toLocaleString('es-CO')} · Perfil: ${entry.actor}`;

        const details = document.createElement('ul');
        details.className = 'admin-history-changes';
        entry.changes.forEach(change => {
          const changeItem = document.createElement('li');
          const field = document.createElement('strong');
          field.textContent = `${change.field}: `;
          const values = document.createElement('span');
          values.textContent = change.before === '(nuevo programa)'
            ? change.after
            : `${change.before} → ${change.after}`;
          changeItem.append(field, values);
          details.appendChild(changeItem);
        });

        item.append(heading, metadata);
        if (entry.changes.length) item.appendChild(details);
        container.appendChild(item);
      });
    }

    async function seedInitialCatalog() {
      const seedRows = [
        ...bundledPrograms.map((program, index) => toDatabaseProgram(program, 'pregrados', index * 10)),
        ...bundledTechnologies.map((program, index) => toDatabaseProgram(program, 'tecnologias', index * 10)),
        ...bundledPosgrados.map((program, index) => toDatabaseProgram(program, 'posgrados', index * 10))
      ];
      const { error } = await supabaseClient.from('programs').insert(seedRows);
      if (error) throw error;
    }

    async function seedPosgradoCatalog() {
      const seedRows = bundledPosgrados.map((program, index) =>
        toDatabaseProgram(program, 'posgrados', index * 10));
      const { error } = await supabaseClient
        .from('programs')
        .upsert(seedRows, { onConflict: 'id', ignoreDuplicates: true });
      if (error) throw error;
    }

    async function submitProgram(event) {
      event.preventDefault();
      const getValue = id => document.getElementById(id).value.trim();
      const catalog = getValue('adminProgramCatalog');
      const editingId = getValue('adminEditingId');
      const competencies = getValue('adminProgramCompetencies').split(/\r?\n/).map(item => item.trim()).filter(Boolean);
      const advantages = getValue('adminProgramAdvantages').split(/\r?\n/).map(item => item.trim()).filter(Boolean);
      const extraSections = [...document.querySelectorAll('#adminExtraSectionList .admin-extra-section')]
        .map(section => ({
          title: section.querySelector('.admin-extra-section-title').value.trim(),
          text: section.querySelector('.admin-extra-section-text').value.trim(),
          url: section.querySelector('.admin-extra-section-url').value.trim()
        }));
      const program = {
        id: editingId,
        title: getValue('adminProgramTitle'),
        faculty: getValue('adminProgramFaculty'),
        price: getValue('adminProgramPrice'),
        semesters: getValue('adminProgramSemesters'),
        modality: getValue('adminProgramModality'),
        degree: getValue('adminProgramDegree'),
        snies: getValue('adminProgramSnies'),
        summary: getValue('adminProgramSummary'),
        overview: getValue('adminProgramOverview'),
        competencies,
        practices: getValue('adminProgramPractices'),
        advantages,
        extraSections
      };
      const message = document.getElementById('adminFormMessage');

      if (!supabaseClient || !adminLoggedIn) {
        message.textContent = 'Inicia sesión con un perfil administrador conectado a Supabase para guardar cambios.';
        return;
      }
      if (catalog !== 'pregrados' && catalog !== 'tecnologias' && catalog !== 'posgrados') {
        message.textContent = 'Selecciona un catálogo válido.';
        return;
      }
      if (programFields.some(field => {
        const value = program[field];
        return Array.isArray(value) ? value.length === 0 : value.length === 0;
      })) {
        message.textContent = 'Completa todos los campos y agrega al menos una competencia y una ventaja.';
        return;
      }
      if (extraSections.some(section => !section.title || !section.text)) {
        message.textContent = 'Completa el título y el texto de cada espacio adicional, o quítalo antes de guardar.';
        return;
      }
      if (extraSections.some(section => section.url && !getHttpsUrl(section.url))) {
        message.textContent = 'Cada enlace adicional debe usar una dirección HTTPS válida.';
        return;
      }

      if (!editingId) program.id = createProgramId(program.title);

      const nextPregrados = programData.slice();
      const nextTechnologies = technologyData.slice();
      const nextPosgrados = posgradoData.slice();
      const previousIndex = nextPregrados.findIndex(item => item.id === editingId);
      const technologyIndex = nextTechnologies.findIndex(item => item.id === editingId);
      const posgradoIndex = nextPosgrados.findIndex(item => item.id === editingId);
      if (editingId && previousIndex === -1 && technologyIndex === -1 && posgradoIndex === -1) {
        message.textContent = 'No se encontró el programa que intentas editar. Actualiza la lista.';
        return;
      }

      const previousProgram = previousIndex !== -1 ? nextPregrados[previousIndex]
        : technologyIndex !== -1 ? nextTechnologies[technologyIndex]
          : posgradoIndex !== -1 ? nextPosgrados[posgradoIndex] : null;
      const previousCatalog = previousIndex !== -1 ? 'pregrados'
        : technologyIndex !== -1 ? 'tecnologias'
          : posgradoIndex !== -1 ? 'posgrados' : null;
      const targetPrograms = catalog === 'pregrados' ? nextPregrados
        : catalog === 'tecnologias' ? nextTechnologies : nextPosgrados;
      const sortOrder = previousProgram && previousCatalog === catalog
        ? previousProgram.sortOrder
        : targetPrograms.reduce((highest, item) => Math.max(highest, item.sortOrder ?? -10), -10) + 10;

      const submitButton = document.querySelector('#adminProgramForm button[type="submit"]');
      submitButton.disabled = true;
      message.textContent = 'Guardando en Supabase...';
      try {
        const { error } = await supabaseClient
          .from('programs')
          .upsert(toDatabaseProgram(program, catalog, sortOrder), { onConflict: 'id' });
        if (error) throw error;

        await loadProgramsFromSupabase();
        await loadProgramHistory();
        resetProgramEditor();
      } catch (error) {
        message.textContent = `No se pudo guardar el programa: ${error.message}`;
      } finally {
        submitButton.disabled = false;
      }
    }

    async function deleteProgram(catalog, program) {
      if (!window.confirm(`¿Seguro que deseas borrar "${program.title}"? Esta acción no se puede deshacer.`)) return;
      if (!supabaseClient || !adminLoggedIn) {
        window.alert('Inicia sesión con un perfil administrador conectado a Supabase para borrar programas.');
        return;
      }

      try {
        const { data, error } = await supabaseClient
          .from('programs')
          .delete()
          .eq('id', program.id)
          .select('id');
        if (error) throw error;
        if (!data || data.length === 0) throw new Error('No se encontró el programa o no tienes permiso para borrarlo.');

        if (document.getElementById('adminEditingId').value === program.id) resetProgramEditor();
        await loadProgramsFromSupabase();
        await loadProgramHistory();
      } catch (error) {
        window.alert(`No se pudo borrar el programa: ${error.message}`);
      }
    }

    async function openAdminPanel() {
      document.body.classList.add('admin-mode');
      document.getElementById('adminPanel').hidden = false;
      if (!adminLoggedIn && supabaseClient) {
        try {
          const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
          if (sessionError) throw sessionError;
          if (!sessionData.session) {
            document.getElementById('adminLoginMessage').textContent = '';
          } else {
            const { data, error } = await supabaseClient.auth.getUser();
          if (error) throw error;
          if (data.user) {
            const { data: isAdmin, error: roleError } = await supabaseClient.rpc('is_program_admin');
            if (roleError) throw roleError;
            if (isAdmin) {
              currentAdminUser = data.user.email || data.user.id;
              adminLoggedIn = true;
            }
          }
          }
        } catch (error) {
          document.getElementById('adminLoginMessage').textContent = `No se pudo verificar la sesión: ${error.message}`;
        }
      }
      if (adminLoggedIn) {
        document.getElementById('adminLogin').hidden = true;
        document.getElementById('adminDashboard').hidden = false;
        renderAdminProgramList();
        try {
          await loadProgramHistory();
        } catch (error) {
          document.getElementById('adminHistoryList').textContent = `No se pudo cargar el historial: ${error.message}`;
        }
      } else {
        document.getElementById('adminLogin').hidden = false;
        document.getElementById('adminDashboard').hidden = true;
        document.getElementById('adminUsername').focus();
      }
      document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeAdminPanel() {
      document.getElementById('adminPanel').hidden = true;
      document.body.classList.remove('admin-mode');
    }

    document.getElementById('adminAccessButton').addEventListener('click', openAdminPanel);
    document.getElementById('cancelAdminLogin').addEventListener('click', closeAdminPanel);
    document.getElementById('forgotAdminPassword').addEventListener('click', () => {
      const emailInput = document.getElementById('adminRecoveryEmail');
      emailInput.value = document.getElementById('adminUsername').value.trim();
      document.getElementById('adminLoginForm').hidden = true;
      document.getElementById('forgotAdminPassword').hidden = true;
      document.getElementById('adminRecoveryForm').hidden = false;
      document.getElementById('adminRecoveryMessage').textContent = '';
      emailInput.focus();
    });
    document.getElementById('cancelAdminRecovery').addEventListener('click', () => {
      document.getElementById('adminRecoveryForm').hidden = true;
      document.getElementById('adminLoginForm').hidden = false;
      document.getElementById('forgotAdminPassword').hidden = false;
      document.getElementById('adminRecoveryMessage').textContent = '';
    });
    document.getElementById('adminRecoveryForm').addEventListener('submit', async event => {
      event.preventDefault();
      const email = document.getElementById('adminRecoveryEmail').value.trim();
      const message = document.getElementById('adminRecoveryMessage');
      const submitButton = document.querySelector('#adminRecoveryForm button[type="submit"]');
      if (!supabaseClient) {
        message.textContent = 'Supabase no está conectado. Revisa la conexión e inténtalo de nuevo.';
        return;
      }

      submitButton.disabled = true;
      message.textContent = 'Enviando enlace...';
      try {
        const { error } = await supabaseClient.auth.resetPasswordForEmail(email);
        if (error) throw error;
        message.textContent = 'Si el correo corresponde a una cuenta, recibirás un enlace para crear una nueva contraseña.';
      } catch (error) {
        message.textContent = 'No se pudo enviar el enlace: ' + error.message;
      } finally {
        submitButton.disabled = false;
      }
    });
    document.getElementById('adminSetPasswordForm').addEventListener('submit', async event => {
      event.preventDefault();
      const password = document.getElementById('adminNewPassword').value;
      const confirmation = document.getElementById('adminConfirmPassword').value;
      const message = document.getElementById('adminSetPasswordMessage');
      const submitButton = document.querySelector('#adminSetPasswordForm button[type="submit"]');
      if (password !== confirmation) {
        message.textContent = 'Las contraseñas no coinciden.';
        return;
      }
      if (!supabaseClient) {
        message.textContent = 'Supabase no está conectado. Revisa la conexión e inténtalo de nuevo.';
        return;
      }

      submitButton.disabled = true;
      message.textContent = 'Actualizando contraseña...';
      try {
        const { error } = await supabaseClient.auth.updateUser({ password });
        if (error) throw error;
        let result = 'Contraseña actualizada. Ya puedes iniciar sesión.';
        const { error: signOutError } = await supabaseClient.auth.signOut();
        if (signOutError) result += ' No se pudo cerrar la sesión: ' + signOutError.message;
        document.getElementById('adminSetPasswordForm').reset();
        document.getElementById('adminSetPasswordForm').hidden = true;
        document.getElementById('adminLoginForm').hidden = false;
        document.getElementById('forgotAdminPassword').hidden = false;
        document.getElementById('adminUsername').value = document.getElementById('adminRecoveryEmail').value.trim();
        message.textContent = '';
        document.getElementById('adminLoginMessage').textContent = result;
      } catch (error) {
        message.textContent = 'No se pudo actualizar la contraseña: ' + error.message;
      } finally {
        submitButton.disabled = false;
      }
    });
    document.getElementById('adminLoginForm').addEventListener('submit', async event => {
      event.preventDefault();
      const email = document.getElementById('adminUsername').value.trim();
      const password = document.getElementById('adminPassword').value;
      const message = document.getElementById('adminLoginMessage');
      if (!supabaseClient) {
        message.textContent = 'Supabase no está conectado. Revisa la clave pública y la conexión a internet.';
        return;
      }

      const submitButton = document.querySelector('#adminLoginForm button[type="submit"]');
      submitButton.disabled = true;
      message.textContent = 'Verificando acceso...';
      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;

        const { data: isAdmin, error: roleError } = await supabaseClient.rpc('is_program_admin');
        if (roleError) throw roleError;
        if (!isAdmin) {
          await supabaseClient.auth.signOut();
          throw new Error('Esta cuenta no tiene permisos de administrador en admin_users.');
        }

        adminLoggedIn = true;
        currentAdminUser = data.user.email || data.user.id;

        if (remoteProgramCount === 0) {
          message.textContent = 'Importando el catálogo inicial a Supabase...';
          await seedInitialCatalog();
          showSupabaseStatus('');
        } else if (remotePosgradoCount === 0) {
          message.textContent = 'Importando el catálogo de posgrados a Supabase...';
          await seedPosgradoCatalog();
        }
        await loadProgramsFromSupabase();
        await loadProgramHistory();
        renderAdminProgramList();
        message.textContent = '';
        document.getElementById('adminLogin').hidden = true;
        document.getElementById('adminDashboard').hidden = false;
        document.getElementById('adminPassword').value = '';
        resetProgramEditor();
      } catch (error) {
        adminLoggedIn = false;
        currentAdminUser = '';
        let signOutError = '';
        try {
          const { error: logoutError } = await supabaseClient.auth.signOut();
          if (logoutError) signOutError = ` No se pudo cerrar la sesión: ${logoutError.message}`;
        } catch (logoutError) {
          signOutError = ` No se pudo cerrar la sesión: ${logoutError.message}`;
        }
        document.getElementById('adminLogin').hidden = false;
        document.getElementById('adminDashboard').hidden = true;
        message.textContent = `No se pudo iniciar sesión: ${error.message}.${signOutError}`;
      } finally {
        submitButton.disabled = false;
      }
    });

    document.getElementById('adminLogoutButton').addEventListener('click', async () => {
      try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        adminLoggedIn = false;
        currentAdminUser = '';
        document.getElementById('adminLoginForm').reset();
        document.getElementById('adminLoginMessage').textContent = '';
        resetProgramEditor();
        closeAdminPanel();
      } catch (error) {
        window.alert(`No se pudo cerrar la sesión: ${error.message}`);
      }
    });
    document.getElementById('adminProgramForm').addEventListener('submit', submitProgram);
    document.getElementById('cancelProgramEdit').addEventListener('click', resetProgramEditor);
    document.getElementById('adminHistorySearch').addEventListener('input', renderProgramHistory);
    document.getElementById('addExtraSection').addEventListener('click', () => {
      const container = document.getElementById('adminExtraSectionList');
      const field = createExtraSectionField();
      container.appendChild(field);
      field.querySelector('.admin-extra-section-title').focus();
    });

    document.querySelectorAll('.catalog-tab[data-catalog]').forEach(tab => {
      tab.addEventListener('click', () => switchCatalog(tab.dataset.catalog));
    });

    document.getElementById('searchInput').addEventListener('input', filterPrograms);

    document.getElementById('backToCatalog').addEventListener('click', closeDetail);

    switchCatalog(['pregrados', 'tecnologias', 'posgrados'].includes(document.body.dataset.catalog)
      ? document.body.dataset.catalog
      : 'pregrados');
    initializeSupabase();
  

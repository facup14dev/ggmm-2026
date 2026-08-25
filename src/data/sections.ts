import type {
  Module,
  Section,
} from "../types/section";

/* =========================================================
   SECCIONES INSTITUCIONALES
   ========================================================= */

export const allSections: Section[] = [
  /* ---------------------------------------------------------
     INICIO
     --------------------------------------------------------- */

  {
    id: "inicio",
    label: "Inicio",
    primary: true,

    title:
      "Comience la transformación digital de su municipio",

    eyebrow:
      "Plataforma integral para Gobiernos Municipales",

    description:
      "ggmm posibilita digitalizar las actividades habituales dentro de una misma plataforma, mejorando los procesos de gestión, la atención a los vecinos, la vinculación con proveedores y la recaudación municipal.",

    ctaLabel: "Conocer áreas y módulos",
  },

  /* ---------------------------------------------------------
     03 · SOBRE NOSOTROS
     --------------------------------------------------------- */

  {
    id: "nosotros",
    label: "Sobre nosotros",
    number: "03",
    primary: true,

    title: "Sobre nosotros",

    eyebrow:
      "Experiencia, conocimiento e innovación",

    description:
      "Somos un equipo de especialistas en el sector digital con más de 20 años de experiencia implementando sistemas informáticos y asesorando a municipios de Latinoamérica. Desarrollamos ggmm para municipios que necesitan una transformación digital. Nuestro valor agregado está en ser los creadores del sistema, atender las necesidades particulares de cada cliente e invertir permanentemente en Investigación y Desarrollo.",

    image:
      "/images/brochure/sobre-nosotros.webp",

    imageAlt:
      "Profesional trabajando con tecnología",

    features: [
      {
        title: "+20 años de experiencia",
        description:
          "Experiencia implementando sistemas informáticos y asesorando a municipios de Latinoamérica.",
      },
      {
        title: "Creadores de ggmm",
        description:
          "El equipo que brinda el servicio es también el creador y desarrollador de la plataforma.",
      },
      {
        title: "Atención personalizada",
        description:
          "Las necesidades particulares de cada cliente forman parte del proceso de evolución del sistema.",
      },
      {
        title: "Investigación y Desarrollo",
        description:
          "Estudio e inversión permanente en I+D para mantener y evolucionar la solución.",
      },
    ],
  },

  /* ---------------------------------------------------------
     04 · NUESTRO SOFTWARE
     --------------------------------------------------------- */

  {
    id: "software",
    label: "Nuestro Software",
    number: "04",
    primary: true,

    title: "Nuestro Software",

    eyebrow:
      "Una plataforma integral para la gestión municipal",

    description:
      "ggmm permite digitalizar las actividades habituales en una misma plataforma, ahorrar tiempo en las tareas, mejorar la atención a los vecinos, facilitar la vinculación con proveedores e incrementar la recaudación, contribuyendo además a mejorar la imagen del municipio.",

    image:
      "/images/brochure/nuestro-software.webp",

    imageAlt:
      "Profesional utilizando una computadora portátil",

    features: [
      {
        title: "Parametrizable",
        description:
          "Se adapta plenamente a la ordenanza vigente al momento de la implementación.",
      },
      {
        title: "Modular y escalable",
        description:
          "Sistema integral que puede implementarse paulatinamente por cada área.",
      },
      {
        title: "Transacciones seguras",
        description:
          "Verifica que las transacciones se completen de forma segura, evitando pérdidas de datos o errores.",
      },
      {
        title:
          "Vinculación con otros organismos",
        description:
          "Permite integraciones con organismos como bancos, Rentas provinciales y Registros del Automotor.",
      },
      {
        title:
          "Trazabilidad y procesos auditables",
        description:
          "Genera un registro de auditoría de los usuarios y de sus acciones, conservado históricamente.",
      },
      {
        title: "Arquitectura multicapa",
        description:
          "Facilita el mantenimiento y la personalización del sistema.",
      },
      {
        title: "Licencia abierta",
        description:
          "El municipio puede poner en marcha los puestos y oficinas que necesite sin pagar licencias por cada puesto.",
      },
    ],
  },

  /* ---------------------------------------------------------
     05 · NUESTROS SERVICIOS
     --------------------------------------------------------- */

  {
    id: "servicios",
    label: "Nuestros Servicios",
    number: "05",
    primary: true,

    title: "Nuestros Servicios",

    eyebrow:
      "Asesoramiento + Capacitación + Soporte + Puesta en Producción",

    description:
      "La implementación de ggmm incluye servicios profesionales orientados a acompañar al municipio desde el relevamiento inicial y la capacitación hasta la puesta en producción, el soporte y la evolución posterior.",

    image:
      "/images/brochure/servicios.webp",

    imageAlt:
      "Profesionales trabajando con herramientas digitales",

    features: [
      {
        title: "Capacitación",
        description:
          "Se realiza según los perfiles de los usuarios, coordinada previamente con el municipio y disponible en modalidad virtual y/o presencial.",
      },
      {
        title:
          "Provisión de herramientas adicionales",
        description:
          "Se entregan herramientas para diseñar reportes y documentos internos utilizando los datos de ggmm.",
      },
      {
        title:
          "Relevamiento y análisis de circuitos administrativos",
        description:
          "Consultoría integral por área para detectar necesidades, criticidad, prioridades y oportunidades de mejora o reingeniería de procesos.",
      },
      {
        title: "Atención al Municipio",
        description:
          "Sistema de requerimientos REQ disponible las 24 horas, junto con Mesas de Ayuda en línea.",
      },
      {
        title:
          "Equipamiento mínimo y recomendado",
        description:
          "Asesoramiento para utilizar el equipamiento necesario sin realizar inversiones innecesarias en infraestructura.",
      },
      {
        title: "Soporte permanente",
        description:
          "Soporte bajo contrato mensual que contempla atención de eventos y actualización de versiones.",
      },
      {
        title: "Garantía escrita",
        description:
          "Cobertura de errores cuyo origen sea el sistema durante la implementación y posteriormente bajo contrato de mantenimiento.",
      },
      {
        title:
          "Provisión de manuales de usuario",
        description:
          "Manuales digitales de los módulos y ayudas específicas para los procesos más críticos.",
      },
      {
        title: "Migración de datos",
        description:
          "Análisis de la información existente y elaboración de un proyecto para integrar los datos históricos en ggmm.",
      },
      {
        title:
          "Provisión de procedimientos fuente",
        description:
          "Se proporcionan procesos y capacitación avanzada para favorecer la independencia tecnológica del municipio.",
      },
    ],
  },

  /* ---------------------------------------------------------
     07 · BENEFICIOS
     --------------------------------------------------------- */

  {
    id: "beneficios",
    label: "Beneficios",
    number: "07",
    primary: true,

    title: "Beneficios",

    eyebrow:
      "Beneficios para todo el ecosistema municipal",

    description:
      "La plataforma genera beneficios para el municipio, los contribuyentes, los ciudadanos y los proveedores, integrando procesos que tradicionalmente funcionan de forma separada.",

    features: [
      {
        title: "Para el Municipio",
        description:
          "Digitalización homogénea, integración entre áreas, mejora del trabajo interno, atención más ágil, incremento de recaudación, mejores controles de deuda y automatización de compras, contabilidad, Tesorería y cuentas bancarias.",
      },
      {
        title: "Para el Contribuyente",
        description:
          "Optimización de procesos y trámites, terminales de autoconsulta, múltiples gestiones en un mismo lugar y eliminación de tiempos de espera.",
      },
      {
        title: "Para el Ciudadano",
        description:
          "Posibilidad de realizar trámites a distancia y pagar tasas y servicios mediante múltiples medios de pago.",
      },
      {
        title: "Para Proveedores",
        description:
          "Carga y seguimiento de facturas, consulta e impresión de retenciones, consulta de deuda y comunicación con el área de Compras.",
      },
    ],
  },

  /* ---------------------------------------------------------
     08 · CARACTERÍSTICAS DESTACADAS
     --------------------------------------------------------- */

  {
    id: "caracteristicas",
    label: "Características",
    number: "08",

    title: "Características destacadas",

    description:
      "ggmm incorpora herramientas técnicas y transversales que complementan las áreas principales de gestión.",

    features: [
      {
        title: "Usuarios / Auditoría",
        description:
          "Administración de usuarios mediante perfiles y registro permanente de la actividad de cada usuario.",
      },
      {
        title: "Requerimientos",
        description:
          "Canal formal entre el municipio y el proveedor de ggmm mediante pedidos identificados con un número de ticket.",
      },
      {
        title:
          "Administración de Formularios",
        description:
          "Editor de reportes para personalizar documentos y salidas de información del entorno ggmm.",
      },
      {
        title:
          "Inteligencia de datos para el municipio",
        description:
          "Información dinámica de la base de datos para analizar cobranza, tasas, períodos y sectores de la ciudad.",
      },
      {
        title: "Carné",
        description:
          "Administración e impresión de credenciales para distintos usos municipales.",
      },
      {
        title: "Mesa de Entradas",
        description:
          "Seguimiento de la documentación que circula dentro del ámbito municipal.",
      },
      {
        title:
          "Transparencia de Información",
        description:
          "Generación de información formal y oficial y posibilidad de publicarla ordenadamente en la web municipal.",
      },
      {
        title: "Pasarela de pagos",
        description:
          "Permite cobrar mediante múltiples medios de pago sin necesidad de realizar un convenio individual con cada entidad.",
      },
      {
        title: "Capacitación",
        description:
          "Puede combinar modalidad virtual y presencial según las necesidades del municipio.",
      },
    ],
  },

  /* ---------------------------------------------------------
     09 · AVALES DE CALIDAD
     --------------------------------------------------------- */

  {
    id: "calidad",
    label: "Calidad y Avales",
    number: "09",

    title: "Avales de Calidad",

    description:
      "ggmm forma parte de una empresa comprometida con la calidad, con certificaciones internacionales y participación en organizaciones del sector tecnológico.",

    image:
      "/images/brochure/calidad.webp",

    imageAlt:
      "Profesional trabajando en un entorno tecnológico",

    features: [
      {
        title: "ISO 9001:2015",
        description:
          "Certificación internacional de calidad mantenida y perfeccionada de forma permanente.",
      },
      {
        title: "ISO IEC 90003:2004",
        description:
          "Certificación vinculada a los procesos de desarrollo de software.",
      },
      {
        title: "CESSI",
        description:
          "Pertenencia a la Cámara de la Industria Argentina del Software.",
      },
      {
        title:
          "Córdoba Technology Cluster",
        description:
          "Participación en el ecosistema tecnológico de Córdoba.",
      },
    ],
  },

  /* ---------------------------------------------------------
     10 · ÁREAS Y MÓDULOS
     --------------------------------------------------------- */

  {
    id: "areas",
    label: "Áreas y Módulos",
    number: "10",
    primary: true,

    title:
      "Áreas y Módulos de disponibilidad inmediata",

    eyebrow:
      "Una solución integral para las áreas municipales",

    description:
      "ggmm está compuesto por un conjunto de más de 17 áreas y más de 40 módulos destinados a prestar servicios en ámbitos municipales. Cada área cubre el 100% de las necesidades de procesamiento del área municipal correspondiente.",

    image:
      "/images/brochure/areas-overview.webp",

    imageAlt:
      "Equipo profesional trabajando con una computadora",
  },

  /* ---------------------------------------------------------
     20 · ASPECTOS COMERCIALES Y GARANTÍAS
     --------------------------------------------------------- */

  {
    id: "comercial",
    label: "Aspectos Comerciales",
    number: "20",

    title:
      "Aspectos comerciales y Garantías",

    description:
      "Los costos dependen de la cantidad de módulos adquiridos, la magnitud del municipio y la modalidad elegida para contratar los servicios.",

    features: [
      {
        title:
          "Compra de módulos con mantenimiento",
        description:
          "Opción recomendada que incluye actualizaciones y ajustes sobre los módulos instalados.",
      },
      {
        title: "Contrato de alquiler",
        description:
          "Alternativa para municipios que no desean realizar inversión en equipamiento y prefieren contratar los servicios completos.",
      },
      {
        title: "Contrato de leasing",
        description:
          "Compra del sistema con opción de compra luego de un período determinado.",
      },
      {
        title: "Garantía",
        description:
          "Cobertura ante errores surgidos al ejecutar procesos de los módulos instalados.",
      },
      {
        title: "REQ",
        description:
          "Sistema disponible las 24 horas para canalizar requerimientos.",
      },
      {
        title: "Mesa de Ayuda",
        description:
          "Atención mediante especialistas de lunes a viernes.",
      },
    ],
  },

  /* ---------------------------------------------------------
     21 · EXPERIENCIA EN LATINOAMÉRICA
     --------------------------------------------------------- */

  {
    id: "experiencia",
    label: "Experiencia",
    number: "21",

    title: "Experiencia en Latinoamérica",

    description:
      "ggmm cuenta con experiencia en distintos países de Latinoamérica. En algunos mercados el trabajo fue realizado mediante alianzas con empresas locales.",

    features: [
      {
        title: "Argentina",
        description: "Experiencia ggmm.",
      },
      {
        title: "México",
        description: "Experiencia ggmm.",
      },
      {
        title: "República Dominicana",
        description: "Experiencia ggmm.",
      },
      {
        title: "Nicaragua",
        description: "Experiencia ggmm.",
      },
      {
        title: "El Salvador",
        description: "Experiencia ggmm.",
      },
      {
        title: "Panamá",
        description: "Experiencia ggmm.",
      },
      {
        title: "Colombia",
        description: "Experiencia ggmm.",
      },
      {
        title: "Honduras",
        description: "Experiencia ggmm.",
      },
      {
        title: "Venezuela",
        description: "Experiencia ggmm.",
      },
      {
        title: "Perú",
        description: "Experiencia ggmm.",
      },
      {
        title: "Puerto Rico",
        description: "Experiencia ggmm.",
      },
      {
        title: "Chile",
        description: "Experiencia ggmm.",
      },
    ],
  },

  /* ---------------------------------------------------------
     22 · ALIANZAS INTERNACIONALES
     --------------------------------------------------------- */

  {
    id: "alianzas",
    label: "Alianzas",
    number: "22",

    title: "Alianzas internacionales",

    description:
      "En distintos países de Latinoamérica ggmm ha trabajado mediante alianzas con empresas locales.",
  },

  /* ---------------------------------------------------------
     23 · CONTACTO
     --------------------------------------------------------- */

  {
    id: "contacto",
    label: "Contacto",
    number: "23",

    title: "Contacto",

    description:
      "INFT S.A. · Padre D. Viera 219 · Alta Gracia, CP 5186 · Tel. (+54) 3547 432961 · 0810-888-0170.",
  },
];

/*
 * Secciones visibles actualmente en la navegación
 * superior del monitor.
 *
 * Las restantes quedan cargadas en allSections
 * para incorporarlas posteriormente sin tener que
 * reestructurar los datos.
 */
export const sections: Section[] =
  allSections.filter(
    (section) => section.primary,
  );

/* =========================================================
   ÁREAS ggmm DE DISPONIBILIDAD INMEDIATA
   ========================================================= */

export const areas: Module[] = [
  /* ---------------------------------------------------------
     ADMINISTRACIÓN TRIBUTARIA
     --------------------------------------------------------- */

  {
    id: "administracionTributaria",

    label: "Adm. Tributaria",
    title: "Administración Tributaria",

    shortDescription:
      "Rentas, cobranza, deuda y fiscalización.",

    description:
      "Área orientada a la administración tributaria municipal mediante módulos de Rentas, Cajeros, Planes, Cajeros externos, Notificaciones de deuda y Procuración / Apremio.",

    modules: [
      "Rentas",
      "Cajeros",
      "Planes",
      "Cajeros externos",
      "Notificaciones de deuda",
      "Procuración / Apremio",
    ],

    benefits: [
      "Incremento de recaudación.",
      "Estacionamiento medido con compra anticipada de tiempo, control en tiempo real, seguimiento de inspectores y geolocalización.",
      "Actas de infracción aplicables a las áreas municipales, con emisión de comprobantes y vinculación con Tribunal de Faltas.",
      "GEO FISCO para brindar información del contribuyente en tiempo real a los fiscalizadores.",
    ],

    accentLabel:
      "Incremento de recaudación",

    metric: {
      value: "+",
      label:
        "Fortalecimiento de la gestión tributaria",
    },

    relatedSolutions: [
      "Rentas",
      "Cajeros",
      "Planes",
      "Cajeros externos",
      "Notificaciones de deuda",
      "Procuración / Apremio",
    ],

    impacts: [
      "Incrementar la recaudación.",
      "Mejorar la fiscalización.",
      "Fortalecer los procesos de cobranza y deuda.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN FINANCIERA
     --------------------------------------------------------- */

  {
    id: "administracionFinanciera",

    label: "Adm. Financiera",
    title: "Administración Financiera",

    shortDescription:
      "Tesorería, bancos, compras y patrimonio.",

    description:
      "Área compuesta por módulos para la administración de Tesorería, Caja chica, Fondo fijo, Bancos, Compras y Patrimonio.",

    image:
      "/images/brochure/administracion-financiera.webp",

    imageAlt:
      "Profesional trabajando sobre una computadora portátil",

    modules: [
      "Tesorería",
      "Caja chica",
      "Fondo fijo",
      "Bancos",
      "Compras",
      "Patrimonio",
    ],

    benefits: [
      "Reducción del gasto.",
      "Control de los proveedores y de las finanzas del municipio.",
    ],

    accentLabel:
      "Control de las finanzas",

    metric: {
      value: "Control",
      label:
        "Proveedores y finanzas del municipio",
    },

    relatedSolutions: [
      "Tesorería",
      "Caja chica",
      "Fondo fijo",
      "Bancos",
      "Compras",
      "Patrimonio",
    ],

    impacts: [
      "Reducir el gasto.",
      "Controlar proveedores.",
      "Controlar las finanzas municipales.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN CONTABLE
     --------------------------------------------------------- */

  {
    id: "administracionContable",

    label: "Adm. Contable",
    title: "Administración Contable",

    shortDescription:
      "Contabilidad presupuestaria y partida doble.",

    description:
      "Área integrada por los módulos de Contabilidad presupuestaria y Contabilidad partida doble.",

    image:
      "/images/brochure/administracion-contable.webp",

    imageAlt:
      "Manos trabajando sobre una computadora portátil",

    modules: [
      "Contabilidad presupuestaria",
      "Contabilidad partida doble",
    ],

    benefits: [
      "Poseer la contabilidad al día.",
      "Efectuar las presentaciones en tiempo y forma del gasto.",
    ],

    accentLabel:
      "Contabilidad al día",

    metric: {
      value: "Al día",
      label:
        "Información contable municipal",
    },

    relatedSolutions: [
      "Contabilidad presupuestaria",
      "Contabilidad partida doble",
    ],

    impacts: [
      "Mantener la contabilidad al día.",
      "Realizar las presentaciones del gasto en tiempo y forma.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN CATASTRAL
     --------------------------------------------------------- */

  {
    id: "administracionCatastral",

    label: "Catastro",
    title: "Administración Catastral",

    shortDescription:
      "Catastro, relevamiento fotométrico y GIS.",

    description:
      "Área conformada por Administración de Catastro, Relevamiento fotométrico y Catastro GIS.",

    image:
      "/images/brochure/administracion-catastral.webp",

    imageAlt:
      "Vista aérea urbana utilizada para representar la Administración Catastral",

    modules: [
      "Administración de catastro",
      "Relevamiento fotométrico",
      "Catastro GIS",
    ],

    benefits: [
      "Planchetas catastrales actualizadas.",
      "Control de la obra privada.",
      "Incremento de recaudación.",
      "Detección de obras catastrales.",
    ],

    notes: [
      "Catastro GIS requiere dispositivos adicionales.",
    ],

    accentLabel:
      "Información catastral actualizada",

    metric: {
      value: "GIS",
      label:
        "Módulo disponible con dispositivos adicionales",
    },

    relatedSolutions: [
      "Administración de catastro",
      "Relevamiento fotométrico",
      "Catastro GIS",
    ],

    impacts: [
      "Actualizar las planchetas catastrales.",
      "Controlar la obra privada.",
      "Incrementar la recaudación.",
      "Detectar obras catastrales.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN DE AYUDAS SOCIALES
     --------------------------------------------------------- */

  {
    id: "ayudasSociales",

    label: "Ayudas Sociales",
    title:
      "Administración de Ayudas Sociales",

    shortDescription:
      "Asistencia social y prestaciones.",

    description:
      "Área integrada por Administración de la asistencia social y Prestaciones destacables.",

    image:
      "/images/brochure/ayudas-sociales.webp",

    imageAlt:
      "Productos utilizados para representar asistencia social",

    modules: [
      "Administración de la asistencia social",
      "Prestaciones destacables",
    ],

    benefits: [
      "Detección de necesidades de los ciudadanos.",
      "Atención y respuesta en tiempo y forma.",
    ],

    accentLabel:
      "Atención y respuesta",

    relatedSolutions: [
      "Administración de la asistencia social",
      "Prestaciones destacables",
    ],

    impacts: [
      "Detectar necesidades de los ciudadanos.",
      "Atender y responder en tiempo y forma.",
    ],
  },

  /* ---------------------------------------------------------
     AUTOGESTIÓN
     --------------------------------------------------------- */

  {
    id: "autogestion",

    label: "Autogestión",
    title:
      "Plataforma de Autogestión y Pagos Electrónicos",

    shortDescription:
      "Servicios y trámites municipales online.",

    description:
      "Área compuesta por Autogestión de contribuyentes, Autogestión de trámites y Autogestión de proveedores.",

    image:
      "/images/brochure/autogestion.webp",

    imageAlt:
      "Puesto de trabajo representando servicios digitales de autogestión",

    modules: [
      "Autogestión de contribuyentes",
      "Autogestión de trámites",
      "Autogestión de proveedores",
    ],

    benefits: [
      "Brindar los servicios del municipio las 24 horas, todos los días.",
      "Evitar concurrencia física y sus demoras de atención.",
      "Incrementar recaudación y mejorar la imagen del municipio.",
    ],

    accentLabel:
      "Servicios municipales disponibles online",

    metric: {
      value: "24/7",
      label:
        "Servicios del municipio todos los días",
    },

    relatedSolutions: [
      "Autogestión de contribuyentes",
      "Autogestión de trámites",
      "Autogestión de proveedores",
    ],

    impacts: [
      "Brindar servicios municipales las 24 horas.",
      "Reducir la concurrencia física.",
      "Incrementar la recaudación.",
      "Mejorar la imagen del municipio.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN VEHICULAR
     --------------------------------------------------------- */

  {
    id: "administracionVehicular",

    label: "Vehicular",
    title: "Administración Vehicular",

    shortDescription:
      "Taller, flota, documentación, neumáticos y combustible.",

    description:
      "Área destinada a la administración del taller y la flota, la documentación vehicular y del personal, los neumáticos y el combustible.",

    image:
      "/images/brochure/administracion-vehicular.webp",

    imageAlt:
      "Flota vehicular utilizada para representar Administración Vehicular",

    modules: [
      "Administración de taller y flota",
      "Documentación vehicular / personal",
      "Control de neumáticos",
      "Control de combustible",
    ],

    benefits: [
      "Economía en combustible, repuestos y mano de obra.",
      "Operatividad de la flota al 100%.",
    ],

    accentLabel:
      "Operatividad de la flota",

    metric: {
      value: "100%",
      label:
        "Operatividad de la flota",
    },

    relatedSolutions: [
      "Administración de taller y flota",
      "Documentación vehicular / personal",
      "Control de neumáticos",
      "Control de combustible",
    ],

    impacts: [
      "Economizar combustible, repuestos y mano de obra.",
      "Mantener la operatividad de la flota.",
    ],
  },

  /* ---------------------------------------------------------
     ADMINISTRACIÓN DE RRHH
     --------------------------------------------------------- */

  {
    id: "rrhh",

    label: "RRHH",
    title: "Administración de RRHH",

    shortDescription:
      "Personal, novedades, asistencia y liquidación.",

    description:
      "Área compuesta por Registro de novedades, control Biométrico o manual, Administración de personal y Liquidación.",

    image:
      "/images/brochure/rrhh.webp",

    imageAlt:
      "Profesional trabajando con una computadora portátil",

    modules: [
      "Registro de novedades",
      "Biométricos o manual",
      "Administración de personal",
      "Liquidación",
    ],

    benefits: [
      "Nómina de personal de planta y contratados al día, liquidaciones correctas, control de asistencia y novedades.",
      "Economía en los gastos.",
    ],

    notes: [
      "Registro de novedades requiere dispositivos adicionales.",
    ],

    accentLabel:
      "Administración del personal",

    relatedSolutions: [
      "Registro de novedades",
      "Biométricos o manual",
      "Administración de personal",
      "Liquidación",
    ],

    impacts: [
      "Mantener la nómina al día.",
      "Realizar liquidaciones correctas.",
      "Controlar asistencia y novedades.",
      "Generar economía en los gastos.",
    ],
  },

  /* ---------------------------------------------------------
     TRIBUNAL DE FALTAS
     --------------------------------------------------------- */

  {
    id: "tribunalFaltas",

    label: "Tribunal",
    title:
      "Administración de Tribunal de Faltas",

    shortDescription:
      "Actas, cajeros y vinculación con Rentas.",

    description:
      "Área integrada por Administración de actas, Cajeros y Vinculación con Rentas.",

    image:
      "/images/brochure/tribunal-faltas.webp",

    imageAlt:
      "Funcionario trabajando frente a una computadora",

    modules: [
      "Administración de actas",
      "Cajeros",
      "Vinculación con Rentas",
    ],

    benefits: [
      "Gestión eficiente de infracciones y contravenciones.",
      "Educación cívica del ciudadano.",
      "Incremento de la recaudación.",
    ],

    accentLabel:
      "Gestión eficiente de infracciones",

    metric: {
      value: "+",
      label:
        "Incremento de la recaudación",
    },

    relatedSolutions: [
      "Administración de actas",
      "Cajeros",
      "Vinculación con Rentas",
    ],

    impacts: [
      "Gestionar eficientemente infracciones y contravenciones.",
      "Favorecer la educación cívica del ciudadano.",
      "Incrementar la recaudación.",
    ],
  },
];

/*
 * Alias temporal.
 *
 * Los componentes actuales todavía utilizan
 * los nombres Module / modules aunque conceptualmente
 * ahora estamos navegando Áreas ggmm.
 *
 * Así no necesitamos reescribir todavía:
 *
 * - ModuleIndex
 * - MonitorScreen
 * - BrochurePanel
 * - InteractiveMonitor
 */
export const moreSections: Section[] =
  allSections.filter((section) =>
    [
      "caracteristicas",
      "calidad",
      "comercial",
      "experiencia",
      "alianzas",
    ].includes(section.id),
  );
  
export const modules = areas;
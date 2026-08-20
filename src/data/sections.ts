import type {
  Module,
  Section,
} from "../types/section";

export const sections: Section[] = [
  {
    id: "inicio",
    label: "Inicio",
    title: "Comience la transformación digital de su municipio",
    eyebrow:
      "Plataforma integral modular para gobiernos municipales",
    description:
      "GGMM integra las áreas clave del municipio en una única plataforma para mejorar la recaudación, optimizar procesos internos y brindar mejores servicios al ciudadano.",
    ctaLabel: "Ver módulos de integración",
    features: [
      {
        title: "Información precisa",
        description:
          "Contar con información precisa para tomar decisiones.",
      },
      {
        title: "Mayor recaudación",
        description:
          "Incrementar la capacidad de gestión tributaria y la cobranza.",
      },
      {
        title: "Control del gasto",
        description:
          "Controlar gastos, imputaciones y responsables.",
      },
      {
        title: "Más servicios digitales",
        description:
          "Permitir pagos y gestiones por internet sin trasladar al contribuyente.",
      },
    ],
  },
  {
    id: "software",
    label: "Nuestro Software",
    number: "04",
    title: "Nuestro Software",
    eyebrow: "Plataforma integral modular",
    description:
      "Una solución integral, modular y escalable para administrar de forma centralizada los procesos críticos del gobierno municipal.",
    features: [
      {
        title: "Digitalización integral",
        description:
          "Procesos municipales conectados dentro de una única plataforma.",
      },
      {
        title: "Modular y escalable",
        description:
          "Cada municipio puede incorporar módulos de acuerdo a sus necesidades.",
      },
      {
        title: "Arquitectura multicapa",
        description:
          "Preparada para evolucionar y sostener crecimiento funcional.",
      },
      {
        title: "Licencia abierta",
        description:
          "Pensada para brindar continuidad operativa y autonomía tecnológica.",
      },
    ],
  },
  {
    id: "beneficios",
    label: "Beneficios Municipales",
    number: "07",
    title: "Beneficios Municipales",
    eyebrow: "Resultados concretos para la gestión",
    description:
      "GGMM aporta control, trazabilidad e información en tiempo real para fortalecer la gestión municipal y la relación con el contribuyente.",
    features: [
      {
        title: "Aumentar recaudación",
        description:
          "Mejor gestión tributaria, cobranza y autogestión de contribuyentes.",
      },
      {
        title: "Mejor información",
        description:
          "Datos consolidados para toma de decisiones por parte de directivos.",
      },
      {
        title: "Control administrativo",
        description:
          "Orden en contabilidad, finanzas, imputaciones y responsables.",
      },
      {
        title: "Servicios ciudadanos",
        description:
          "Más trámites, pagos y consultas online para reducir fricción.",
      },
    ],
  },
  {
    id: "servicios",
    label: "Servicios Integrales",
    number: "08",
    title: "Servicios Integrales",
    eyebrow: "Herramientas complementarias",
    description:
      "Además del núcleo funcional, GGMM incorpora herramientas específicas que potencian la experiencia operativa y la atención al ciudadano.",
    features: [
      {
        title: "Autogestión de proveedores",
        description:
          "Mejora la vinculación y el circuito administrativo con proveedores.",
      },
      {
        title: "Autogestión de contribuyentes",
        description:
          "Canal digital para consultas, pagos y trámites.",
      },
      {
        title: "Cobranza electrónica múltiple entidad",
        description:
          "Amplía medios de pago y facilita la cobranza municipal.",
      },
      {
        title: "Multa digital / Estacionamiento digital",
        description:
          "Servicios específicos para control, fiscalización y atención.",
      },
    ],
  },
  {
    id: "calidad",
    label: "Calidad y Avales",
    number: "09",
    title: "Avales y Calidad",
    eyebrow: "Experiencia respaldada",
    description:
      "Una plataforma orientada a procesos municipales reales, diseñada para brindar continuidad, trazabilidad y capacidad de crecimiento.",
    features: [
      {
        title: "Experiencia municipal",
        description:
          "Solución pensada específicamente para gobiernos locales.",
      },
      {
        title: "Evolución continua",
        description:
          "Arquitectura preparada para incorporar nuevos módulos y servicios.",
      },
      {
        title: "Gestión centralizada",
        description:
          "Una base única de información para áreas interdependientes.",
      },
      {
        title: "Visión integral",
        description:
          "Combina gestión interna, tributaria y servicios digitales.",
      },
    ],
  },
];

export const modules: Module[] = [
  {
    id: "directivos",
    label: "Directivos",
    title: "Directivos",
    shortDescription:
      "Información precisa para la toma de decisiones.",
    description:
      "Brinda a los responsables de gestión una visión integral del municipio mediante información consolidada, indicadores y reportes para la toma de decisiones.",

    accentLabel: "Información para decidir",

    metric: {
      value: "360°",
      label: "Visión integral de la gestión municipal",
    },

    relatedSolutions: [
      "Reportes inteligentes (BI)",
      "Información centralizada",
      "Trazabilidad de procesos",
    ],

    impacts: [
      "Contar con información precisa para tomar decisiones",
      "Mayor control y seguimiento de la gestión",
    ],
  },

  {
    id: "administracionTributaria",
    label: "Adm. Tributaria",
    title: "Administración Tributaria",
    shortDescription:
      "Recaudación, contribuyentes y gestión tributaria.",
    description:
      "Centraliza la gestión tributaria municipal, mejora la recaudación y facilita la administración de tasas, contribuyentes y circuitos de cobranza.",

    accentLabel: "Potenciar la recaudación",

    metric: {
      value: "+",
      label: "Más herramientas para gestionar ingresos municipales",
    },

    relatedSolutions: [
      "Autogestión de contribuyentes",
      "Cobranza electrónica múltiple entidad",
      "Multa digital",
    ],

    impacts: [
      "Aumentar la recaudación municipal",
      "Mejorar la atención y autogestión del contribuyente",
      "Ampliar canales y alternativas de cobranza",
    ],
  },

  {
    id: "administracionFinanciera",
    label: "Adm. Financiera",
    title: "Administración Financiera",
    shortDescription:
      "Control de gastos, presupuesto y responsables.",
    description:
      "Permite controlar presupuestos, gastos, responsables y circuitos financieros del municipio con mayor visibilidad, trazabilidad y orden administrativo.",

    accentLabel: "Control financiero",

    metric: {
      value: "360°",
      label: "Seguimiento integral de gastos y responsables",
    },

    relatedSolutions: [
      "Autogestión de proveedores",
      "Control presupuestario",
      "Seguimiento financiero",
    ],

    impacts: [
      "Controlar los gastos y sus responsables",
      "Fortalecer el seguimiento presupuestario",
      "Mejorar la trazabilidad de los movimientos financieros",
    ],
  },

  {
    id: "administracionContable",
    label: "Adm. Contable",
    title: "Administración Contable",
    shortDescription:
      "Imputaciones, registración y contabilidad al día.",
    description:
      "Ordena la contabilidad municipal, permite controlar imputaciones y mantener actualizada la registración contable con mayor consistencia e integración.",

    accentLabel: "Contabilidad integrada",

    metric: {
      value: "1",
      label: "Circuito centralizado para información contable",
    },

    relatedSolutions: [
      "Integración contable",
      "Imputaciones automáticas",
      "Control de movimientos",
    ],

    impacts: [
      "Controlar imputaciones y mantener la contabilidad al día",
      "Reducir inconsistencias entre áreas",
      "Centralizar la registración de movimientos",
    ],
  },

  {
    id: "catastro",
    label: "Catastro",
    title: "Catastro",
    shortDescription:
      "Información territorial y padrón integrado.",
    description:
      "Integra información territorial, padrón y datos parcelarios para fortalecer la gestión del territorio y mejorar la calidad de la base tributaria.",

    accentLabel: "Territorio conectado",

    metric: {
      value: "GIS",
      label: "Información geográfica integrada a la gestión",
    },

    relatedSolutions: [
      "Catastro GIS",
      "Integración con obras privadas",
      "Integración con catastro provincial",
    ],

    impacts: [
      "Integrar obras privadas y catastro provincial con la gestión tributaria",
      "Actualizar y consolidar información territorial",
      "Fortalecer la base para control y recaudación",
    ],
  },

  {
    id: "accionSocial",
    label: "Acción Social",
    title: "Acción Social",
    shortDescription:
      "Beneficios, subsidios y padrón unificado.",
    description:
      "Gestiona beneficios y subsidios integrando una única base de datos para mejorar el seguimiento, la administración y el control de políticas sociales.",

    accentLabel: "Padrón social unificado",

    metric: {
      value: "1",
      label: "Base central para beneficios y subsidios",
    },

    relatedSolutions: [
      "Base única de padrón",
      "Seguimiento de beneficiarios",
      "Gestión de subsidios",
    ],

    impacts: [
      "Gestionar beneficios y subsidios desde una única base de datos",
      "Mejorar el seguimiento de beneficiarios",
      "Reducir duplicidades e inconsistencias",
    ],
  },

  {
    id: "atencionVecino",
    label: "At. al Vecino",
    title: "Atención al Vecino",
    shortDescription:
      "Mejor vinculación y servicios al ciudadano.",
    description:
      "Centraliza la atención al ciudadano y mejora la experiencia de los vecinos a través de canales más ágiles, servicios digitales y una gestión más ordenada.",

    accentLabel: "Municipio más cerca",

    metric: {
      value: "Online",
      label: "Gestiones y servicios sin traslado innecesario",
    },

    relatedSolutions: [
      "Autogestión de contribuyentes",
      "Pagos y gestiones online",
      "Canales de atención",
    ],

    impacts: [
      "Permitir pagos y gestiones por internet",
      "Reducir traslados del contribuyente a la municipalidad",
      "Mejorar la experiencia de atención al ciudadano",
    ],
  },

  {
    id: "turismo",
    label: "Turismo",
    title: "Turismo",
    shortDescription:
      "Información y servicios para visitantes.",
    description:
      "Ofrece servicios e información útil a visitantes y fortalece la gestión municipal del área turística mediante herramientas digitales específicas.",

    accentLabel: "Información para visitantes",

    metric: {
      value: "24/7",
      label: "Acceso digital a información y servicios turísticos",
    },

    relatedSolutions: [
      "Información para visitantes",
      "Servicios digitales",
      "Canales de consulta",
    ],

    impacts: [
      "Ofrecer servicios e información a los visitantes de la ciudad",
      "Facilitar el acceso a información turística",
      "Fortalecer la presencia digital del municipio",
    ],
  },

  {
    id: "rrhh",
    label: "RRHH",
    title: "Recursos Humanos",
    shortDescription:
      "Novedades, haberes y administración de personal.",
    description:
      "Gestiona recursos humanos, novedades y liquidación de haberes para sostener una administración más ordenada, centralizada y confiable de la nómina municipal.",

    accentLabel: "Gestión integral del personal",

    metric: {
      value: "1",
      label: "Legajo y novedades dentro de una misma gestión",
    },

    relatedSolutions: [
      "Gestión de novedades",
      "Liquidación de haberes",
      "Administración de legajos",
    ],

    impacts: [
      "Controlar las novedades del personal",
      "Liquidar los haberes de la nómina",
      "Centralizar información laboral y administrativa",
    ],
  },

  {
    id: "rodados",
    label: "Rodados",
    title: "Rodados",
    shortDescription:
      "Gestión profesional de vehículos y maquinaria.",
    description:
      "Permite administrar de manera profesional vehículos, maquinaria y recursos móviles del municipio, mejorando el control, seguimiento y disponibilidad de los activos.",

    accentLabel: "Control de activos móviles",

    metric: {
      value: "360°",
      label: "Seguimiento integral de vehículos y maquinaria",
    },

    relatedSolutions: [
      "Gestión de flota",
      "Control operativo",
      "Seguimiento de activos",
    ],

    impacts: [
      "Gestionar de manera profesional vehículos y maquinaria",
      "Mejorar el control y disponibilidad de los activos",
      "Centralizar información operativa de la flota municipal",
    ],
  },
];
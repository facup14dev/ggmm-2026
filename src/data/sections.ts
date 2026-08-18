import type { Module, Section } from "../types/section";

export const sections: Section[] = [
  {
    id: "inicio",
    label: "Inicio",
    title: "Comience la transformación digital de su municipio",
    eyebrow: "Plataforma integral modular para Gobiernos Municipales",
    description: "Una solución tecnológica diseñada para modernizar la gestión municipal, integrar áreas y simplificar la relación con el ciudadano.",
    ctaLabel: "Ver módulos de integración",
  },
  {
    id: "software",
    label: "Nuestro Software",
    number: "04",
    title: "Nuestro Software",
    eyebrow: "Plataforma integral modular",
    description:
      "Una arquitectura flexible, modular y escalable preparada para acompañar las necesidades de cada gobierno local.",
    features: [
      {
        title: "Digitalización integral",
        description:
          "Procesos municipales conectados dentro de una misma plataforma.",
      },
      {
        title: "Modular y escalable",
        description:
          "Cada municipio puede incorporar módulos según sus necesidades.",
      },
      {
        title: "Arquitectura multicapa",
        description:
          "Separación lógica de componentes para facilitar evolución y mantenimiento.",
      },
      {
        title: "Licencia abierta",
        description:
          "Una solución diseñada para garantizar continuidad y autonomía.",
      },
    ],
  },
  {
    id: "beneficios",
    label: "Beneficios Municipales",
    number: "07",
    title: "Beneficios Municipales",
    eyebrow: "Gestión que genera resultados",
    description:
      "Herramientas orientadas a mejorar la recaudación, simplificar procesos y brindar mejores servicios al contribuyente.",
    features: [
      {
        title: "Incrementar recaudación",
        description:
          "Mejor seguimiento tributario y mayor capacidad de gestión.",
      },
      {
        title: "Mejores medios de pago",
        description:
          "Más alternativas para facilitar el cumplimiento del contribuyente.",
      },
      {
        title: "Procesos integrados",
        description:
          "Las áreas trabajan sobre una única plataforma.",
      },
      {
        title: "Información centralizada",
        description:
          "Datos consistentes y disponibles para la toma de decisiones.",
      },
    ],
  },
  {
    id: "servicios",
    label: "Servicios Integrales",
    number: "08",
    title: "Servicios Integrales",
    eyebrow: "Acompañamiento permanente",
    description:
      "Implementación, soporte, capacitación y servicios profesionales para acompañar cada etapa de la transformación digital.",
    features: [
      {
        title: "Implementación",
        description:
          "Acompañamiento técnico durante la puesta en marcha.",
      },
      {
        title: "Capacitación",
        description:
          "Formación orientada a usuarios y equipos municipales.",
      },
      {
        title: "Soporte",
        description:
          "Asistencia técnica permanente para la operación diaria.",
      },
      {
        title: "Evolución continua",
        description:
          "Mejoras y nuevas funcionalidades según cada necesidad.",
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
      "Procesos, certificaciones y reconocimientos que respaldan la calidad de nuestras soluciones.",
    features: [
      {
        title: "Procesos certificados",
        description:
          "Metodologías orientadas a asegurar calidad y previsibilidad.",
      },
      {
        title: "Experiencia municipal",
        description:
          "Conocimiento construido junto a gobiernos locales.",
      },
      {
        title: "Reconocimientos",
        description:
          "Trayectoria respaldada por instituciones y clientes.",
      },
      {
        title: "Mejora continua",
        description:
          "Revisión permanente de procesos, tecnología y producto.",
      },
    ],
  },
];

export const modules: Module[] = [
  {
    id: "catastro",
    label: "Catastro",
    title: "Gestión integral de Catastro",
    shortDescription: "Información territorial integrada.",
    description:
      "Centralizá información parcelaria, territorial y administrativa dentro de una única herramienta de gestión.",
  },
  {
    id: "rrhh",
    label: "RRHH",
    title: "Recursos Humanos",
    shortDescription: "Administración eficiente del personal.",
    description:
      "Gestioná legajos, novedades, procesos administrativos y datos del personal municipal de forma centralizada.",
  },
  {
    id: "rentas",
    label: "Rentas",
    title: "Gestión Tributaria",
    shortDescription: "Recaudación y cuenta corriente.",
    description:
      "Administrá obligaciones, cuentas corrientes, recaudación y seguimiento tributario de manera integrada.",
  },
  {
    id: "tribunal",
    label: "Tribunal",
    title: "Tribunal de Faltas",
    shortDescription: "Gestión de infracciones y expedientes.",
    description:
      "Digitalizá y organizá actuaciones, infracciones, expedientes y resoluciones administrativas.",
  },
  {
    id: "servicios",
    label: "Servicios",
    title: "Servicios Municipales",
    shortDescription: "Gestión transversal de servicios.",
    description:
      "Coordiná servicios, solicitudes, tareas y operaciones entre distintas áreas municipales.",
  },
  {
    id: "recaudacion",
    label: "Recaudación",
    title: "Recaudación Integrada",
    shortDescription: "Cobros y medios de pago.",
    description:
      "Integra medios de pago, cobranzas, conciliaciones y seguimiento de ingresos municipales.",
  },
];
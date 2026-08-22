export type SectionId =
  | "inicio"
  | "nosotros"
  | "software"
  | "servicios"
  | "beneficios"
  | "caracteristicas"
  | "calidad"
  | "areas"
  | "comercial"
  | "experiencia"
  | "alianzas"
  | "contacto";

export type AreaId =
  | "administracionTributaria"
  | "administracionFinanciera"
  | "administracionContable"
  | "administracionCatastral"
  | "ayudasSociales"
  | "autogestion"
  | "administracionVehicular"
  | "rrhh"
  | "tribunalFaltas";

export type Feature = {
  title: string;
  description: string;
};

export type Section = {
  id: SectionId;
  label: string;
  number?: string;

  title: string;
  eyebrow?: string;
  description: string;

  image?: string;
  imageAlt?: string;

  features?: Feature[];

  ctaLabel?: string;

  /**
   * Define qué opciones mostramos actualmente
   * en la navegación principal del monitor.
   */
  primary?: boolean;
};

export type AreaMetric = {
  value: string;
  label: string;
};

export type GgmmArea = {
  id: AreaId;

  label: string;
  title: string;

  shortDescription: string;
  description: string;

  image?: string;
  imageAlt?: string;
  imagePosition?: string;

  /**
   * Nombres oficiales de los módulos
   * informados en el brochure.
   */
  modules: string[];

  /**
   * Beneficios oficiales informados
   * para el área.
   */
  benefits: string[];

  /**
   * Observaciones como:
   * "Requiere dispositivos adicionales".
   */
  notes?: string[];

  accentLabel?: string;
  metric?: AreaMetric;

  /*
   * Alias temporales utilizados actualmente
   * por MonitorScreen y BrochurePanel.
   *
   * Más adelante podemos renombrar esos
   * componentes para hablar de "areas"
   * en lugar de "modules".
   */
  relatedSolutions?: string[];
  impacts?: string[];
};

/*
 * Compatibilidad temporal con los componentes
 * que ya desarrollamos.
 */
export type ModuleId = AreaId;
export type Module = GgmmArea;
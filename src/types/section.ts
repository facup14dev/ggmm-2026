export type SectionId =
  | "inicio"
  | "software"
  | "beneficios"
  | "servicios"
  | "calidad";

export type ModuleId =
  | "directivos"
  | "administracionTributaria"
  | "administracionFinanciera"
  | "administracionContable"
  | "catastro"
  | "accionSocial"
  | "atencionVecino"
  | "turismo"
  | "rrhh"
  | "rodados";

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
  features?: Feature[];
  ctaLabel?: string;
};

export type ModuleMetric = {
  value: string;
  label: string;
};

export type Module = {
  id: ModuleId;
  label: string;
  title: string;
  shortDescription: string;
  description: string;

  relatedSolutions?: string[];
  impacts?: string[];

  /**
   * Texto destacado visualmente en el folleto.
   * Ejemplo:
   * "Información para decidir"
   */
  accentLabel?: string;

  /**
   * Dato visual / conceptual del módulo.
   * No necesariamente representa una estadística real.
   */
  metric?: ModuleMetric;
};
export type SectionId =
  | "inicio"
  | "software"
  | "beneficios"
  | "servicios"
  | "calidad";

export type ModuleId =
  | "catastro"
  | "rrhh"
  | "rentas"
  | "tribunal"
  | "servicios"
  | "recaudacion";

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

export type Module = {
  id: ModuleId;
  label: string;
  title: string;
  description: string;
  shortDescription: string;
};
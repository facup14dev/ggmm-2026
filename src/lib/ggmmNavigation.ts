import type {
  ModuleId,
  SectionId,
} from "../types/section";

export type NavigationTarget =
  | {
      type: "section";
      id: SectionId;
    }
  | {
      type: "area";
      id: ModuleId;
    };

export const sectionHashById: Record<
  SectionId,
  string
> = {
  inicio: "#inicio",
  nosotros: "#sobre-nosotros",
  software: "#software",
  servicios: "#servicios",
  beneficios: "#beneficios",
  caracteristicas: "#caracteristicas",
  calidad: "#calidad",
  areas: "#areas",
  comercial: "#aspectos-comerciales",
  experiencia: "#experiencia",
  alianzas: "#alianzas",
  contacto: "#contacto",
};

export const areaHashById: Record<
  ModuleId,
  string
> = {
  administracionTributaria:
    "#administracion-tributaria",

  administracionFinanciera:
    "#administracion-financiera",

  administracionContable:
    "#administracion-contable",

  administracionCatastral:
    "#administracion-catastral",

  ayudasSociales:
    "#ayudas-sociales",

  autogestion:
    "#autogestion",

  administracionVehicular:
    "#administracion-vehicular",

  rrhh:
    "#recursos-humanos",

  tribunalFaltas:
    "#tribunal-de-faltas",
};

const sectionIdByHash =
  Object.fromEntries(
    Object.entries(
      sectionHashById,
    ).map(([id, hash]) => [
      hash,
      id,
    ]),
  ) as Record<string, SectionId>;

const areaIdByHash =
  Object.fromEntries(
    Object.entries(
      areaHashById,
    ).map(([id, hash]) => [
      hash,
      id,
    ]),
  ) as Record<string, ModuleId>;

export const GGMM_NAVIGATION_EVENT =
  "ggmm:navigation";

export function getNavigationTargetFromHash(
  hash?: string,
): NavigationTarget | null {
  const normalizedHash =
    normalizeHash(
      hash ??
        (
          typeof window !==
          "undefined"
            ? window.location.hash
            : ""
        ),
    );

  if (!normalizedHash) {
    return {
      type: "section",
      id: "inicio",
    };
  }

  const sectionId =
    sectionIdByHash[
      normalizedHash
    ];

  if (sectionId) {
    return {
      type: "section",
      id: sectionId,
    };
  }

  const areaId =
    areaIdByHash[
      normalizedHash
    ];

  if (areaId) {
    return {
      type: "area",
      id: areaId,
    };
  }

  return null;
}

export function navigateToSection(
  id: SectionId,
  options?: {
    replace?: boolean;
  },
) {
  setNavigationHash(
    sectionHashById[id],
    options,
  );
}

export function navigateToArea(
  id: ModuleId,
  options?: {
    replace?: boolean;
  },
) {
  setNavigationHash(
    areaHashById[id],
    options,
  );
}

export function setNavigationHash(
  hash: string,
  options?: {
    replace?: boolean;
  },
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  const normalizedHash =
    normalizeHash(hash);

  const nextUrl =
    `${window.location.pathname}${window.location.search}${normalizedHash}`;

  if (options?.replace) {
    window.history.replaceState(
      null,
      "",
      nextUrl,
    );
  } else if (
    window.location.hash !==
    normalizedHash
  ) {
    window.history.pushState(
      null,
      "",
      nextUrl,
    );
  }

  /*
   * pushState / replaceState no disparan
   * hashchange. Emitimos un evento propio para
   * mantener sincronizadas las experiencias
   * desktop y mobile.
   */
  window.dispatchEvent(
    new Event(
      GGMM_NAVIGATION_EVENT,
    ),
  );
}

export function isDesktopViewport() {
  if (
    typeof window ===
    "undefined"
  ) {
    return false;
  }

  return window.matchMedia(
    "(min-width: 1024px)",
  ).matches;
}

export function isMobileViewport() {
  if (
    typeof window ===
    "undefined"
  ) {
    return false;
  }

  return window.matchMedia(
    "(max-width: 1023px)",
  ).matches;
}

function normalizeHash(
  hash: string,
) {
  if (!hash) {
    return "";
  }

  const withHash =
    hash.startsWith("#")
      ? hash
      : `#${hash}`;

  return withHash
    .trim()
    .toLowerCase();
}

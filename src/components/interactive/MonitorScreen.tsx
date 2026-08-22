import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import type {
  Module,
  Section,
} from "../../types/section";

type Props = {
  section: Section;
  activeModule: Module | null;
  compact?: boolean;
  onExploreModules?: () => void;
};

function MonitorScreen({
  section,
  activeModule,
  onExploreModules,
}: Props) {
  return (
    <div className="h-full min-h-0 overflow-hidden bg-[#f4efe5]">
      <div
        key={activeModule?.id ?? section.id}
        className="h-full min-h-0 animate-[screenContentIn_.28s_ease-out]"
      >
        {activeModule ? (
          <AreaScreen area={activeModule} />
        ) : (
          <SectionContent
            section={section}
            onExploreModules={
              onExploreModules
            }
          />
        )}
      </div>
    </div>
  );
}

/* =========================================================
   SELECTOR DE PANTALLA
   ========================================================= */

type SectionContentProps = {
  section: Section;
  onExploreModules?: () => void;
};

function SectionContent({
  section,
  onExploreModules,
}: SectionContentProps) {
  switch (section.id) {
    case "areas":
      return <AreasIntro />;

    case "caracteristicas":
      return (
        <CharacteristicsScreen
          section={section}
        />
      );

    case "calidad":
      return (
        <QualityScreen
          section={section}
        />
      );

    case "comercial":
      return (
        <CommercialScreen
          section={section}
        />
      );

    case "experiencia":
      return (
        <ExperienceScreen
          section={section}
        />
      );

    case "alianzas":
      return (
        <AlliancesScreen
          section={section}
        />
      );

    default:
      return (
        <SectionScreen
          section={section}
          onExploreModules={
            onExploreModules
          }
        />
      );
  }
}

/* =========================================================
   SECCIÓN GENERAL
   ========================================================= */

function SectionScreen({
  section,
  onExploreModules,
}: SectionContentProps) {
  const isHome =
    section.id === "inicio";

  return (
    <div className="grid h-full min-h-0 grid-cols-[1.02fr_0.98fr]">
      {/* TEXTO */}

      <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-hidden border-r border-[#ded6ca] px-8 py-6">
        {section.eyebrow && (
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d1430]">
            {section.eyebrow}
          </p>
        )}

        {section.number && (
          <p className="mt-1 shrink-0 text-[10px] font-black text-[#b62037]">
            {section.number}
          </p>
        )}

        <h1
          className={`max-w-xl font-serif font-bold text-[#211a18] ${
            isHome
              ? "mt-3 text-[3rem] leading-[0.99]"
              : "mt-2 text-[2.65rem] leading-[1]"
          }`}
        >
          {section.title}
        </h1>

        <p className="mt-4 max-w-lg text-[13px] leading-6 text-[#60564f]">
          {section.description}
        </p>

        {isHome &&
          section.ctaLabel && (
            <button
              type="button"
              onClick={
                onExploreModules
              }
              className="mt-5 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#8d1430] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[#8d1430]/15 transition hover:bg-[#741027]"
            >
              {section.ctaLabel}

              <ArrowRight
                size={15}
              />
            </button>
          )}
      </div>

      <SectionVisual
        section={section}
      />
    </div>
  );
}

/* =========================================================
   08 · CARACTERÍSTICAS DESTACADAS
   ========================================================= */

function CharacteristicsScreen({
  section,
}: {
  section: Section;
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-[0.78fr_1.22fr]">
      {/* INTRO */}

      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-7 py-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
          08 · Características
        </p>

        <h1 className="mt-3 font-serif text-[2.35rem] font-bold leading-[1] text-[#211a18]">
          Características destacadas
        </h1>

        <p className="mt-4 text-xs leading-6 text-[#60564f]">
          {section.description}
        </p>

        <div className="mt-5 rounded-2xl border border-[#ddd1c2] bg-white/60 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
            Herramientas transversales
          </p>

          <p className="mt-2 text-[10px] leading-5 text-[#766a61]">
            Funcionalidades que acompañan
            y complementan los distintos
            módulos de la plataforma.
          </p>
        </div>
      </div>

      {/* GRID */}

      <div className="flex min-h-0 items-center bg-[#ebe4d9] p-5">
        <div className="grid w-full grid-cols-3 gap-2.5">
          {section.features?.map(
            (feature) => (
              <div
                key={feature.title}
                className="flex min-h-[94px] flex-col rounded-xl border border-[#d9cebf] bg-white/75 p-3 shadow-sm"
              >
                <BadgeCheck
                  size={16}
                  className="shrink-0 text-[#a51f37]"
                />

                <p className="mt-2 text-[9px] font-black leading-[1.15] text-[#342c28]">
                  {feature.title}
                </p>

                <p className="mt-1 line-clamp-3 text-[7.5px] leading-[1.4] text-[#786d65]">
                  {
                    feature.description
                  }
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   09 · AVALES DE CALIDAD
   ========================================================= */

function QualityScreen({
  section,
}: {
  section: Section;
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-[0.88fr_1.12fr]">
      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-8 py-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
          09 · Avales
        </p>

        <h1 className="mt-3 font-serif text-[2.7rem] font-bold leading-[1] text-[#211a18]">
          Avales de Calidad
        </h1>

        <p className="mt-4 text-[12px] leading-6 text-[#60564f]">
          {section.description}
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#681027] px-4 py-4 text-white">
          <ShieldCheck
            size={26}
            className="shrink-0"
          />

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/55">
              Calidad
            </p>

            <p className="mt-1 text-xs font-semibold">
              Compromiso permanente
              con los desarrollos y
              la atención al cliente.
            </p>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 items-center bg-[#ebe4d9] p-6">
        <div className="grid w-full grid-cols-2 gap-3">
          {section.features?.map(
            (feature) => (
              <div
                key={feature.title}
                className="min-h-[135px] rounded-2xl border border-[#d9cebf] bg-white/80 p-4 shadow-sm"
              >
                <ShieldCheck
                  size={20}
                  className="text-[#a51f37]"
                />

                <h3 className="mt-3 font-serif text-base font-bold text-[#302824]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[9px] leading-4 text-[#74685f]">
                  {
                    feature.description
                  }
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   20 · ASPECTOS COMERCIALES
   ========================================================= */

function CommercialScreen({
  section,
}: {
  section: Section;
}) {
  const contractTypes =
    section.features?.slice(0, 3) ??
    [];

  const supportItems =
    section.features?.slice(3) ??
    [];

  const contractIcons = [
    FileCheck2,
    WalletCards,
    Clock3,
  ];

  return (
    <div className="grid h-full min-h-0 grid-cols-[0.82fr_1.18fr]">
      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-7 py-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
          20 · Aspectos comerciales
        </p>

        <h1 className="mt-3 font-serif text-[2.35rem] font-bold leading-[1] text-[#211a18]">
          Contratación y garantías
        </h1>

        <p className="mt-4 text-[11px] leading-6 text-[#60564f]">
          {section.description}
        </p>

        <div className="mt-5 rounded-xl border border-[#d9cebf] bg-white/65 p-4">
          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
            El costo depende de
          </p>

          <ul className="mt-3 space-y-2 text-[9px] leading-4 text-[#655a52]">
            <li>
              • Cantidad de módulos.
            </li>

            <li>
              • Magnitud del municipio.
            </li>

            <li>
              • Forma de contratación.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex min-h-0 flex-col justify-center bg-[#ebe4d9] p-5">
        {/* MODALIDADES */}

        <div className="grid grid-cols-3 gap-2.5">
          {contractTypes.map(
            (feature, index) => {
              const Icon =
                contractIcons[index];

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[#d9cebf] bg-white/80 p-3"
                >
                  <Icon
                    size={17}
                    className="text-[#a51f37]"
                  />

                  <p className="mt-2 text-[9px] font-black leading-[1.2] text-[#352d29]">
                    {feature.title}
                  </p>

                  <p className="mt-1 line-clamp-4 text-[7.5px] leading-[1.4] text-[#766b63]">
                    {
                      feature.description
                    }
                  </p>
                </div>
              );
            },
          )}
        </div>

        {/* GARANTÍA Y SOPORTE */}

        <div className="mt-3 rounded-2xl bg-[#681027] p-4 text-white">
          <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
            Garantía y soporte
          </p>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {supportItems.map(
              (feature) => (
                <div
                  key={feature.title}
                >
                  <p className="text-[9px] font-bold">
                    {feature.title}
                  </p>

                  <p className="mt-1 line-clamp-3 text-[7.5px] leading-[1.4] text-white/60">
                    {
                      feature.description
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   21 · EXPERIENCIA EN LATINOAMÉRICA
   ========================================================= */

function ExperienceScreen({
  section,
}: {
  section: Section;
}) {
  const countries =
    section.features?.map(
      (feature) => feature.title,
    ) ?? [];

  return (
    <div className="grid h-full min-h-0 grid-cols-[0.72fr_1.28fr]">
      {/* TEXTO */}

      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-7 py-6">
        <div className="flex items-center gap-2">
          <Globe2
            size={17}
            className="text-[#a51f37]"
          />

          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
            21 · Experiencia
          </p>
        </div>

        <h1 className="mt-3 font-serif text-[2.35rem] font-bold leading-[1] text-[#211a18]">
          Experiencia en Latinoamérica
        </h1>

        <p className="mt-4 text-[11px] leading-6 text-[#60564f]">
          {section.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {countries.map(
            (country, index) => (
              <div
                key={country}
                className="flex items-center gap-2"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#a51f37] text-[6px] font-black text-white">
                  {index + 1}
                </span>

                <span className="text-[8.5px] font-semibold text-[#5c514a]">
                  {country}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* MAPA OFICIAL */}

      <div className="relative min-h-0 min-w-0 overflow-hidden bg-white">
        <img
          src="/images/brochure/experiencia-latinoamerica.webp"
          alt="Mapa de experiencia de GGMM en Latinoamérica"
          className="absolute inset-0 h-full w-full object-contain p-3"
        />
      </div>
    </div>
  );
}

/* =========================================================
   22 · ALIANZAS INTERNACIONALES
   ========================================================= */

function AlliancesScreen({
  section,
}: {
  section: Section;
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-[0.78fr_1.22fr]">
      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-8 py-6">
        <div className="flex items-center gap-2">
          <Handshake
            size={18}
            className="text-[#a51f37]"
          />

          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
            22 · Alianzas
          </p>
        </div>

        <h1 className="mt-3 font-serif text-[2.45rem] font-bold leading-[1] text-[#211a18]">
          Alianzas internacionales
        </h1>

        <p className="mt-4 text-[12px] leading-6 text-[#60564f]">
          {section.description}
        </p>

        <div className="mt-5 rounded-2xl bg-[#681027] p-4 text-white">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
            Presencia regional
          </p>

          <p className="mt-2 text-[10px] leading-5 text-white/75">
            La experiencia internacional
            de GGMM también se ha
            desarrollado mediante
            alianzas con empresas locales.
          </p>
        </div>
      </div>

      <div className="relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden bg-white p-8">
        <img
          src="/images/brochure/alianzas-internacionales.webp"
          alt="Alianzas internacionales de GGMM"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
}

/* =========================================================
   10 · ÁREAS Y MÓDULOS
   ========================================================= */

function AreasIntro() {
  return (
    <div className="grid h-full min-h-0 grid-cols-[0.94fr_1.06fr]">
      <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-hidden border-r border-[#ded6ca] px-8 py-6">
        <p className="shrink-0 text-[10px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
          10 · Áreas y módulos
        </p>

        <h1 className="mt-3 max-w-[390px] font-serif text-[2.65rem] font-bold leading-[0.98] text-[#211a18]">
          Una plataforma para toda la
          gestión municipal
        </h1>

        <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-[#60564f]">
          GGMM está compuesto por más de
          17 áreas y más de 40 módulos
          destinados a prestar servicios
          dentro del ámbito municipal.
        </p>

        <div className="mt-5 flex gap-3">
          <MetricCard
            value="+17"
            label="Áreas"
          />

          <MetricCard
            value="+40"
            label="Módulos"
          />
        </div>

        <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8d1430]">
          <ArrowDown size={13} />

          Seleccioná un área en el
          índice inferior
        </div>
      </div>

      <div className="relative min-h-0 min-w-0 overflow-hidden bg-[#ebe4d9]">
        <img
          src="/images/brochure/areas-overview.webp"
          alt="Áreas y módulos disponibles en GGMM"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#3d1019]/70 via-transparent to-transparent" />

        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-[#541020]/90 px-4 py-3 text-white backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <Boxes size={16} />
            </div>

            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/50">
                Plataforma GGMM
              </p>

              <p className="mt-0.5 font-serif text-sm font-bold">
                Modular y escalable
              </p>
            </div>
          </div>

          <p className="mt-2 max-w-[320px] text-[8px] leading-4 text-white/65">
            Cada municipio puede
            incorporar progresivamente
            las áreas y módulos que
            necesita.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex min-w-[112px] items-center gap-3 rounded-xl border border-[#ddd1c2] bg-white/65 px-4 py-3">
      <p className="font-serif text-2xl font-black leading-none text-[#a51f37]">
        {value}
      </p>

      <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#766a61]">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   VISUAL GENÉRICO DE SECCIÓN
   ========================================================= */

function SectionVisual({
  section,
}: {
  section: Section;
}) {
  if (section.image) {
    return (
      <div className="relative min-h-0 min-w-0 overflow-hidden bg-[#ebe4d9]">
        <img
          src={section.image}
          alt={
            section.imageAlt ??
            section.title
          }
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute inset-x-5 bottom-5">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/65">
            GGMM
          </p>

          <p className="mt-1 font-serif text-xl font-bold text-white">
            {section.title}
          </p>
        </div>
      </div>
    );
  }

  /* HOME */

  return (
    <div className="relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden bg-[#ebe4d9] px-6 py-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d1430]/8" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d1430]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="/images/ggmmLogo.png"
          alt="GGMM"
          className="max-h-[120px] w-auto max-w-[290px] object-contain"
        />

        <span className="mt-5 h-px w-16 bg-[#8d1430]/25" />

        <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.24em] text-[#8d1430]">
          Digitalización integral para
          Gobiernos Municipales
        </p>

        <p className="mt-3 max-w-[270px] text-[11px] leading-5 text-[#756a62]">
          Una plataforma integral,
          modular y escalable para la
          transformación digital del
          municipio.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   ÁREA SELECCIONADA
   ========================================================= */

function AreaScreen({
  area,
}: {
  area: Module;
}) {
  const titleIsLong =
    area.title.length > 35;

  const titleIsMedium =
    area.title.length > 24;

  return (
    <div className="grid h-full min-h-0 grid-cols-[0.98fr_1.02fr]">
      <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-hidden border-r border-[#ded6ca] px-8 py-6">
        <p className="shrink-0 text-[10px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
          Área GGMM
        </p>

        <h1
          className={`mt-3 font-serif font-bold leading-[1] text-[#211a18] ${
            titleIsLong
              ? "text-[2.2rem]"
              : titleIsMedium
                ? "text-[2.55rem]"
                : "text-[2.9rem]"
          }`}
        >
          {area.title}
        </h1>

        <p className="mt-4 max-w-lg text-[12px] leading-6 text-[#60564f]">
          {area.description}
        </p>

        <div className="mt-4">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
            Módulos
          </p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {area.modules
              .slice(0, 6)
              .map((module) => (
                <span
                  key={module}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#ddd1c2] bg-white/65 px-3 py-1.5 text-[9px] font-semibold text-[#5b5049]"
                >
                  <Layers3
                    size={10}
                    className="text-[#8d1430]"
                  />

                  {module}
                </span>
              ))}
          </div>
        </div>

        {area.notes &&
          area.notes.length > 0 && (
            <p className="mt-3 text-[9px] italic leading-4 text-[#8d8177]">
              * {area.notes[0]}
            </p>
          )}
      </div>

      <AreaVisual area={area} />
    </div>
  );
}

/* =========================================================
   VISUAL ÁREA
   ========================================================= */

function AreaVisual({
  area,
}: {
  area: Module;
}) {
  if (!area.image) {
    return (
      <div className="relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden bg-[#681027] p-7 text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] border-white/5" />

        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[36px] border-white/5" />

        <div className="relative z-10 max-w-[300px]">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50">
            Área de gestión
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">
            {area.title}
          </h2>

          <div className="mt-5 space-y-3">
            {area.benefits
              .slice(0, 3)
              .map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-white/75"
                  />

                  <span className="text-[10px] leading-5 text-white/75">
                    {benefit}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-0 min-w-0 overflow-hidden bg-[#ebe4d9]">
      <img
        src={area.image}
        alt={
          area.imageAlt ??
          area.title
        }
        className="absolute inset-0 h-full w-full object-cover transition duration-500"
        style={{
          objectPosition:
            area.imagePosition ??
            "center",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#3e1019]/70 via-transparent to-transparent" />

      <div className="absolute inset-x-5 bottom-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
          GGMM
        </p>

        <h3 className="mt-1 font-serif text-2xl font-bold text-white">
          {area.title}
        </h3>

        <p className="mt-1 max-w-[300px] text-[9px] leading-4 text-white/75">
          {area.shortDescription}
        </p>
      </div>
    </div>
  );
}

export default MonitorScreen;
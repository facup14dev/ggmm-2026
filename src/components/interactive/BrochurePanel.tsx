import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileCheck2,
  Globe2,
  Handshake,
  Headphones,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import {
  modules,
} from "../../data/sections";

import type {
  Module,
  Section,
} from "../../types/section";

type Props = {
  section: Section;
  activeModule: Module | null;
};

function BrochurePanel({
  section,
  activeModule,
}: Props) {
  if (activeModule) {
    return (
      <AreaBrochure
        area={activeModule}
      />
    );
  }

  function HomeBrochure({
    section,
  }: {
    section: Section;
  }) {
    return (
      <BrochureShell>
        {/* =====================================
            CABECERA
        ====================================== */}

        <div className="shrink-0 px-6 pb-5 pt-6">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#8d1430]">
            GGMM
          </p>

          <h2 className="mt-2 font-serif text-[1.9rem] font-black uppercase leading-[1.02] text-[#211a18]">
            Comience la transformación
            digital de su municipio
          </h2>

          <p className="mt-4 text-[10px] leading-5 text-[#655a52] 2xl:text-[11px]">
            {section.description}
          </p>
        </div>

        {/* =====================================
            MÉTRICAS
        ====================================== */}

        <div className="px-6">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-[#681027] px-3 py-4 text-white">
              <p className="font-serif text-2xl font-black leading-none">
                +20
              </p>

              <p className="mt-2 text-[7px] font-bold uppercase leading-3 tracking-[0.14em] text-white/55">
                Años de
                <br />
                experiencia
              </p>
            </div>

            <div className="rounded-xl bg-[#8d1430] px-3 py-4 text-white">
              <p className="font-serif text-2xl font-black leading-none">
                +17
              </p>

              <p className="mt-2 text-[7px] font-bold uppercase leading-3 tracking-[0.14em] text-white/55">
                Áreas
                <br />
                disponibles
              </p>
            </div>

            <div className="rounded-xl bg-[#a51f37] px-3 py-4 text-white">
              <p className="font-serif text-2xl font-black leading-none">
                +40
              </p>

              <p className="mt-2 text-[7px] font-bold uppercase leading-3 tracking-[0.14em] text-white/55">
                Módulos
                <br />
                GGMM
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            CONTENIDO
        ====================================== */}

        <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-5">
          <div className="rounded-2xl border border-[#ddd0c1] bg-white/65 p-5">
            <SectionLabel>
              Una plataforma integral
            </SectionLabel>

            <div className="mt-4 space-y-4">
              <HomeBenefit
                title="Gestión integrada"
                description="Las principales áreas municipales trabajan dentro de un mismo ecosistema tecnológico."
              />

              <HomeBenefit
                title="Transformación digital"
                description="Digitaliza procesos y simplifica la administración cotidiana del municipio."
              />

              <HomeBenefit
                title="Modular y escalable"
                description="Permite incorporar progresivamente las áreas y módulos que cada municipio necesita."
              />
            </div>
          </div>

          {/* BLOQUE FINAL */}

          <div className="mt-4 rounded-2xl bg-[#ebe3d8] p-4">
            <div className="flex items-start gap-3">
              <Sparkles
                size={18}
                className="mt-0.5 shrink-0 text-[#a51f37]"
              />

              <div>
                <p className="text-[9px] font-black text-[#302824]">
                  Tecnología aplicada a la gestión municipal
                </p>

                <p className="mt-1 text-[8px] leading-4 text-[#74685f]">
                  Información, administración, recaudación,
                  territorio y atención al ciudadano dentro
                  de una misma plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <BrochureFooter />
      </BrochureShell>
    );
  }

  function HomeBenefit({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f1e7e2]">
          <BadgeCheck
            size={14}
            className="text-[#a51f37]"
          />
        </div>

        <div>
          <p className="text-[9px] font-black text-[#302824] 2xl:text-[10px]">
            {title}
          </p>

          <p className="mt-1 text-[8px] leading-4 text-[#74685f] 2xl:text-[9px]">
            {description}
          </p>
        </div>
      </div>
    );
  }
  

  switch (section.id) {

    case "inicio":
    return (
      <HomeBrochure
        section={section}
      />
    );

    case "areas":
      return (
        <AreasBrochure
          section={section}
        />
      );

    case "caracteristicas":
      return (
        <CharacteristicsBrochure
          section={section}
        />
      );

    case "calidad":
      return (
        <QualityBrochure
          section={section}
        />
      );

    case "comercial":
      return (
        <CommercialBrochure
          section={section}
        />
      );

    case "experiencia":
      return (
        <ExperienceBrochure
          section={section}
        />
      );

    case "alianzas":
      return (
        <AlliancesBrochure
          section={section}
        />
      );

    default:
      return (
        <SectionBrochure
          section={section}
        />
      );
  }
}

/* =========================================================
   ÁREA SELECCIONADA
   ========================================================= */

function AreaBrochure({
  area,
}: {
  area: Module;
}) {
  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.8rem] border border-[#d7c8b8] bg-[#f5f2ed] shadow-[0_28px_65px_rgba(64,35,25,0.18)]">
      {/* FOTO */}

      <div className="relative h-[165px] shrink-0 overflow-hidden bg-[#681027] 2xl:h-[185px]">
        {area.image ? (
          <>
            <img
              src={area.image}
              alt={
                area.imageAlt ??
                area.title
              }
              className="h-full w-full object-cover"
              style={{
                objectPosition:
                  area.imagePosition ??
                  "center",
              }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-white/5" />

            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[36px] border-white/5" />

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/ggmmLogo.png"
                alt="GGMM"
                className="max-h-20 max-w-[220px] object-contain brightness-0 invert"
              />
            </div>
          </>
        )}
      </div>

      {/* NOMBRE */}

      <div className="relative z-10 -mt-6 shrink-0 px-5">
        <div className="inline-flex max-w-[96%] items-center rounded-l-xl rounded-r-full bg-[#a51f37] px-5 py-3 text-white shadow-md">
          <p className="text-[11px] font-black uppercase tracking-[0.08em]">
            {area.title}
          </p>
        </div>
      </div>

      {/* CONTENIDO */}

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto">
        <div className="px-6 pb-5 pt-5">
          <p className="text-[12px] leading-6 text-[#655a52] 2xl:text-[13px]">
            {area.description}
          </p>

          {area.accentLabel && (
            <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl bg-[#681027] px-4 py-4 text-white">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
                  Objetivo
                </p>

                <p className="mt-1 font-serif text-lg font-bold leading-tight">
                  {area.accentLabel}
                </p>
              </div>

              {area.metric && (
                <div className="border-l border-white/15 pl-4 text-right">
                  <p className="font-serif text-2xl font-black leading-none">
                    {
                      area.metric
                        .value
                    }
                  </p>

                  <p className="mt-2 max-w-[110px] text-[8px] leading-3 text-white/55">
                    {
                      area.metric
                        .label
                    }
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MÓDULOS */}

        <div className="border-y border-[#ddd0c1] bg-white/55 px-6 py-5">
          <SectionLabel>
            Módulos
          </SectionLabel>

          <div className="mt-4 grid gap-2 2xl:grid-cols-2">
            {area.modules.map(
              (module) => (
                <div
                  key={module}
                  className="flex items-center gap-2 text-[10px] font-semibold leading-4 text-[#493e38] 2xl:text-[11px]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#b62037]/40 text-[#b62037]">
                    <ArrowRight
                      size={11}
                    />
                  </span>

                  <span>
                    {module}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* BENEFICIOS */}

        <div className="px-6 py-5">
          <SectionLabel>
            Beneficios del área
          </SectionLabel>

          <div className="mt-4 space-y-3">
            {area.benefits.map(
              (benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <BadgeCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a51f37]"
                  />

                  <p className="text-[10px] leading-5 text-[#62574f] 2xl:text-[11px]">
                    {benefit}
                  </p>
                </div>
              ),
            )}
          </div>

          {area.notes &&
            area.notes.length >
              0 && (
              <div className="mt-5 border-t border-[#ddd0c1] pt-4">
                {area.notes.map(
                  (note) => (
                    <p
                      key={note}
                      className="text-[9px] italic leading-4 text-[#8d8177]"
                    >
                      * {note}
                    </p>
                  ),
                )}
              </div>
            )}
        </div>
      </div>

      <BrochureFooter />
    </aside>
  );
}

/* =========================================================
   10 · ÁREAS
   ========================================================= */

function AreasBrochure({
  section,
}: {
  section: Section;
}) {
  return (
    <BrochureShell>
      <BrochureImage
        src={
          section.image ??
          "/images/brochure/areas-overview.webp"
        }
        alt={
          section.imageAlt ??
          section.title
        }
      />

      <BrochureHeading
        number={section.number}
        title="Áreas y módulos"
      />

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6">
        <p className="text-[11px] leading-5 text-[#655a52]">
          {section.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <MetricBlock
            value="+17"
            label="Áreas"
            dark
          />

          <MetricBlock
            value="+40"
            label="Módulos"
          />
        </div>

        <div className="mt-5 rounded-2xl border border-[#ddd0c1] bg-white/65 p-5">
          <SectionLabel>
            Disponibilidad inmediata
          </SectionLabel>

          <p className="mt-2 text-[9px] leading-4 text-[#74685f]">
            Seleccioná un área desde
            el índice inferior del
            monitor para conocer sus
            módulos y beneficios.
          </p>

          <div className="mt-4 grid gap-2">
            {modules.map(
              (area) => (
                <div
                  key={area.id}
                  className="flex items-center gap-2 text-[9px] font-semibold text-[#5d524b] 2xl:text-[10px]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a51f37]" />

                  {area.title}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   08 · CARACTERÍSTICAS
   ========================================================= */

function CharacteristicsBrochure({
  section,
}: {
  section: Section;
}) {
  return (
    <BrochureShell>
      <div className="relative h-[120px] shrink-0 overflow-hidden bg-[#681027]">
        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[36px] border-white/5" />

        <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full border-[28px] border-white/5" />

        <div className="relative flex h-full items-center px-6 text-white">
          <Sparkles
            size={32}
            className="text-white/75"
          />

          <div className="ml-4">
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-white/50">
              Plataforma GGMM
            </p>

            <p className="mt-1 font-serif text-xl font-bold">
              Herramientas
              transversales
            </p>
          </div>
        </div>
      </div>

      <BrochureHeading
        number="08"
        title="Características destacadas"
      />

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-6">
        <p className="px-1 text-[10px] leading-5 text-[#655a52]">
          {section.description}
        </p>

        <div className="mt-4 grid gap-2">
          {section.features?.map(
            (feature, index) => (
              <div
                key={feature.title}
                className="grid grid-cols-[32px_1fr] gap-3 rounded-xl border border-[#ded2c4] bg-white/75 p-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1e7e2] text-[9px] font-black text-[#a51f37]">
                  {String(
                    index + 1,
                  ).padStart(2, "0")}
                </div>

                <div>
                  <p className="text-[10px] font-black leading-4 text-[#302824]">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-[#74685f]">
                    {
                      feature.description
                    }
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   09 · CALIDAD
   ========================================================= */

function QualityBrochure({
  section,
}: {
  section: Section;
}) {
  return (
    <BrochureShell>
      {section.image && (
        <BrochureImage
          src={section.image}
          alt={
            section.imageAlt ??
            section.title
          }
          heightClass="h-[135px]"
        />
      )}

      <BrochureHeading
        number="09"
        title="Avales de calidad"
      />

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6">
        <p className="text-[10px] leading-5 text-[#655a52]">
          {section.description}
        </p>

        <div className="mt-5 grid gap-3">
          {section.features?.map(
            (feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 rounded-xl border border-[#ded2c4] bg-white/75 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#681027] text-white">
                  <ShieldCheck
                    size={17}
                  />
                </div>

                <div>
                  <p className="text-[11px] font-black text-[#302824]">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-[8.5px] leading-4 text-[#74685f]">
                    {
                      feature.description
                    }
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   20 · COMERCIAL / GARANTÍAS
   ========================================================= */

function CommercialBrochure({
  section,
}: {
  section: Section;
}) {
  const contracts =
    section.features?.slice(0, 3) ??
    [];

  const support =
    section.features?.slice(3) ??
    [];

  const contractIcons = [
    FileCheck2,
    WalletCards,
    Clock3,
  ];

  return (
    <BrochureShell>
      <div className="shrink-0 bg-[#681027] px-6 py-6 text-white">
        <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/55">
          20 · Aspectos comerciales
        </p>

        <h2 className="mt-2 font-serif text-2xl font-bold leading-tight">
          Contratación y garantías
        </h2>

        <p className="mt-3 text-[9px] leading-4 text-white/65">
          {section.description}
        </p>
      </div>

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <SectionLabel>
          Modalidades
        </SectionLabel>

        <div className="mt-3 grid gap-2">
          {contracts.map(
            (feature, index) => {
              const Icon =
                contractIcons[index];

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-xl border border-[#ddd1c2] bg-white/75 p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f1e7e2] text-[#a51f37]">
                    <Icon size={15} />
                  </div>

                  <div>
                    <p className="text-[9px] font-black leading-4 text-[#302824]">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-[#74685f]">
                      {
                        feature.description
                      }
                    </p>
                  </div>
                </div>
              );
            },
          )}
        </div>

        <div className="mt-5 rounded-xl bg-[#ebe3d8] p-4">
          <SectionLabel>
            Garantía y atención
          </SectionLabel>

          <div className="mt-3 space-y-3">
            {support.map(
              (feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                >
                  <Headphones
                    size={15}
                    className="mt-0.5 shrink-0 text-[#a51f37]"
                  />

                  <div>
                    <p className="text-[9px] font-bold text-[#352d29]">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-[#74685f]">
                      {
                        feature.description
                      }
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   21 · EXPERIENCIA
   ========================================================= */

function ExperienceBrochure({
  section,
}: {
  section: Section;
}) {
  const countries =
    section.features ?? [];

  return (
    <BrochureShell>
      <div className="relative h-[170px] shrink-0 overflow-hidden bg-white">
        <img
          src="/images/brochure/experiencia-latinoamerica.webp"
          alt="Experiencia GGMM en Latinoamérica"
          className="h-full w-full object-contain p-3"
        />
      </div>

      <BrochureHeading
        number="21"
        title="Experiencia en Latinoamérica"
      />

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6">
        <div className="flex items-center justify-between rounded-xl bg-[#681027] px-4 py-3 text-white">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/50">
              Experiencia
            </p>

            <p className="mt-1 text-xs font-semibold">
              Presencia regional
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Globe2 size={20} />

            <span className="font-serif text-3xl font-black">
              12
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
          {countries.map(
            (country, index) => (
              <div
                key={country.title}
                className="flex items-center gap-2"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#a51f37] text-[6px] font-black text-white">
                  {index + 1}
                </span>

                <span className="text-[8.5px] font-semibold leading-4 text-[#5d524b]">
                  {country.title}
                </span>
              </div>
            ),
          )}
        </div>

        <div className="mt-5 border-t border-[#ddd0c1] pt-4">
          <p className="text-[9px] leading-4 text-[#74685f]">
            Algunos países se
            trabajaron bajo alianzas
            con empresas locales.
          </p>
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   22 · ALIANZAS
   ========================================================= */

function AlliancesBrochure({
  section,
}: {
  section: Section;
}) {
  return (
    <BrochureShell>
      <div className="shrink-0 bg-[#681027] px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <Handshake size={24} />

          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
              22 · GGMM
            </p>

            <h2 className="mt-1 font-serif text-xl font-bold">
              Alianzas
              internacionales
            </h2>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 items-center justify-center bg-white p-5">
          <img
            src="/images/brochure/alianzas-internacionales.webp"
            alt="Alianzas internacionales GGMM"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="shrink-0 border-t border-[#ddd0c1] px-6 py-5">
          <p className="text-[10px] leading-5 text-[#655a52]">
            {section.description}
          </p>

          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#ebe3d8] p-3">
            <Globe2
              size={18}
              className="shrink-0 text-[#a51f37]"
            />

            <p className="text-[8.5px] leading-4 text-[#655a52]">
              Desarrollo de experiencia
              internacional mediante
              colaboración con empresas
              locales.
            </p>
          </div>
        </div>
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   SECCIÓN GENÉRICA
   ========================================================= */

function SectionBrochure({
  section,
}: {
  section: Section;
}) {
  return (
    <BrochureShell>
      {section.image && (
        <BrochureImage
          src={section.image}
          alt={
            section.imageAlt ??
            section.title
          }
        />
      )}

      <BrochureHeading
        number={section.number}
        title={section.title}
      />

      <div className="ggmm-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6">
        <p className="text-[11px] leading-6 text-[#655a52]">
          {section.description}
        </p>

        {section.features &&
          section.features.length >
            0 && (
            <div className="mt-5 space-y-3">
              {section.features.map(
                (feature) => (
                  <div
                    key={
                      feature.title
                    }
                    className="rounded-xl border border-[#ded2c4] bg-white/75 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <BadgeCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-[#a51f37]"
                      />

                      <div>
                        <p className="text-[10px] font-bold text-[#302824]">
                          {
                            feature.title
                          }
                        </p>

                        <p className="mt-1 text-[8.5px] leading-4 text-[#74685f]">
                          {
                            feature.description
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
      </div>

      <BrochureFooter />
    </BrochureShell>
  );
}

/* =========================================================
   COMPONENTES AUXILIARES
   ========================================================= */

function BrochureShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.8rem] border border-[#d7c8b8] bg-[#f5f2ed] shadow-[0_28px_65px_rgba(64,35,25,0.18)]">
      {children}
    </aside>
  );
}

function BrochureImage({
  src,
  alt,
  heightClass = "h-[150px]",
}: {
  src: string;
  alt: string;
  heightClass?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-[#ebe4d9] ${heightClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

function BrochureHeading({
  number,
  title,
}: {
  number?: string;
  title: string;
}) {
  return (
    <div className="shrink-0 px-6 pb-5 pt-5">
      <div className="flex items-start gap-3">
        {number && (
          <span className="font-serif text-4xl font-black leading-none text-[#a51f37]">
            {number}
          </span>
        )}

        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
            GGMM
          </p>

          <h2 className="mt-1 font-serif text-[1.4rem] font-black uppercase leading-[1.05] text-[#211a18]">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

function MetricBlock({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 text-white ${
        dark
          ? "bg-[#681027]"
          : "bg-[#a51f37]"
      }`}
    >
      <p className="font-serif text-4xl font-black leading-none">
        {value}
      </p>

      <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/55">
        {label}
      </p>
    </div>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
      {children}
    </p>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function BrochureFooter() {
  return (
    <div className="shrink-0 bg-[#681027] px-6 py-4 text-white">
      <div className="flex items-end justify-between gap-4">
        <div>
          <img
            src="/images/ggmmLogo.png"
            alt="GGMM"
            className="h-8 w-auto object-contain brightness-0 invert"
          />

          <p className="mt-2 text-[7px] uppercase tracking-[0.13em] text-white/55">
            Gestión Gubernamental
            Municipal
          </p>
        </div>

        <p className="text-right text-[7px] font-bold uppercase tracking-[0.18em] text-white/45">
          Digitalización
          <br />
          integral para
          <br />
          gobiernos
          municipales
        </p>
      </div>
    </div>
  );
}

export default BrochurePanel;
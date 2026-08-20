import {
  BadgeCheck,
  Layers3,
  TrendingUp,
} from "lucide-react";

import type {
  Module,
  Section,
} from "../../types/section";

type Props = {
  section: Section;
  activeModule: Module | null;
  compact?: boolean;
};

function BrochurePanel({
  section,
  activeModule,
  compact = false,
}: Props) {
  if (activeModule) {
    return (
      <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.9rem] border border-[#d8cdbd] bg-[#f8f3e9] shadow-[0_25px_60px_rgba(67,48,32,0.16)]">
        {/* CABECERA */}
        <div
          className={`shrink-0 ${
            compact ? "p-6" : "p-7"
          }`}
        >
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
            Módulo GGMM
          </span>

          <h2
            className={`mt-3 font-serif font-bold leading-tight text-[#211a18] ${
              compact
                ? "text-4xl"
                : "text-3xl"
            }`}
          >
            {activeModule.title}
          </h2>

          <p
            className={`text-[#655a52] ${
              compact
                ? "mt-4 text-base leading-7"
                : "mt-4 text-sm leading-6"
            }`}
          >
            {activeModule.description}
          </p>

          {/* BLOQUE DESTACADO DEL MÓDULO */}
          {activeModule.accentLabel && (
            <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-[#8d1430] p-5 text-white">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                  Objetivo
                </p>

                <p className="mt-1 font-serif text-xl font-bold leading-tight">
                  {activeModule.accentLabel}
                </p>
              </div>

              {activeModule.metric && (
                <div className="border-l border-white/20 pl-4 text-right">
                  <p className="font-serif text-3xl font-black leading-none">
                    {activeModule.metric.value}
                  </p>

                  <p className="mt-2 max-w-[115px] text-[9px] leading-4 text-white/65">
                    {activeModule.metric.label}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CONTENIDO SCROLLEABLE */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {/* SOLUCIONES RELACIONADAS */}
          <div className="border-y border-[#ddd2c1] bg-[#efe7d8]/70 p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
              Soluciones relacionadas
            </p>

            <div className="mt-4 grid gap-3">
              {activeModule.relatedSolutions?.map(
                (item) => (
                  <MiniFeature
                    key={item}
                    icon={Layers3}
                    title={item}
                    text="Herramienta complementaria del ecosistema GGMM."
                  />
                ),
              )}
            </div>
          </div>

          {/* IMPACTOS */}
          <div className="p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
              Impactos
            </p>

            <div className="mt-4 grid gap-3">
              {activeModule.impacts?.map(
                (impact) => (
                  <Highlight
                    key={impact}
                    icon={TrendingUp}
                    title={impact}
                    text="Resultado esperado en la gestión municipal."
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* FOOTER FIJO */}
        {/* <div className="shrink-0 bg-[#8d1430] px-6 py-5 text-white">
          <p className="font-serif text-3xl font-black">
            ggmm
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="text-xs text-white/70">
              Gestión Gubernamental Municipal
            </p>

            <p className="text-right text-[10px] uppercase tracking-[0.18em] text-white/55">
              Plataforma
              <br />
              integral
            </p>
          </div>
        </div> */}
      </aside>
    );
  }

  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.9rem] border border-[#d8cdbd] bg-[#f8f3e9] shadow-[0_25px_60px_rgba(67,48,32,0.16)]">
      {/* CABECERA */}
      <div className="shrink-0 p-6">
        <div className="flex items-start gap-3">
          {section.number && (
            <span className="font-serif text-5xl font-black leading-none text-[#8d1430]">
              {section.number}
            </span>
          )}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#887b70]">
              GGMM
            </p>

            <h2 className="mt-1 font-serif text-3xl font-black uppercase leading-tight text-[#211a18]">
              {section.title}
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#655a52]">
          {section.description}
        </p>
      </div>

      {/* CONTENIDO SCROLLEABLE */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* BENEFICIOS DE LA SECCIÓN */}
        {section.features &&
          section.features.length > 0 && (
            <div className="border-y border-[#ddd2c1] bg-[#eee6d9]/60 p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
                Beneficios destacados
              </p>

              <div className="mt-4 grid gap-3">
                {section.features.map(
                  (feature) => (
                    <Highlight
                      key={feature.title}
                      icon={BadgeCheck}
                      title={feature.title}
                      text={feature.description}
                    />
                  ),
                )}
              </div>
            </div>
          )}

        {/* HERRAMIENTAS DEL ECOSISTEMA */}
        <div className="p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8d1430]">
            Herramientas del ecosistema
          </p>

          <div className="mt-4 grid gap-3">
            <MiniFeature
              icon={Layers3}
              title="Autogestión de proveedores"
              text="Vinculación administrativa más ágil con proveedores."
            />

            <MiniFeature
              icon={Layers3}
              title="Autogestión de contribuyentes"
              text="Canal digital para gestiones, consultas y seguimiento."
            />

            <MiniFeature
              icon={Layers3}
              title="Cobranza electrónica múltiple entidad"
              text="Más medios de pago y mayor capacidad de cobranza."
            />

            <MiniFeature
              icon={Layers3}
              title="Catastro GIS / BI / Multa digital"
              text="Herramientas complementarias para control, análisis y gestión."
            />
          </div>
        </div>
      </div>

      {/* FOOTER FIJO */}
      <div className="shrink-0 bg-[#8d1430] px-6 py-5 text-white">
        <p className="font-serif text-3xl font-black">
          ggmm
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <p className="text-xs text-white/70">
            Gestión Gubernamental Municipal
          </p>

          <p className="text-right text-[10px] uppercase tracking-[0.18em] text-white/55">
            Plataforma
            <br />
            integral
          </p>
        </div>
      </div>
    </aside>
  );
}

type MiniFeatureProps = {
  icon: typeof Layers3;
  title: string;
  text: string;
};

function MiniFeature({
  icon: Icon,
  title,
  text,
}: MiniFeatureProps) {
  return (
    <div className="rounded-xl border border-[#ded3c3] bg-white p-4">
      <div className="flex items-start gap-3">
        <Icon
          size={18}
          className="mt-0.5 shrink-0 text-[#8d1430]"
        />

        <div>
          <p className="text-sm font-bold text-[#2a2421]">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-[#776b62]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

type HighlightProps = {
  icon: typeof BadgeCheck;
  title: string;
  text: string;
};

function Highlight({
  icon: Icon,
  title,
  text,
}: HighlightProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#ded3c3] bg-white/70 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8d1430] text-white">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-sm font-bold text-[#2a2421]">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-[#776b62]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default BrochurePanel;
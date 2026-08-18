import {
  BadgeCheck,
  Building2,
  CreditCard,
  Layers3,
  LockKeyhole,
  TrendingUp,
} from "lucide-react";

import type {
  Module,
  Section,
} from "../../types/section";

type Props = {
  section: Section;
  activeModule: Module | null;
};

const fallbackIcons = [
  Building2,
  Layers3,
  TrendingUp,
  LockKeyhole,
];

function BrochurePanel({
  section,
  activeModule,
}: Props) {
  if (activeModule) {
    return (
      <aside className="overflow-hidden rounded-[1.8rem] border border-[#d8cdbd] bg-[#f8f3e9] shadow-[0_30px_70px_rgba(67,48,32,0.18)]">
        <div className="p-7">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#74152b]">
            Módulo GGMM
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#211a18]">
            {activeModule.title}
          </h2>

          <p className="mt-4 leading-7 text-[#655a52]">
            {activeModule.description}
          </p>
        </div>

        <div className="border-y border-[#ddd2c1] bg-[#efe7d8]/70 p-6">
          <div className="grid gap-3">
            <MiniFeature
              icon={Layers3}
              title="Integrado"
              text="Conectado al resto de los módulos de la plataforma."
            />

            <MiniFeature
              icon={TrendingUp}
              title="Escalable"
              text="Preparado para acompañar el crecimiento del municipio."
            />

            <MiniFeature
              icon={BadgeCheck}
              title="Especializado"
              text="Diseñado específicamente para procesos municipales."
            />
          </div>
        </div>

        <div className="bg-[#74152b] px-7 py-7 text-white">
          <p className="font-serif text-3xl font-black">
            ggmm
          </p>

          <p className="mt-2 text-sm text-white/70">
            Tecnología para gobiernos municipales.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="overflow-hidden rounded-[1.8rem] border border-[#d8cdbd] bg-[#f8f3e9] shadow-[0_30px_70px_rgba(67,48,32,0.18)]">
      {/* CABECERA */}
      <div className="p-7">
        <div className="flex items-start gap-3">
          {section.number && (
            <span className="font-serif text-4xl font-black leading-none text-[#74152b]">
              {section.number}
            </span>
          )}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#887b70]">
              GGMM
            </p>

            <h2 className="mt-1 font-serif text-2xl font-black uppercase leading-tight text-[#211a18]">
              {section.title}
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#655a52]">
          {section.description}
        </p>
      </div>

      {/* FEATURES */}
      {section.features &&
        section.features.length > 0 && (
          <div className="grid grid-cols-2 gap-3 border-y border-[#ddd2c1] bg-[#eee6d9]/60 p-5">
            {section.features.map(
              (feature, index) => {
                const Icon =
                  fallbackIcons[
                    index %
                      fallbackIcons.length
                  ];

                return (
                  <article
                    key={feature.title}
                    className="rounded-xl border border-[#ded3c3] bg-white p-4 shadow-sm"
                  >
                    <Icon
                      size={22}
                      className="text-[#74152b]"
                    />

                    <h3 className="mt-3 text-sm font-bold leading-tight text-[#2a2421]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#776b62]">
                      {feature.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        )}

      {/* BENEFICIOS DESTACADOS */}
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#74152b]">
          Beneficios destacados
        </p>

        <div className="mt-4 grid gap-3">
          <Highlight
            icon={TrendingUp}
            title="Mayor eficiencia"
            text="Procesos más simples y mejor capacidad de gestión."
          />

          <Highlight
            icon={CreditCard}
            title="Más alternativas"
            text="Herramientas para mejorar la experiencia del contribuyente."
          />

          <Highlight
            icon={BadgeCheck}
            title="Gestión respaldada"
            text="Tecnología orientada a procesos municipales reales."
          />
        </div>
      </div>

      {/* FOOTER DEL FOLLETO */}
      <div className="bg-[#74152b] px-7 py-7 text-white">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-serif text-3xl font-black">
              ggmm
            </p>

            <p className="mt-2 text-xs text-white/70">
              Gestión Gubernamental Municipal
            </p>
          </div>

          <p className="text-right text-[10px] uppercase tracking-[0.16em] text-white/55">
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
  icon: typeof Building2;
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
          size={20}
          className="mt-0.5 shrink-0 text-[#74152b]"
        />

        <div>
          <p className="text-sm font-bold">
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
  icon: typeof Building2;
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
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#74152b] text-white">
        <Icon size={18} />
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
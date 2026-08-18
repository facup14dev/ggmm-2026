import { ArrowRight, CircleDollarSign, Landmark, Network, UsersRound, } from "lucide-react";
import type { Module, Section, } from "../../types/section";

type Props = {
  section: Section;
  activeModule: Module | null;
  onExploreModules: () => void;
};

function MonitorScreen({
  section,
  activeModule,
  onExploreModules,
}: Props) {
  
  const title =
    activeModule?.title ?? section.title;

  const description =
    activeModule?.description ??
    section.description;

  const eyebrow = activeModule
    ? "Módulo de gestión municipal"
    : section.eyebrow;

  return (
    <div className="relative overflow-hidden bg-[#f4efe5]">
      <div className="grid min-h-117.5 lg:grid-cols-[1.08fr_0.92fr]">
       
        {/* Texto */}
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#74152b]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.06] text-[#211a18] sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#60564f]">
            {description}
          </p>

          {!activeModule &&
            section.id === "inicio" && (
              <button
                type="button"
                onClick={onExploreModules}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#74152b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#74152b]/15 transition hover:-translate-y-0.5 hover:bg-[#5c1021]"
              >
                {section.ctaLabel ??
                  "Ver módulos de integración"}

                <ArrowRight size={17} />
              </button>
            )}
        </div>

        {/* Visual */}
        <div className="relative min-h-80 overflow-hidden border-t border-[#ded6ca] bg-[#ebe3d7] lg:border-l lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.2)_45%,transparent_72%)]" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-18 border-[#8b7764]/10" />

          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-12 border-[#74152b]/10" />

          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[7px] border-[#74152b]/15" />

          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4c7b7] bg-white shadow-xl">
            <UsersRound
              size={30}
              className="text-[#74152b]"
            />
          </div>

          <InfoBubble
            className="left-[10%] top-[18%]"
            icon={Landmark}
            label="Municipio"
          />

          <InfoBubble
            className="right-[10%] top-[20%]"
            icon={Network}
            label="Servicios"
          />

          <InfoBubble
            className="bottom-[14%] left-[15%]"
            icon={CircleDollarSign}
            label="Recaudación"
          />

          <div className="absolute bottom-5 right-5 rounded-xl border border-white/70 bg-white/75 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#8d8178]">
              Plataforma
            </p>

            <p className="mt-1 text-sm font-bold text-[#2e2724]">
              Datos integrados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type InfoBubbleProps = {
  className: string;
  icon: typeof Landmark;
  label: string;
};

function InfoBubble({
  className,
  icon: Icon,
  label,
}: InfoBubbleProps) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full border border-[#d9cebf] bg-white/90 px-3 py-2 shadow-md backdrop-blur ${className}`}
    >
      <Icon
        size={17}
        className="text-[#74152b]"
      />

      <span className="text-xs font-semibold text-[#4d433d]">
        {label}
      </span>
    </div>
  );
}

export default MonitorScreen;
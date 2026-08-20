import {
  ArrowRight,
  CheckCircle2,
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

function MonitorScreen({
  section,
  activeModule,
}: Props) {
  return (
    <div className="h-full overflow-hidden bg-[#f4efe5]">
      <div className="h-full animate-[screenContentIn_.28s_ease-out]">
        {activeModule ? (
          <ModuleScreen module={activeModule} />
        ) : (
          <SectionScreen section={section} />
        )}
      </div>
    </div>
  );
}

type SectionScreenProps = {
  section: Section;
};

function SectionScreen({
  section,
}: SectionScreenProps) {
  return (
    <div className="grid h-full grid-cols-[1.02fr_0.98fr]">
      {/* TEXTO */}
      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-8 py-6">
        {section.eyebrow && (
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d1430]">
            {section.eyebrow}
          </p>
        )}

        <h1 className="mt-3 max-w-xl font-serif text-[3.2rem] font-bold leading-[1.01] text-[#211a18]">
          {section.title}
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-[#60564f]">
          {section.description}
        </p>

        {section.id === "inicio" && (
          <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#8d1430] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#8d1430]/15">
            {section.ctaLabel}

            <ArrowRight size={16} />
          </div>
        )}
      </div>

      {/* IDENTIDAD GGMM */}
      <div className="relative flex min-w-0 items-center justify-center overflow-hidden bg-[#ebe4d9] px-8 py-10">
        {/* Decoración */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d1430]/8" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d1430]/10" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src="/images/ggmmLogo.png"
            alt="GGMM - Gestión Gubernamental Municipal"
            className="max-h-[150px] w-auto max-w-[310px] object-contain"
          />

          <span className="mt-7 h-px w-20 bg-[#8d1430]/25" />

          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8d1430]">
            Gestión Gubernamental Municipal
          </p>

          <p className="mt-3 max-w-[270px] text-xs leading-5 text-[#756a62]">
            Una plataforma integral para conectar las
            áreas clave de la gestión municipal.
          </p>
        </div>

        {/* Detalle inferior */}
        <div className="absolute bottom-5 right-6 rounded-xl border border-[#d8cdbd] bg-white/55 px-4 py-3 backdrop-blur-sm">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#95887e]">
            Plataforma
          </p>

          <p className="mt-1 text-xs font-bold text-[#403733]">
            Integral · Modular · Escalable
          </p>
        </div>
      </div>
    </div>
  );
}

type ModuleScreenProps = {
  module: Module;
};

function ModuleScreen({
  module,
}: ModuleScreenProps) {
  return (
    <div className="grid h-full grid-cols-[1.02fr_0.98fr]">
      {/* INFORMACIÓN PRINCIPAL */}
      <div className="flex min-w-0 flex-col justify-center border-r border-[#ded6ca] px-8 py-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d1430]">
          Módulo de gestión municipal
        </p>

        <h1 className="mt-3 font-serif text-[3.4rem] font-bold leading-none text-[#211a18]">
          {module.title}
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#60564f]">
          {module.description}
        </p>
      </div>

      {/* INFORMACIÓN DEL MÓDULO */}
      <div className="flex min-w-0 items-center bg-[#ebe4d9] p-7">
        <div className="w-full rounded-3xl border border-[#d9cebf] bg-white/75 p-6 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
            Soluciones relacionadas
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {module.relatedSolutions?.map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d9cebf] bg-[#f8f3e9] px-3 py-2 text-[11px] font-semibold text-[#5b5049]"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-6 border-t border-[#ddd3c6] pt-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8d1430]">
              Impactos
            </p>

            <div className="mt-3 space-y-3">
              {module.impacts?.map((impact) => (
                <div
                  key={impact}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8d1430]"
                  />

                  <span className="text-xs leading-5 text-[#5f554e]">
                    {impact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorScreen;
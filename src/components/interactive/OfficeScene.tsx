import type { ReactNode } from "react";
import {
  Coffee,
  MousePointer2,
  PenLine,
  Sparkles,
} from "lucide-react";

type Props = {
  monitor: ReactNode;
  brochure: ReactNode;
};

function OfficeScene({
  monitor,
  brochure,
}: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d9d3ca]">
      {/* Fondo superior */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-[#ececeb]" />

      {/* Grilla decorativa */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/40" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/40" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/40" />

        <div className="absolute inset-x-0 top-[26%] h-px bg-white/40" />
        <div className="absolute inset-x-0 top-[70%] h-px bg-white/25" />
      </div>

      {/* Escritorio */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[#d1cbc2]" />

      {/* 
        IMPORTANTE:
        ya no usamos items-center.
        Todo empieza siempre desde la misma posición.
      */}
      <div className="relative z-10 mx-auto min-h-screen max-w-[1600px] px-6 pb-40 pt-12 lg:px-10 lg:pt-14">
        <div className="grid w-full items-start gap-10 xl:grid-cols-[1.65fr_0.72fr]">
          <div className="min-w-0">
            {monitor}
          </div>

          <div className="min-w-0">
            {brochure}
          </div>
        </div>
      </div>

      {/* SOBRE NOSOTROS */}
      <div className="pointer-events-none absolute bottom-7 left-[7%] hidden rotate-[-6deg] lg:block">
        <div className="w-56 rounded-2xl border border-white/70 bg-white/75 px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <p className="font-serif text-xl font-black uppercase leading-tight tracking-wide text-[#211a18]">
            Sobre
            <br />
            nosotros
          </p>

          <div className="mt-4 flex gap-4 text-[#8d1430]">
            <Sparkles size={18} />
            <PenLine size={18} />
            <MousePointer2 size={18} />
            <Sparkles size={18} />
          </div>
        </div>
      </div>

      {/* TECLADO */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 xl:block">
        <div className="relative h-16 w-72 rotate-[2deg] rounded-xl bg-[#252321] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.28)]">
          <div className="grid h-full grid-cols-12 gap-1">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="rounded-[3px] bg-[#e8e2d9] shadow-inner"
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOUSEPAD */}
      <div className="pointer-events-none absolute bottom-7 right-[14%] hidden h-16 w-28 rotate-[6deg] rounded-2xl border border-[#b8aa9b] bg-[#bfb2a5]/35 xl:block" />

      {/* MOUSE */}
      <div className="pointer-events-none absolute bottom-[52px] right-[17%] hidden h-8 w-12 rotate-[6deg] rounded-[50%] bg-[#efede9] shadow-lg xl:block" />

      {/* TAZA */}
      <div className="pointer-events-none absolute bottom-10 right-[6%] hidden xl:flex">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
          <Coffee
            size={22}
            className="text-[#756b64]"
          />

          <div className="absolute -right-3 top-3 h-7 w-6 rounded-r-full border-4 border-l-0 border-white" />
        </div>
      </div>
    </div>
  );
}

export default OfficeScene;
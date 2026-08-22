import type {
  ReactNode,
} from "react";

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
    <div className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#d9d3ca]">
      {/* PARED */}

      <div className="absolute inset-x-0 top-0 h-[70%] bg-[#ececeb]" />

      {/* GRILLA DECORATIVA */}

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/40" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/40" />

        <div className="absolute left-3/4 top-0 h-full w-px bg-white/40" />

        <div className="absolute inset-x-0 top-[26%] h-px bg-white/40" />

        <div className="absolute inset-x-0 top-[70%] h-px bg-white/25" />
      </div>

      {/* ESCRITORIO */}

      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[#d1cbc2]" />

      {/* CONTENIDO */}

      <div className="relative z-10 mx-auto min-h-[calc(100svh-5rem)] max-w-[1660px] px-5 pb-28 pt-7 sm:px-6 lg:px-8 lg:pt-9 2xl:max-w-[1880px] 2xl:px-12">
        <div className="grid w-full items-start gap-7 xl:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.72fr)] 2xl:gap-10">
          {/* MONITOR */}

          <div className="min-w-0">
            {monitor}
          </div>

          {/* FOLLETO */}

          <div className="min-w-0">
            {brochure}
          </div>
        </div>
      </div>

      {/* SOBRE NOSOTROS */}

      <div className="pointer-events-none absolute bottom-6 left-[6%] hidden rotate-[-6deg] lg:block 2xl:left-[8%]">
        <div className="w-52 rounded-2xl border border-white/70 bg-white/75 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm 2xl:w-56 2xl:px-6 2xl:py-5">
          <p className="font-serif text-lg font-black uppercase leading-tight tracking-wide text-[#211a18] 2xl:text-xl">
            Sobre
            <br />
            nosotros
          </p>

          <div className="mt-4 flex gap-4 text-[#8d1430]">
            <Sparkles size={17} />

            <PenLine size={17} />

            <MousePointer2
              size={17}
            />

            <Sparkles size={17} />
          </div>
        </div>
      </div>

      {/* TECLADO */}

      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 xl:block">
        <div className="relative h-14 w-64 rotate-[2deg] rounded-xl bg-[#252321] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.28)] 2xl:h-16 2xl:w-72">
          <div className="grid h-full grid-cols-12 gap-1">
            {Array.from({
              length: 36,
            }).map((_, index) => (
              <span
                key={index}
                className="rounded-[3px] bg-[#e8e2d9] shadow-inner"
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOUSEPAD */}

      <div className="pointer-events-none absolute bottom-7 right-[13%] hidden h-14 w-24 rotate-[6deg] rounded-2xl border border-[#b8aa9b] bg-[#bfb2a5]/35 xl:block 2xl:h-16 2xl:w-28" />

      {/* MOUSE */}

      <div className="pointer-events-none absolute bottom-[46px] right-[16%] hidden h-7 w-11 rotate-[6deg] rounded-[50%] bg-[#efede9] shadow-lg xl:block 2xl:bottom-[52px] 2xl:h-8 2xl:w-12" />

      {/* TAZA */}

      <div className="pointer-events-none absolute bottom-9 right-[5%] hidden xl:flex">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] 2xl:h-14 2xl:w-14">
          <Coffee
            size={20}
            className="text-[#756b64]"
          />

          <div className="absolute -right-3 top-3 h-6 w-5 rounded-r-full border-4 border-l-0 border-white 2xl:h-7 2xl:w-6" />
        </div>
      </div>
    </div>
  );
}

export default OfficeScene;
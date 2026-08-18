import type { ReactNode } from "react";
import { Coffee, MousePointer2, PenLine, Sparkles, } from "lucide-react";

type Props = {
  monitor: ReactNode;
  brochure: ReactNode;
};

function OfficeScene({
  monitor,
  brochure,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#edf0ee] shadow-[0_40px_100px_rgba(63,48,36,0.16)]">
      {/* =========================
          FONDO DE OFICINA
      ========================== */}

      <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden">
        {/* Luz general */}
        <div className="absolute inset-0 bg-linear-to-b from-[#f8fbfb] via-[#edf1ef] to-[#e4e5e1]" />

        {/* Ventanales */}
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[7%] top-0 h-full w-px bg-white/90" />
          <div className="absolute left-[24%] top-0 h-full w-px bg-white/90" />
          <div className="absolute left-[42%] top-0 h-full w-px bg-white/90" />
          <div className="absolute left-[61%] top-0 h-full w-px bg-white/90" />
          <div className="absolute left-[80%] top-0 h-full w-px bg-white/90" />

          <div className="absolute left-0 top-[32%] h-px w-full bg-white/80" />
        </div>

        {/* Destellos de luz */}
        <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute right-[10%] top-[8%] h-72 w-72 rounded-full bg-[#d9e5e2]/50 blur-3xl" />

        {/* Siluetas difuminadas de oficina */}
        <div className="absolute bottom-0 left-[4%] h-44 w-20 rounded-t-[4rem] bg-[#cfd6d3]/35 blur-sm" />

        <div className="absolute bottom-0 right-[3%] h-56 w-28 rounded-t-[5rem] bg-[#c9d0cd]/30 blur-sm" />
      </div>

      {/* =========================
          MESA
      ========================== */}

      <div className="absolute inset-x-0 bottom-0 h-[31%] bg-linear-to-b from-[#ded9d1] via-[#d1cbc2] to-[#c4bdb3]" />

      <div className="absolute inset-x-0 bottom-[30.5%] h-px bg-white/70" />

      {/* Sombra general sobre escritorio */}
      <div className="absolute bottom-[8%] left-[12%] h-16 w-[58%] rounded-[50%] bg-black/15 blur-2xl" />

      {/* =========================
          CONTENIDO PRINCIPAL
      ========================== */}

      <div className="relative z-10 grid min-h-220 items-start gap-8 px-5 pb-36 pt-12 sm:px-8 lg:px-10 xl:grid-cols-[1.65fr_0.7fr] xl:gap-10 xl:pt-16">
        <div className="self-start">
          {monitor}
        </div>

        <div className="relative self-start xl:pt-2">
          {/* sombra detrás del folleto */}
          <div className="absolute inset-x-7 -bottom-3 top-10 -z-10 rounded-4xl bg-black/10 blur-xl" />

          {brochure}
        </div>
      </div>

      {/* =========================
          ELEMENTOS SOBRE LA MESA
      ========================== */}

      {/* Placa "Sobre nosotros" */}
      <div className="absolute bottom-9 left-[4%] hidden rotate-[-4deg] lg:block">
        <div className="w-64 rounded-xl border border-white/70 bg-white/65 px-7 py-5 shadow-[0_15px_35px_rgba(0,0,0,0.14)] backdrop-blur-sm">
          <p className="font-serif text-lg font-black uppercase tracking-wide text-[#211a18]">
            Sobre nosotros
          </p>

          <div className="mt-4 grid grid-cols-4 gap-3 text-[#74152b]">
            <Sparkles size={19} />
            <PenLine size={19} />
            <MousePointer2 size={19} />
            <Sparkles size={19} />
          </div>
        </div>
      </div>

      {/* Teclado decorativo */}
      <div className="absolute bottom-10 left-1/2 hidden translate-x-[-38%] xl:block">
        <div className="relative h-16 w-80 rotate-2 rounded-xl bg-[#252321] p-2 shadow-[0_16px_30px_rgba(0,0,0,0.28)]">
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

      {/* Mouse pad */}
      <div className="absolute bottom-8 right-[14%] hidden h-20 w-40 rotate-[5deg] rounded-2xl border border-[#aa9d91] bg-[#9e8c7d]/30 xl:block" />

      {/* Mouse */}
      <div className="absolute bottom-13 right-[17%] hidden h-9 w-14 rotate-[8deg] rounded-[50%] bg-[#efede9] shadow-lg xl:block" />

      {/* Taza */}
      <div className="absolute bottom-20 right-[5%] hidden xl:flex">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
          <Coffee
            size={25}
            className="text-[#756b64]"
          />

          <div className="absolute -right-4 top-4 h-8 w-7 rounded-r-full border-4 border-l-0 border-white" />
        </div>
      </div>
    </div>
  );
}

export default OfficeScene;
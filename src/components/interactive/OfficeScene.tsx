import type {
  ReactNode,
} from "react";

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
      {/* =====================================================
          PARED
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 h-[70%] bg-[#ececeb]" />

      {/* Grilla sutil del fondo */}

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/40" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/40" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/40" />

        <div className="absolute inset-x-0 top-[26%] h-px bg-white/40" />
        <div className="absolute inset-x-0 top-[70%] h-px bg-white/25" />
      </div>

      {/* =====================================================
          ESCRITORIO
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[#d1cbc2]" />

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <div className="relative z-10 mx-auto min-h-[calc(100svh-5rem)] max-w-[1660px] px-5 pb-28 pt-7 sm:px-6 lg:px-8 lg:pt-9 2xl:max-w-[1880px] 2xl:px-12">
        <div className="grid w-full items-start gap-7 xl:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.72fr)] 2xl:gap-10">
          {/* Monitor */}

          <div className="relative min-w-0">
            {monitor}

            {/* Botones físicos / detalles del monitor */}
            <MonitorHardwareButtons />

            {/* Refuerzo visual del pie/base */}
            <div className="pointer-events-none absolute -bottom-8 left-[38%] hidden -translate-x-1/2 xl:block 2xl:-bottom-10">
              <MonitorStandEnhancer />
            </div>
          </div>

          {/* Brochure */}

          <div className="min-w-0">
            {brochure}
          </div>
        </div>
      </div>

      {/* =====================================================
          TECLADO + MOUSE MÁS JUNTOS
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-5 left-[36%] z-20 hidden -translate-x-1/2 items-end gap-5 xl:flex 2xl:bottom-7 2xl:gap-6 2xl:left-[37%]">
        <DeskKeyboard />
        <DeskMouse />
      </div>

      {/* =====================================================
          TAZA / COFFEE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-7 right-[4.5%] z-20 hidden xl:block 2xl:bottom-9 2xl:right-[5%]">
        <DeskCoffee />
      </div>
    </div>
  );
}

/* =========================================================
   TECLADO
   ========================================================= */

function DeskKeyboard() {
  const rows = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.35],
    [1.55, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.55],
    [1.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.05],
    [1.2, 1.2, 1.2, 5.8, 1.2, 1.2, 1.2],
  ];

  return (
    <div
      className="
        relative
        w-[310px]
        rotate-[1deg]
        rounded-[14px]
        bg-[#262624]
        px-[9px]
        pb-[10px]
        pt-[9px]
        shadow-[0_18px_30px_rgba(0,0,0,0.28)]

        2xl:w-[350px]
        2xl:rounded-[16px]
        2xl:px-[10px]
        2xl:pb-[11px]
        2xl:pt-[10px]
      "
    >
      <div className="absolute inset-x-5 top-[4px] h-px bg-white/10" />

      <div className="space-y-[4px] 2xl:space-y-[5px]">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex h-[8px] gap-[3px] 2xl:h-[9px] 2xl:gap-[4px]"
          >
            {row.map((width, keyIndex) => {
              const isDarkKey =
                rowIndex === 0 ||
                keyIndex === 0 ||
                keyIndex === row.length - 1;

              return (
                <span
                  key={`${rowIndex}-${keyIndex}`}
                  style={{
                    flex: width,
                  }}
                  className={`
                    rounded-[2px]
                    border
                    shadow-[inset_0_-1px_1px_rgba(0,0,0,0.25)]

                    ${
                      isDarkKey
                        ? "border-[#5e5a54] bg-[#78736d]"
                        : "border-[#d8d1c8] bg-[#efe9e0]"
                    }
                  `}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-[12%] -bottom-3 h-3 rounded-[50%] bg-black/20 blur-md" />
    </div>
  );
}

/* =========================================================
   MOUSE + PAD
   ========================================================= */

function DeskMouse() {
  return (
    <div className="relative h-[86px] w-[155px] rotate-[3deg] 2xl:h-[96px] 2xl:w-[168px]">
      {/* mousepad más oscuro */}
      <div className="absolute inset-0 rounded-[18px] border border-[#6f675f] bg-linear-to-br from-[#5e5650] to-[#433d38] shadow-[0_12px_24px_rgba(0,0,0,0.16)]" />

      {/* costura/borde del pad */}
      <div className="absolute inset-[6px] rounded-[14px] border border-white/10" />

      {/* mouse */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[46px]
          w-[70px]
          -translate-x-1/2
          -translate-y-1/2
          -rotate-[4deg]
          overflow-hidden
          rounded-[52%_52%_46%_46%]
          border
          border-[#d8d4ce]
          bg-linear-to-b
          from-[#faf9f6]
          via-[#efede8]
          to-[#dcd9d3]
          shadow-[0_8px_14px_rgba(0,0,0,0.2)]

          2xl:h-[52px]
          2xl:w-[78px]
        "
      >
        <div className="absolute left-1/2 top-0 h-[20px] w-px -translate-x-1/2 bg-[#d0ccc6]" />
        <div className="absolute left-1/2 top-[9px] h-[10px] w-[4px] -translate-x-1/2 rounded-full bg-[#a59f97] shadow-inner" />
        <div className="absolute bottom-0 left-1/2 h-[22px] w-px -translate-x-1/2 bg-white/25" />
        <div className="absolute left-2 top-2 h-4 w-8 rounded-full bg-white/45 blur-[2px]" />
      </div>

      <div className="absolute bottom-[12px] left-1/2 h-3 w-16 -translate-x-1/2 rounded-[50%] bg-black/18 blur-md" />
    </div>
  );
}

/* =========================================================
   TAZA DE CAFÉ
   ========================================================= */

function DeskCoffee() {
  return (
    <div className="relative h-[86px] w-[92px] 2xl:h-[96px] 2xl:w-[102px]">
      {/* sombra general */}
      <div className="absolute bottom-2 left-1/2 h-4 w-16 -translate-x-1/2 rounded-[50%] bg-black/15 blur-md" />

      {/* plato */}
      <div className="absolute bottom-0 left-1/2 h-[18px] w-[78px] -translate-x-1/2 rounded-[50%] bg-[#f6f5f2] shadow-[0_6px_10px_rgba(0,0,0,0.12)] 2xl:h-[20px] 2xl:w-[86px]" />
      <div className="absolute bottom-[5px] left-1/2 h-[8px] w-[56px] -translate-x-1/2 rounded-[50%] bg-[#e9e6e1]" />

      {/* taza */}
      <div className="absolute bottom-[10px] left-1/2 h-[52px] w-[58px] -translate-x-1/2 rounded-b-[22px] rounded-t-[18px] border border-[#ebe8e2] bg-linear-to-b from-white via-[#f8f7f4] to-[#e7e3de] shadow-[0_12px_20px_rgba(0,0,0,0.14)] 2xl:h-[58px] 2xl:w-[64px]">
        {/* café */}
        <div className="absolute left-1/2 top-[6px] h-[18px] w-[42px] -translate-x-1/2 rounded-[50%] bg-[#5a3525] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] 2xl:h-[20px] 2xl:w-[46px]" />

        {/* brillo café */}
        <div className="absolute left-[56%] top-[10px] h-[5px] w-[12px] rounded-full bg-white/20 blur-[1px]" />
      </div>

      {/* asa */}
      <div className="absolute bottom-[24px] right-[8px] h-[24px] w-[18px] rounded-r-full border-[4px] border-l-0 border-[#f4f2ee] 2xl:bottom-[26px] 2xl:right-[9px] 2xl:h-[26px] 2xl:w-[20px]" />

      {/* vapor */}
      <span className="absolute left-[36px] top-[2px] h-[20px] w-[10px] rounded-full border border-white/0 border-l-white/50 border-r-white/0 border-t-white/0 border-b-white/0 opacity-70 blur-[0.5px] 2xl:left-[40px]" />
      <span className="absolute left-[46px] top-0 h-[24px] w-[10px] rounded-full border border-white/0 border-l-white/60 border-r-white/0 border-t-white/0 border-b-white/0 opacity-60 blur-[0.5px] 2xl:left-[51px]" />
      <span className="absolute left-[56px] top-[4px] h-[18px] w-[10px] rounded-full border border-white/0 border-l-white/45 border-r-white/0 border-t-white/0 border-b-white/0 opacity-55 blur-[0.5px] 2xl:left-[61px]" />
    </div>
  );
}

/* =========================================================
   REFUERZO VISUAL DEL PIE DEL MONITOR
   ========================================================= */

function MonitorStandEnhancer() {
  return (
    <div className="relative h-[78px] w-[240px] 2xl:h-[88px] 2xl:w-[270px]">
      {/* sombra base */}
      <div className="absolute bottom-0 left-1/2 h-[16px] w-[145px] -translate-x-1/2 rounded-[50%] bg-black/16 blur-md 2xl:h-[18px] 2xl:w-[165px]" />

      {/* pedestal superior */}
      <div className="absolute left-1/2 top-0 h-[18px] w-[64px] -translate-x-1/2 rounded-t-[8px] bg-linear-to-b from-[#d8d8d6] to-[#b7b6b5] shadow-[0_4px_8px_rgba(0,0,0,0.1)]" />

      {/* cuello */}
      <div className="absolute left-1/2 top-[12px] h-[34px] w-[32px] -translate-x-1/2 bg-linear-to-b from-[#cececc] via-[#b4b3b1] to-[#979694] [clip-path:polygon(30%_0%,70%_0%,100%_100%,0%_100%)]" />

      {/* base */}
      <div className="absolute bottom-[10px] left-1/2 h-[20px] w-[130px] -translate-x-1/2 rounded-[50%] bg-linear-to-b from-[#c9c7c4] via-[#afada9] to-[#94928f] shadow-[0_6px_12px_rgba(0,0,0,0.12)] 2xl:h-[22px] 2xl:w-[150px]" />

      {/* brillo */}
      <div className="absolute bottom-[20px] left-1/2 h-[7px] w-[74px] -translate-x-1/2 rounded-full bg-white/25 blur-[1px]" />
    </div>
  );
}

function MonitorHardwareButtons() {
  return (
    <div className="pointer-events-none absolute bottom-[86px] right-[9.5%] z-20 hidden items-center gap-2 xl:flex 2xl:bottom-[96px] 2xl:right-[10%]">
      {/* LED */}
      <span className="h-[4px] w-[4px] rounded-full bg-[#8dd8ff] shadow-[0_0_8px_rgba(141,216,255,0.9)] 2xl:h-[5px] 2xl:w-[5px]" />

      {/* Botones secundarios */}
      <span className="h-[6px] w-[6px] rounded-full border border-[#1f1f1f] bg-[#3b3b3b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)] 2xl:h-[7px] 2xl:w-[7px]" />
      <span className="h-[6px] w-[6px] rounded-full border border-[#1f1f1f] bg-[#3b3b3b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)] 2xl:h-[7px] 2xl:w-[7px]" />
      <span className="h-[6px] w-[6px] rounded-full border border-[#1f1f1f] bg-[#3b3b3b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)] 2xl:h-[7px] 2xl:w-[7px]" />

      {/* Power */}
      <span className="flex h-[9px] w-[9px] items-center justify-center rounded-full border border-[#1f1f1f] bg-[#2f2f2f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.35)] 2xl:h-[10px] 2xl:w-[10px]">
        <span className="h-[4px] w-[4px] rounded-full bg-[#5f5f5f] 2xl:h-[5px] 2xl:w-[5px]" />
      </span>
    </div>
  );
}

export default OfficeScene;
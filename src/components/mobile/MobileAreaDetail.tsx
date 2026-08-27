import {
  BadgeCheck,
  Layers3,
} from "lucide-react";

import type {
  Module,
} from "../../types/section";

type Props = {
  area: Module;
};

function MobileAreaDetail({
  area,
}: Props) {
  return (
    <section
      id="area-detail-mobile"
      className="scroll-mt-20 px-5 pt-5"
    >
      <article className="overflow-hidden rounded-2xl border border-[#debfc0] bg-white shadow-sm">
        {/* Imagen */}

        <div className="relative h-[190px] overflow-hidden bg-[#5e0016]">
          {area.image ? (
            <>
              <img
                src={area.image}
                alt={
                  area.imageAlt ??
                  area.title
                }
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{
                  objectPosition:
                    area.imagePosition ??
                    "center",
                }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#40000c]/70 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-4">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/65">
                  Área ggmm
                </p>

                <h3 className="mt-1 text-xl font-bold leading-tight text-white">
                  {area.title}
                </h3>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <img
                src="/images/ggmmLogo.webp"
                alt="GGMM - Gestión Gubernamental Municipal"
                width={700}
                height={303}
                loading="lazy"
                decoding="async"
                className="max-h-16 max-w-[190px] object-contain brightness-0 invert"
              />

              <p className="mt-4 text-sm font-bold">
                {area.title}
              </p>
            </div>
          )}
        </div>

        {/* Contenido */}

        <div className="p-5">
          <p className="text-[13px] leading-6 text-[#574142]">
            {area.description}
          </p>

          {/* Módulos */}

          <div className="mt-6">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#801628]">
              Módulos
            </p>

            <div className="mt-3 space-y-2">
              {area.modules.map(
                (module) => (
                  <div
                    key={module}
                    className="flex items-start gap-3 rounded-xl bg-[#fcf2ee] px-3 py-3"
                  >
                    <Layers3
                      size={16}
                      className="mt-0.5 shrink-0 text-[#a83543]"
                    />

                    <span className="text-[12px] font-semibold leading-5 text-[#3f3532]">
                      {module}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Beneficios */}

          <div className="mt-6">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#801628]">
              Beneficios
            </p>

            <div className="mt-3 space-y-3">
              {area.benefits.map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-[#a83543]"
                    />

                    <p className="text-[12px] leading-5 text-[#574142]">
                      {benefit}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {area.notes &&
            area.notes.length >
              0 && (
              <div className="mt-5 border-t border-[#e8d9d7] pt-4">
                {area.notes.map(
                  (note) => (
                    <p
                      key={note}
                      className="text-[10px] italic leading-5 text-[#8a7171]"
                    >
                      * {note}
                    </p>
                  ),
                )}
              </div>
            )}
        </div>
      </article>
    </section>
  );
}

export default MobileAreaDetail;
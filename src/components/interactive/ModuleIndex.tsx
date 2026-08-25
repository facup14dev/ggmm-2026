import {
  Calculator,
  Gavel,
  HandHeart,
  Landmark,
  MapPinned,
  MonitorSmartphone,
  Truck,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import type {
  Module,
  ModuleId,
} from "../../types/section";

type Props = {
  modules: Module[];
  activeModule: ModuleId | null;
  onChange: (module: ModuleId) => void;
  compact?: boolean;
};

const icons: Record<
  ModuleId,
  LucideIcon
> = {
  administracionTributaria:
    Landmark,

  administracionFinanciera:
    WalletCards,

  administracionContable:
    Calculator,

  administracionCatastral:
    MapPinned,

  ayudasSociales:
    HandHeart,

  autogestion:
    MonitorSmartphone,

  administracionVehicular:
    Truck,

  rrhh:
    UsersRound,

  tribunalFaltas:
    Gavel,
};

function ModuleIndex({
  modules,
  activeModule,
  onChange,
}: Props) {
  return (
    <div className="
      h-[132px]
      border-t
      border-[#ddd4c7]
      bg-[#fbf8f1]

      [@media(max-height:940px)]:h-[116px]
    ">
      {/* TÍTULO */}

      <div className="
        px-4
        pt-3
        text-center

        [@media(max-height:940px)]:pt-2
      ">
        <p className="
          font-serif
          text-xl
          font-black
          uppercase
          tracking-wide
          text-[#211a18]

          [@media(max-height:940px)]:text-lg
        ">
          Áreas y Módulos
        </p>

        <p className="
          mt-0.5
          text-[10px]
          text-[#85786e]

          [@media(max-height:940px)]:text-[9px]
        ">
          Seleccioná un área para conocer sus módulos
        </p>
      </div>

      {/* =====================================
          9 COLUMNAS FIJAS
      ====================================== */}

      <div className="
        grid
        h-[86px]
        grid-cols-9
        items-stretch
        px-3
        py-2

        [@media(max-height:940px)]:h-[74px]
        [@media(max-height:940px)]:py-1.5
      ">
        {modules.map((module) => {
          const Icon =
            icons[module.id];

          const isActive =
            activeModule ===
            module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() =>
                onChange(module.id)
              }
              aria-pressed={isActive}
              className={`
                group
                relative
                flex
                min-w-0
                flex-col
                items-center
                border-r
                border-[#e2d9cd]
                px-1
                text-center
                transition

                last:border-r-0

                ${
                  isActive
                    ? "text-[#8d1430]"
                    : "text-[#403834] hover:text-[#8d1430]"
                }
              `}
            >
              {/* ACTIVO */}

              <span
                className={`
                  absolute
                  inset-x-3
                  -top-2
                  h-0.5
                  rounded-full
                  transition

                  ${
                    isActive
                      ? "bg-[#8d1430]"
                      : "bg-transparent"
                  }
                `}
              />

              {/* ICONO */}

              <div
                className={`
                  mx-auto
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-200

                  [@media(max-height:940px)]:h-8
                  [@media(max-height:940px)]:w-8

                  ${
                    isActive
                      ? "scale-105 bg-[#8d1430] text-white shadow-md shadow-[#8d1430]/20"
                      : "bg-[#eee6db] text-[#8d1430] group-hover:-translate-y-0.5 group-hover:bg-[#e4d7c8]"
                  }
                `}
              >
                <Icon
                  size={17}
                  className="
                    [@media(max-height:940px)]:h-4
                    [@media(max-height:940px)]:w-4
                  "
                />
              </div>

              {/* LABEL */}

              <p
                className={`
                  mt-2
                  max-w-full
                  text-[8.5px]
                  font-bold
                  leading-[1.15]

                  [@media(max-height:940px)]:mt-1.5
                  [@media(max-height:940px)]:text-[8px]

                  ${
                    isActive
                      ? "text-[#8d1430]"
                      : ""
                  }
                `}
              >
                {module.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModuleIndex;
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
  areas: Module[];
  activeArea: ModuleId | null;
  onSelect: (
    id: ModuleId,
  ) => void;
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

function MobileAreaIndex({
  areas,
  activeArea,
  onSelect,
}: Props) {
  return (
    <section
      id="modulos-mobile"
      className="scroll-mt-20 px-5 pt-8"
    >
      <div className="rounded-2xl border border-[#debfc0] bg-white px-4 py-6 shadow-sm">
        <div className="text-center">
          <h2 className="text-[23px] font-bold tracking-[-0.02em] text-[#1f1b19]">
            Áreas y Módulos
          </h2>

          <p className="mt-1 text-xs leading-5 text-[#574142]">
            Seleccioná un área
            para conocer sus
            módulos y beneficios
          </p>
        </div>

        {/* 3 × 3 */}

        <div className="mt-6 grid grid-cols-3 gap-x-3 gap-y-6">
          {areas.map((area) => {
            const Icon =
              icons[area.id];

            const isActive =
              activeArea ===
              area.id;

            return (
              <button
                key={area.id}
                type="button"
                onClick={() =>
                  onSelect(area.id)
                }
                aria-pressed={
                  isActive
                }
                className="group flex min-w-0 flex-col items-center"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                    isActive
                      ? "scale-105 bg-[#801628] text-white shadow-md"
                      : "bg-[#f6ece8] text-[#a83543] group-active:scale-95"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <span
                  className={`mt-2 max-w-[88px] text-center text-[10px] font-medium leading-[1.25] ${
                    isActive
                      ? "font-bold text-[#801628]"
                      : "text-[#574142]"
                  }`}
                >
                  {area.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MobileAreaIndex;
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

const icons: Record<ModuleId, LucideIcon> = {
  administracionTributaria: Landmark,
  administracionFinanciera: WalletCards,
  administracionContable: Calculator,
  administracionCatastral: MapPinned,
  ayudasSociales: HandHeart,
  autogestion: MonitorSmartphone,
  administracionVehicular: Truck,
  rrhh: UsersRound,
  tribunalFaltas: Gavel,
};

function ModuleIndex({
  modules,
  activeModule,
  onChange,
}: Props) {
  return (
    <div className="h-[142px] border-t border-[#ddd4c7] bg-[#fbf8f1]">
      <div className="px-4 pt-3 text-center">
        <p className="font-serif text-xl font-black uppercase tracking-wide text-[#211a18]">
          Áreas y módulos
        </p>

        <p className="mt-0.5 text-[10px] text-[#85786e]">
          Seleccioná un área para conocer sus módulos
        </p>
      </div>

      <div className="flex h-[92px] items-stretch overflow-x-auto px-4 py-3">
        {modules.map((module) => {
          const Icon = icons[module.id];
          const isActive =
            activeModule === module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() =>
                onChange(module.id)
              }
              aria-pressed={isActive}
              className={`group relative min-w-[96px] 2xl:min-w-[108px] flex-1 border-r border-[#e2d9cd] px-1.5 text-center transition last:border-r-0 ${
                isActive
                  ? "text-[#8d1430]"
                  : "text-[#403834] hover:text-[#8d1430]"
              }`}
            >
              {/* Indicador superior */}
              <span
                className={`absolute inset-x-5 -top-3 h-0.5 rounded-full transition ${
                  isActive
                    ? "bg-[#8d1430]"
                    : "bg-transparent"
                }`}
              />

              <div
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "scale-105 bg-[#8d1430] text-white shadow-md shadow-[#8d1430]/20"
                    : "bg-[#eee6db] text-[#8d1430] group-hover:-translate-y-0.5 group-hover:bg-[#e4d7c8]"
                }`}
              >
                <Icon size={17} />
              </div>

              <p
                className={`mx-auto mt-2 max-w-[88px] text-[9px] 2xl:text-[10px] font-bold leading-[1.15] ${
                  isActive
                    ? "text-[#8d1430]"
                    : ""
                }`}
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
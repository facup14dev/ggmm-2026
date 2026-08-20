import {
  BarChart3,
  BriefcaseBusiness,
  CarFront,
  HeartHandshake,
  Landmark,
  Map,
  MapPinned,
  Receipt,
  Users,
  Wallet,
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

const icons = {
  directivos: BarChart3,
  administracionTributaria: Landmark,
  administracionFinanciera: Wallet,
  administracionContable: Receipt,
  catastro: Map,
  accionSocial: HeartHandshake,
  atencionVecino: Users,
  turismo: MapPinned,
  rrhh: BriefcaseBusiness,
  rodados: CarFront,
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
          Índice interactivo
        </p>

        <p className="mt-0.5 text-[10px] text-[#85786e]">
          Seleccioná un módulo para conocer más
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
              className={`group relative min-w-[84px] flex-1 border-r border-[#e2d9cd] px-1.5 text-center transition last:border-r-0 ${
                isActive
                  ? "text-[#8d1430]"
                  : "text-[#403834] hover:text-[#8d1430]"
              }`}
            >
              {/* indicador superior */}
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
                <Icon size={16} />
              </div>

              <p
                className={`mx-auto mt-2 max-w-[78px] text-[9px] font-bold leading-[1.15] ${
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
import { Banknote, BriefcaseBusiness, Building2, Landmark, Map, Scale, } from "lucide-react";

import type { Module, ModuleId, } from "../../types/section";

type Props = {
  modules: Module[];
  activeModule: ModuleId | null;
  onChange: (module: ModuleId) => void;
};

const icons = {
  catastro: Map,
  rrhh: BriefcaseBusiness,
  rentas: Banknote,
  tribunal: Scale,
  servicios: Building2,
  recaudacion: Landmark,
};

function ModuleIndex({
  modules,
  activeModule,
  onChange,
}: Props) {
  return (
    <div className="border-t border-[#ddd4c7] bg-[#fbf8f1]">
      <div className="px-6 pt-5 text-center">
        <p className="font-serif text-xl font-black uppercase tracking-wide text-[#211a18]">
          Índice interactivo
        </p>

        <p className="mt-1 text-xs text-[#85786e]">
          Seleccioná un módulo para conocer más
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 py-5 sm:px-6">
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
              className={`group min-w-26.25 flex-1 border-r border-[#ddd4c7] px-3 py-3 text-center transition last:border-r-0 ${
                isActive
                  ? "text-[#74152b]"
                  : "text-[#403834] hover:text-[#74152b]"
              }`}
            >
              <div
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full transition ${
                  isActive
                    ? "bg-[#74152b] text-white"
                    : "bg-[#eee6db] text-[#74152b] group-hover:bg-[#e1d5c5]"
                }`}
              >
                <Icon size={20} />
              </div>

              <p className="mt-2 text-xs font-bold">
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
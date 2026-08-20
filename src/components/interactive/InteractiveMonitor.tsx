import {
  useMemo,
  useState,
} from "react";

import {
  modules,
  sections,
} from "../../data/sections";

import type {
  ModuleId,
  SectionId,
} from "../../types/section";

import BrochurePanel from "./BrochurePanel";
import ModuleIndex from "./ModuleIndex";
import MonitorNavigation from "./MonitorNavigation";
import MonitorScreen from "./MonitorScreen";
import OfficeScene from "./OfficeScene";

function InteractiveMonitor() {
  const [activeSection, setActiveSection] =
    useState<SectionId>("inicio");

  const [activeModule, setActiveModule] =
    useState<ModuleId | null>(null);

  const currentSection = useMemo(
    () =>
      sections.find(
        (section) => section.id === activeSection,
      ) ?? sections[0],
    [activeSection],
  );

  const currentModule = useMemo(
    () =>
      modules.find(
        (module) => module.id === activeModule,
      ) ?? null,
    [activeModule],
  );

  const handleSectionChange = (
    sectionId: SectionId,
  ) => {
    setActiveSection(sectionId);

    /*
     * Cuando cambia una sección superior,
     * volvemos al modo sección.
     */
    setActiveModule(null);
  };

  const handleModuleChange = (
    moduleId: ModuleId,
  ) => {
    setActiveModule(moduleId);
  };

  const monitor = (
    <div className="relative mx-auto w-full max-w-[1050px]">
      {/* Sombra */}
      <div className="absolute inset-x-[10%] bottom-2 h-16 rounded-[50%] bg-black/20 blur-2xl" />

      {/* MARCO */}
      <div className="relative rounded-[2.4rem] bg-[#0f1114] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.32)] lg:p-5">
        {/* Cámara */}
        <div className="absolute left-1/2 top-[8px] z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />

        {/* PANTALLA */}
        <div className="relative flex h-[650px] flex-col overflow-hidden rounded-[1.8rem] border border-white/5 bg-[#f7f2e8] xl:h-[660px]">
          
          {/* Header interno */}
          {/* <div className="flex shrink-0 items-center justify-between border-b border-[#d9d0c3] bg-[#fbf8f2] px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-black tracking-[-0.05em] text-[#b62037]">
                gm
              </span>

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a7f77] md:block">
                Gestión Gubernamental Municipal
              </span>
            </div>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a7f77] sm:block">
              Plataforma integral
            </span>
          </div> */}

          {/* Navegación */}
          {/* <div className="shrink-0">
            <MonitorNavigation
              sections={sections}
              activeSection={activeSection}
              onChange={handleSectionChange}
            />
          </div> */}

          {/* 
            ÁREA PRINCIPAL FIJA.
            Cambia el contenido, no cambia la altura.
          */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <MonitorScreen
              key={`${activeSection}-${activeModule ?? "section"}`}
              section={currentSection}
              activeModule={currentModule}
              compact
            />
          </div>

          {/* Índice fijo abajo */}
          <div className="shrink-0">
            <ModuleIndex
              modules={modules}
              activeModule={activeModule}
              onChange={handleModuleChange}
              compact
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-transparent" />
        </div>
      </div>

      {/* Soporte */}
      <div className="relative mx-auto h-16 w-36">
        <div className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 bg-linear-to-b from-[#b6b6b6] via-[#969696] to-[#777] [clip-path:polygon(22%_0,78%_0,100%_100%,0_100%)]" />
      </div>

      {/* Base */}
      <div className="mx-auto -mt-1 h-4 w-64 rounded-[50%] bg-[#888] shadow-[0_12px_24px_rgba(0,0,0,0.25)]" />
    </div>
  );

  const brochure = (
    /*
     * Misma altura exterior que la zona del monitor.
     * No cambia por contenido.
     */
    <div className="h-[716px] xl:h-[726px]">
      <BrochurePanel
        key={`${activeSection}-${activeModule ?? "section"}`}
        section={currentSection}
        activeModule={currentModule}
        compact
      />
    </div>
  );

  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#d9d3ca]"
    >
      <OfficeScene
        monitor={monitor}
        brochure={brochure}
      />
    </section>
  );
}

export default InteractiveMonitor;
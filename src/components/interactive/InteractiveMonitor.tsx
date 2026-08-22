import {
  useMemo,
  useState,
} from "react";

import {
  modules,
  moreSections,
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
      [...sections, ...moreSections].find(
        (section) =>
          section.id === activeSection,
      ) ?? sections[0],
    [activeSection],
  );

  const currentModule = useMemo(
    () =>
      modules.find(
        (module) =>
          module.id === activeModule,
      ) ?? null,
    [activeModule],
  );

  const handleSectionChange = (
    sectionId: SectionId,
  ) => {
    setActiveSection(sectionId);
    setActiveModule(null);
  };

  const handleModuleChange = (
    moduleId: ModuleId,
  ) => {
    setActiveSection("areas");
    setActiveModule(moduleId);
  };

  const handleExploreModules = () => {
    setActiveSection("areas");
    setActiveModule(null);
  };

  const monitor = (
    <div className="relative mx-auto w-full max-w-[1050px] 2xl:max-w-[1180px]">
      {/* Sombra */}

      <div className="absolute inset-x-[10%] bottom-2 h-16 rounded-[50%] bg-black/20 blur-2xl" />

      {/* MARCO */}

      <div className="relative rounded-[2.4rem] bg-[#0f1114] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
        {/* Cámara */}

        <div className="absolute left-1/2 top-[8px] z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />

        {/* PANTALLA */}

        <div className="relative flex h-[var(--ggmm-monitor-screen-height)] flex-col overflow-hidden rounded-[1.8rem] border border-white/5 bg-[#f7f2e8]">
          {/* Navegación */}

          <MonitorNavigation
            sections={sections}
            moreSections={
              moreSections
            }
            activeSection={
              activeSection
            }
            onChange={
              handleSectionChange
            }
          />

          {/* Contenido */}

          <div className="min-h-0 flex-1 overflow-hidden">
            <MonitorScreen
              section={
                currentSection
              }
              activeModule={
                currentModule
              }
              onExploreModules={
                handleExploreModules
              }
              compact
            />
          </div>

          {/* Áreas */}

          <div className="shrink-0">
            <ModuleIndex
              modules={modules}
              activeModule={
                activeModule
              }
              onChange={
                handleModuleChange
              }
              compact
            />
          </div>

          {/* Reflejo */}

          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-transparent" />
        </div>
      </div>

      {/* SOPORTE */}

      <div className="relative mx-auto h-16 w-36">
        <div className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 bg-linear-to-b from-[#b6b6b6] via-[#969696] to-[#777] [clip-path:polygon(22%_0,78%_0,100%_100%,0_100%)]" />
      </div>

      {/* BASE */}

      <div className="mx-auto -mt-1 h-4 w-64 rounded-[50%] bg-[#888] shadow-[0_12px_24px_rgba(0,0,0,0.25)]" />

      <div className="mx-auto mt-1 h-3 w-72 rounded-[50%] bg-black/10 blur-md" />
    </div>
  );

  /*
   * La altura del folleto ahora deriva
   * directamente de la del monitor.
   */
  const brochure = (
    <div className="h-[var(--ggmm-monitor-frame-height)]">
      <div
        key={`${activeSection}-${activeModule ?? "section"}`}
        className="h-full animate-[brochureIn_.3s_ease-out]"
      >
        <BrochurePanel
          section={
            currentSection
          }
          activeModule={
            currentModule
          }
        />
      </div>
    </div>
  );

  return (
    <section
      id="inicio"
      className="bg-[#d9d3ca]"
    >
      <OfficeScene
        monitor={monitor}
        brochure={brochure}
      />
    </section>
  );
}

export default InteractiveMonitor;
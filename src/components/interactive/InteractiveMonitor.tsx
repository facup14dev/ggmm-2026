import { useMemo, useRef, useState, } from "react";
import { modules, sections, } from "../../data/sections";
import type { ModuleId, SectionId, } from "../../types/section";

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

  const indexRef =
    useRef<HTMLDivElement>(null);

  const currentSection = useMemo(
    () =>
      sections.find(
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
    setActiveModule(moduleId);
  };

  const handleExploreModules = () => {
    indexRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const monitor = (
    <div className="relative mx-auto max-w-275">
      
      {/* MARCO */}
      <div className="relative rounded-[2.8rem] bg-[#111214] p-3.5 shadow-[0_35px_80px_rgba(0,0,0,0.28)] sm:p-4.5">
        
        {/* CAMARA */}
        <div className="absolute left-1/2 top-1.75 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/5" />

        {/* PANTALLA */}
        <div className="overflow-hidden rounded-4xl border border-white/5 bg-[#f7f2e8]">

          <div className="flex items-center justify-between border-b border-[#d9d0c3] bg-[#fbf8f2] px-6 py-4 sm:px-8">

            <div className="flex items-center gap-3">
              
              <img src="images/ggmmLogo.png" alt="GGMM" className="h-9 w-auto object-contain" />

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a7f77] md:block">
                Gestión Gubernamental Municipal
              </span>
            </div>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a7f77] sm:block">
              Plataforma integral
            </span>
          </div>

          <MonitorNavigation sections={sections} activeSection={activeSection} onChange={handleSectionChange} />

          <MonitorScreen section={currentSection} activeModule={currentModule} onExploreModules={handleExploreModules} />

          <div ref={indexRef}>
            <ModuleIndex modules={modules} activeModule={activeModule} onChange={handleModuleChange} />
          </div>

        </div>

        <div className="pointer-events-none absolute inset-4.5 rounded-4xl bg-linear-to-br from-white/10 via-transparent to-transparent" />

      </div>

      {/* CUELLO */}
      <div className="relative mx-auto h-20 w-44">
        <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-linear-to-b from-[#b6b6b6] via-[#969696] to-[#747474] [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]" />
      </div>

      |{/* BASE */}
      <div className="mx-auto -mt-1 h-5 w-72 rounded-[50%] bg-[#8d8d8d] shadow-[0_12px_30px_rgba(0,0,0,0.25)]" />

      <div className="mx-auto mt-1 h-2 w-80 rounded-[50%] bg-black/10 blur-md" />
    </div>
  );

  const brochure = (
    <div
      key={`${currentSection.id}-${currentModule?.id ?? "section"}`}
      className="animate-[brochureIn_.4s_ease-out]"
    >
      <BrochurePanel
        section={currentSection}
        activeModule={currentModule}
      />
    </div>
  );

  return (
    <section
      id="inicio"
      className="bg-[#eee9e1] px-3 py-8 sm:px-5 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1800px]">
        <OfficeScene
          monitor={monitor}
          brochure={brochure}
        />
      </div>
    </section>
  );
}

export default InteractiveMonitor;
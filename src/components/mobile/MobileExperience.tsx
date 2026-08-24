import {
  useMemo,
  useState,
} from "react";

import {
  allSections,
  areas,
} from "../../data/sections";

import type {
  ModuleId,
} from "../../types/section";

import MobileAbout from "./MobileAbout";
import MobileAreaDetail from "./MobileAreaDetail";
import MobileAreaIndex from "./MobileAreaIndex";
import MobileBottomNav from "./MobileBottomNav";
import MobileHeader from "./MobileHeader";
import MobileHero from "./MobileHero";
import MobileInstitutionalSections from "./MobileInstitutionalSections";

function MobileExperience() {
  const [activeAreaId, setActiveAreaId] =
    useState<ModuleId | null>(
      null,
    );

  const homeSection =
    useMemo(
      () =>
        allSections.find(
          (section) =>
            section.id ===
            "inicio",
        ) ?? allSections[0],
      [],
    );

  const aboutSection =
    useMemo(
      () =>
        allSections.find(
          (section) =>
            section.id ===
            "nosotros",
        ) ?? allSections[0],
      [],
    );

  const activeArea =
    useMemo(
      () =>
        areas.find(
          (area) =>
            area.id ===
            activeAreaId,
        ) ?? null,
      [activeAreaId],
    );

  const handleAreaSelect = (
    id: ModuleId,
  ) => {
    setActiveAreaId(id);

    window.setTimeout(() => {
      document
        .getElementById(
          "area-detail-mobile",
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] pb-28 text-[#1f1b19] lg:hidden">
      <MobileHeader />

      <main>
        <MobileHero
          section={
            homeSection
          }
        />

        <MobileAreaIndex
          areas={areas}
          activeArea={
            activeAreaId
          }
          onSelect={
            handleAreaSelect
          }
        />

        {activeArea && (
          <MobileAreaDetail
            area={activeArea}
          />
        )}

        <MobileAbout
          section={
            aboutSection
          }
        />

        <MobileInstitutionalSections
          sections={
            allSections
          }
        />
      </main>

      <MobileBottomNav />
    </div>
  );
}

export default MobileExperience;
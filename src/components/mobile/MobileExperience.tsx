import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  allSections,
  areas,
} from "../../data/sections";

import {
  GGMM_NAVIGATION_EVENT,
  getNavigationTargetFromHash,
  isMobileViewport,
  navigateToArea,
} from "../../lib/ggmmNavigation";

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

  /*
   * Permite abrir directamente un área
   * desde una URL compartida.
   *
   * Ejemplo:
   * /#administracion-catastral
   */
  useEffect(() => {
    const syncAreaFromUrl = (
      shouldScroll: boolean,
    ) => {
      const target =
        getNavigationTargetFromHash();

      if (
        !target ||
        target.type !==
          "area"
      ) {
        return;
      }

      setActiveAreaId(
        target.id,
      );

      if (
        shouldScroll &&
        isMobileViewport()
      ) {
        window.setTimeout(
          () => {
            document
              .getElementById(
                "area-detail-mobile",
              )
              ?.scrollIntoView({
                behavior:
                  "smooth",

                block:
                  "start",
              });
          },
          60,
        );
      }
    };

    syncAreaFromUrl(false);

    const handleHashChange =
      () =>
        syncAreaFromUrl(true);

    const handlePopState =
      () =>
        syncAreaFromUrl(true);

    const handleInternalNavigation =
      () =>
        syncAreaFromUrl(true);

    window.addEventListener(
      "hashchange",
      handleHashChange,
    );

    window.addEventListener(
      "popstate",
      handlePopState,
    );

    window.addEventListener(
      GGMM_NAVIGATION_EVENT,
      handleInternalNavigation,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );

      window.removeEventListener(
        "popstate",
        handlePopState,
      );

      window.removeEventListener(
        GGMM_NAVIGATION_EVENT,
        handleInternalNavigation,
      );
    };
  }, []);

  const handleAreaSelect = (
    id: ModuleId,
  ) => {
    setActiveAreaId(id);

    navigateToArea(id);

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

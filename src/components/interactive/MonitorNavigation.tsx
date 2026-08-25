import {
  ChevronDown,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  Section,
  SectionId,
} from "../../types/section";

type Props = {
  sections: Section[];
  moreSections: Section[];
  activeSection: SectionId;
  onChange: (section: SectionId) => void;
};

const monitorLabels: Partial<
  Record<SectionId, string>
> = {
  nosotros: "Sobre nosotros",
  software: "Software",
  servicios: "Servicios",
  beneficios: "Beneficios",
  areas: "Áreas y Módulos",
};

function MonitorNavigation({
  sections,
  moreSections,
  activeSection,
  onChange,
}: Props) {
  const [isMoreOpen, setIsMoreOpen] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  const isMoreActive =
    moreSections.some(
      (section) =>
        section.id === activeSection,
    );

  /*
   * Cerramos el menú si hacemos click afuera.
   */
  useEffect(() => {
    const handleMouseDown = (
      event: MouseEvent,
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleMouseDown,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown,
      );
    };
  }, []);

  /*
   * Escape también cierra.
   */
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  const handleSelect = (
    sectionId: SectionId,
  ) => {
    onChange(sectionId);
    setIsMoreOpen(false);
  };

  return (
    <div className="relative z-40 shrink-0 border-b border-[#ded6ca] bg-[#fbf8f2]">
      <div className="flex h-[58px] items-stretch px-2 [@media(max-height:940px)]:h-[50px] xl:px-3">
        {/* =====================================
            NAVEGACIÓN PRINCIPAL
        ====================================== */}

        <div className="flex min-w-0 flex-1 items-stretch overflow-hidden">
          {sections.map((section) => {
            const isActive =
              activeSection ===
              section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() =>
                  handleSelect(
                    section.id,
                  )
                }
                className={`group relative flex min-w-0 basis-0 flex-1 items-center justify-center gap-1 overflow-hidden px-1.5 text-[9px] font-semibold tracking-[-0.01em] transition xl:px-2 xl:text-[10px] 2xl:px-3 2xl:text-[12px] [@media(max-height:940px)]:text-[9px] ${
                  isActive
                    ? "text-[#8d1430]"
                    : "text-[#5e554f] hover:text-[#8d1430]"
                }`}
              >
                {section.number && (
                  <span
                    className={`shrink-0 text-[7px] font-black xl:text-[8px] 2xl:text-[9px] ${
                      isActive
                        ? "text-[#b62037]"
                        : "text-[#aaa097]"
                    }`}
                  >
                    {section.number}
                  </span>
                )}

                <span className="min-w-0 whitespace-nowrap">
                  {monitorLabels[section.id] ??
                    section.label}
                </span>

                <span
                  className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full transition ${
                    isActive
                      ? "bg-[#8d1430]"
                      : "bg-transparent group-hover:bg-[#8d1430]/20"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* =====================================
            MÁS
        ====================================== */}

        <div
          ref={menuRef}
          className="relative ml-1 shrink-0 border-l border-[#e5ddd3]"
        >
          <button
            type="button"
            onClick={() =>
              setIsMoreOpen(
                (current) => !current,
              )
            }
            aria-expanded={isMoreOpen}
            className={`group relative flex h-full items-center gap-1 px-3 text-[10px] font-semibold transition xl:px-4 xl:text-[11px] 2xl:text-[12px] [@media(max-height:940px)]:px-3 [@media(max-height:940px)]:text-[10px] ${
              isMoreActive ||
              isMoreOpen
                ? "text-[#8d1430]"
                : "text-[#5e554f] hover:text-[#8d1430]"
            }`}
          >
            Más

            <ChevronDown
              size={13}
              className={`shrink-0 transition-transform duration-200 ${
                isMoreOpen
                  ? "rotate-180"
                  : ""
              }`}
            />

            <span
              className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full transition ${
                isMoreActive
                  ? "bg-[#8d1430]"
                  : "bg-transparent"
              }`}
            />
          </button>

          {/* ===================================
              DROPDOWN
          ==================================== */}

          {isMoreOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[260px] overflow-hidden rounded-2xl border border-[#d9cfc4] bg-[#fbf8f2] p-2 shadow-[0_18px_45px_rgba(54,35,25,0.18)]">
              <div className="px-3 pb-2 pt-2">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#9b8d84]">
                  Más información
                </p>
              </div>

              <div className="space-y-1">
                {moreSections.map(
                  (section) => {
                    const isActive =
                      activeSection ===
                      section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          handleSelect(
                            section.id,
                          )
                        }
                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                          isActive
                            ? "bg-[#8d1430] text-white"
                            : "text-[#4e443e] hover:bg-[#eee5da]"
                        }`}
                      >
                        <span
                          className={`mt-[1px] text-[11px] font-black ${
                            isActive
                              ? "text-white/60"
                              : "text-[#a51f37]"
                          }`}
                        >
                          {section.number}
                        </span>

                        <span className="text-[14px] font-semibold leading-4">
                          {monitorLabels[section.id] ??
                            section.label}
                        </span>
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MonitorNavigation;

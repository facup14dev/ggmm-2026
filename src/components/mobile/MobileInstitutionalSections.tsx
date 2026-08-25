import {
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

import {
  useState,
} from "react";

import type {
  Section,
  SectionId,
} from "../../types/section";

type Props = {
  sections: Section[];
};

const supportedSections: SectionId[] = [
  "software",
  "servicios",
  "beneficios",
  "calidad",
];

function MobileInstitutionalSections({
  sections,
}: Props) {
  const [openSection, setOpenSection] =
    useState<SectionId | null>(null);

  const institutionalSections =
    sections.filter((section) =>
      supportedSections.includes(
        section.id,
      ),
    );

  return (
    <section
      id="informacion-mobile"
      className="scroll-mt-20 px-5 pt-10"
    >
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#801628]">
          Conocé ggmm
        </p>

        <h2 className="mt-2 text-[26px] font-bold tracking-[-0.02em] text-[#1f1b19]">
          Una plataforma integral
        </h2>

        <p className="mt-3 text-[13px] leading-6 text-[#574142]">
          Conocé las principales
          características, servicios y
          beneficios de la plataforma.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {institutionalSections.map(
          (section) => {
            const isOpen =
              openSection ===
              section.id;

            return (
              <article
                key={section.id}
                id={`mobile-${section.id}`}
                className="scroll-mt-20 overflow-hidden rounded-2xl border border-[#debfc0] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenSection(
                      isOpen
                        ? null
                        : section.id,
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="min-w-0">
                    {section.number && (
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#801628]">
                        {section.number} · ggmm
                      </p>
                    )}

                    <h3 className="mt-1 text-[17px] font-bold text-[#1f1b19]">
                      {section.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f6ece8] text-[#801628] transition ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    <ChevronDown
                      size={18}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#f0dfde] px-5 pb-5 pt-4">
                    {section.image && (
                      <div className="mb-5 overflow-hidden rounded-xl">
                        <img
                          src={
                            section.image
                          }
                          alt={
                            section.imageAlt ??
                            section.title
                          }
                          className="h-[170px] w-full object-cover"
                        />
                      </div>
                    )}

                    <p className="text-[12px] leading-6 text-[#574142]">
                      {
                        section.description
                      }
                    </p>

                    {section.features &&
                      section.features
                        .length > 0 && (
                        <div className="mt-5 space-y-3">
                          {section.features.map(
                            (feature) => (
                              <div
                                key={
                                  feature.title
                                }
                                className="flex items-start gap-3 rounded-xl bg-[#fcf2ee] p-3.5"
                              >
                                <BadgeCheck
                                  size={
                                    17
                                  }
                                  className="mt-0.5 shrink-0 text-[#a83543]"
                                />

                                <div>
                                  <p className="text-[12px] font-bold leading-5 text-[#2f2825]">
                                    {
                                      feature.title
                                    }
                                  </p>

                                  <p className="mt-1 text-[11px] leading-5 text-[#665956]">
                                    {
                                      feature.description
                                    }
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                  </div>
                )}
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}

export default MobileInstitutionalSections;
import {
  Code2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import type {
  Section,
} from "../../types/section";

type Props = {
  section: Section;
};

const icons = [
  Sparkles,
  Code2,
  Lightbulb,
];

function MobileAbout({
  section,
}: Props) {
  return (
    <section
      id="nosotros-mobile"
      className="scroll-mt-20 px-5 pt-10"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#801628]">
        03 · GGMM
      </p>

      <h2 className="mt-2 text-[26px] font-bold tracking-[-0.02em] text-[#1f1b19]">
        Sobre Nosotros
      </h2>

      <p className="mt-4 text-[13px] leading-6 text-[#574142]">
        {section.description}
      </p>

      <div className="mt-6 grid gap-3">
        {section.features
          ?.slice(0, 3)
          .map(
            (
              feature,
              index,
            ) => {
              const Icon =
                icons[index] ??
                Sparkles;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl border border-[#debfc0] bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#801628] text-white">
                    <Icon
                      size={18}
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-[#1f1b19]">
                      {
                        feature.title
                      }
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-[#574142]">
                      {
                        feature.description
                      }
                    </p>
                  </div>
                </div>
              );
            },
          )}
      </div>
    </section>
  );
}

export default MobileAbout;
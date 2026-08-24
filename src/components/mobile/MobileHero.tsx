import {
  ArrowRight,
} from "lucide-react";

import type {
  Section,
} from "../../types/section";

type Props = {
  section: Section;
};

function MobileHero({
  section,
}: Props) {
  const goToAreas = () => {
    document
      .getElementById(
        "modulos-mobile",
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="inicio-mobile"
      className="scroll-mt-20 px-5 pt-7"
    >
      <div className="mx-auto max-w-lg text-center">
        {section.eyebrow && (
          <p className="mx-auto max-w-[310px] text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-[#801628]">
            {section.eyebrow}
          </p>
        )}

        <h1 className="mx-auto mt-3 max-w-[350px] text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-[#1f1b19]">
          {section.title}
        </h1>

        <p className="mx-auto mt-4 max-w-[360px] text-[14px] leading-6 text-[#574142]">
          {section.description}
        </p>

        <button
          type="button"
          onClick={goToAreas}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#801628] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition active:scale-[0.98]"
        >
          Ver áreas y módulos

          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default MobileHero;
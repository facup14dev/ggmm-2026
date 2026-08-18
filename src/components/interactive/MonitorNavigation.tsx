import type {
  Section,
  SectionId,
} from "../../types/section";

type Props = {
  sections: Section[];
  activeSection: SectionId;
  onChange: (section: SectionId) => void;
};

function MonitorNavigation({
  sections,
  activeSection,
  onChange,
}: Props) {
  return (
    <div className="border-b border-[#ded6ca] bg-[#fbf8f2] px-4 sm:px-6">
      <div className="flex items-center gap-1 overflow-x-auto">
        {sections.map((section) => {
          const isActive =
            activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onChange(section.id)}
              className={`relative shrink-0 px-3 py-4 text-[11px] font-semibold transition sm:px-4 sm:text-xs ${
                isActive
                  ? "text-[#74152b]"
                  : "text-[#5e554f] hover:text-[#74152b]"
              }`}
            >
              {section.label}

              {isActive && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 bg-[#74152b]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MonitorNavigation;
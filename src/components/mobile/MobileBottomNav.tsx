import {
  Grid3X3,
  Home,
  Info,
  Mail,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

type NavId =
  | "inicio-mobile"
  | "modulos-mobile"
  | "nosotros-mobile"
  | "contacto";

const items: {
  id: NavId;
  label: string;
  icon: typeof Home;
}[] = [
  {
    id: "inicio-mobile",
    label: "Inicio",
    icon: Home,
  },
  {
    id: "modulos-mobile",
    label: "Módulos",
    icon: Grid3X3,
  },
  {
    id: "nosotros-mobile",
    label: "Nosotros",
    icon: Info,
  },
  {
    id: "contacto",
    label: "Contacto",
    icon: Mail,
  },
];

function MobileBottomNav() {
  const [activeId, setActiveId] =
    useState<NavId>(
      "inicio-mobile",
    );

  useEffect(() => {
    const elements =
      items
        .map((item) =>
          document.getElementById(
            item.id,
          ),
        )
        .filter(
          (
            element,
          ): element is HTMLElement =>
            Boolean(element),
        );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio,
              );

          const first =
            visible[0];

          if (first) {
            setActiveId(
              first.target
                .id as NavId,
            );
          }
        },
        {
          rootMargin:
            "-20% 0px -55% 0px",

          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    elements.forEach(
      (element) =>
        observer.observe(
          element,
        ),
    );

    return () =>
      observer.disconnect();
  }, []);

  const scrollTo = (
    id: NavId,
  ) => {
    setActiveId(id);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#debfc0] bg-white/95 px-2 pt-2 shadow-[0_-8px_24px_rgba(50,30,25,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-4 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {items.map((item) => {
          const Icon =
            item.icon;

          const isActive =
            activeId ===
            item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                scrollTo(item.id)
              }
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`flex min-h-[44px] min-w-[54px] flex-col items-center justify-center rounded-xl px-2 py-1 transition ${
                  isActive
                    ? "bg-[#801628] text-white"
                    : "text-[#574142]"
                }`}
              >
                <Icon size={18} />

                <span className="mt-0.5 text-[9px] font-medium">
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileBottomNav;
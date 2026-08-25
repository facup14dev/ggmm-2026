import {
  Menu,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

type NavigationItem = {
  label: string;
  target: string;
};

const mainNavigation: NavigationItem[] = [
  {
    label: "Inicio",
    target: "inicio-mobile",
  },
  {
    label: "Áreas y Módulos",
    target: "modulos-mobile",
  },
  {
    label: "Sobre Nosotros",
    target: "nosotros-mobile",
  },
];

const institutionalNavigation: NavigationItem[] =
  [
    {
      label: "Nuestro Software",
      target: "mobile-software",
    },
    {
      label: "Nuestros Servicios",
      target: "mobile-servicios",
    },
    {
      label: "Beneficios",
      target: "mobile-beneficios",
    },
    {
      label: "Calidad y Avales",
      target: "mobile-calidad",
    },
  ];

function MobileHeader() {
  const [isOpen, setIsOpen] =
    useState(false);

  const scrollTo = (
    target: string,
  ) => {
    document
      .getElementById(target)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#debfc0] bg-[#fff8f5]/95 backdrop-blur lg:hidden">
      <div className="relative flex h-16 items-center justify-between px-5">
        {/* MENU */}

        <button
          type="button"
          onClick={() =>
            setIsOpen(
              (current) => !current,
            )
          }
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#5e0016] transition active:scale-95"
          aria-label={
            isOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

        {/* ggmm */}

        <button
          type="button"
          onClick={() =>
            scrollTo(
              "inicio-mobile",
            )
          }
          className="absolute left-1/2 -translate-x-1/2"
          aria-label="Ir al inicio"
        >
          <img
            src="/images/ggmmLogo.png"
            alt="ggmm"
            className="h-[30px] w-auto object-contain"
          />
        </button>

        {/* CONTACTO */}

        <button
          type="button"
          onClick={() =>
            scrollTo("contacto")
          }
          className="px-2 py-2 text-xs font-bold text-[#5e0016]"
        >
          Contacto
        </button>
      </div>

      {/* DRAWER */}

      {isOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[#debfc0] bg-[#fff8f5] px-5 pb-6 pt-4 shadow-xl">
          <nav>
            <p className="px-3 pb-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#a58a89]">
              Navegación
            </p>

            <div className="space-y-1">
              {mainNavigation.map(
                (item) => (
                  <MenuItem
                    key={
                      item.target
                    }
                    item={item}
                    onSelect={
                      scrollTo
                    }
                  />
                ),
              )}
            </div>

            <div className="my-4 h-px bg-[#ead9d7]" />

            <p className="px-3 pb-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#a58a89]">
              Información
            </p>

            <div className="space-y-1">
              {institutionalNavigation.map(
                (item) => (
                  <MenuItem
                    key={
                      item.target
                    }
                    item={item}
                    onSelect={
                      scrollTo
                    }
                  />
                ),
              )}
            </div>

            <div className="my-4 h-px bg-[#ead9d7]" />

            <button
              type="button"
              onClick={() =>
                scrollTo(
                  "contacto",
                )
              }
              className="flex w-full items-center justify-center rounded-xl bg-[#801628] px-4 py-3 text-sm font-bold text-white"
            >
              Contactanos
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuItem({
  item,
  onSelect,
}: {
  item: NavigationItem;
  onSelect: (
    target: string,
  ) => void;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        onSelect(item.target)
      }
      className="flex w-full items-center rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#574142] transition hover:bg-[#f6ece8] hover:text-[#5e0016]"
    >
      {item.label}
    </button>
  );
}

export default MobileHeader;
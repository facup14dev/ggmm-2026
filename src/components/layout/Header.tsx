import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded3c6] bg-[#f8f4ec]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          
        <a
          href="#inicio"
          className="flex items-center gap-4"
          aria-label="Ir al inicio"
        >
          <img
            src="/images/ggmmLogo.png"
            alt="GGMM"
            className="h-[45px] w-auto object-contain"
          />

          <div className="hidden items-start sm:flex">
            <span className="mt-[1px] text-[7px] leading-none text-[#8d1430]">
              ®
            </span>

            <div className="text-[10px] font-bold uppercase leading-[1.08] tracking-[0.01em] text-[#681027]">
              <span className="block">
                Digitalización
              </span>

              <span className="block">
                integral para
              </span>

              <span className="block">
                gobiernos
              </span>

              <span className="block">
                municipales
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#inicio"
            className="text-sm font-semibold text-[#514740] transition hover:text-[#8d1430]"
          >
            Plataforma
          </a>

          {/* <a
            href="#contacto"
            className="text-sm font-semibold text-[#514740] transition hover:text-[#8d1430]"
          >
            Contacto
          </a> */}

          <a
            href="#contacto"
            className="rounded-xl bg-[#8d1430] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#8d1430]/15 transition hover:bg-[#741027]"
          >
            <p className="text-sm font-semibold text-white">
              Solicitar información
              </p> 
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ded3c6] text-[#514740] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#ded3c6] bg-[#f8f4ec] px-6 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-[1600px] flex-col gap-2">
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-[#514740] hover:bg-[#eee6db]"
            >
              Plataforma
            </a>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-[#514740] hover:bg-[#eee6db]"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
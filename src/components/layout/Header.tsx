import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  "Inicio",
  "Nuestra Plataforma",
  "Beneficios Municipales",
  "Servicios Integrales",
  "Calidad y Avales",
  "Casos de Éxito",
  "Contacto",
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded5c6] bg-[#f8f4eb]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-375 items-center justify-between px-5 lg:px-10">
        
        {/* <a href="#inicio" className="text-3xl font-black tracking-[-0.05em] text-[#74152b]" >
          ggmm
        </a> */}
        <img src="images/ggmmLogo.png" alt="GGMM" className="h-13 w-auto object-contain" />

        <nav className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href="#inicio"
              className="text-sm font-medium text-[#3b312d] transition hover:text-[#74152b]"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7ccba] xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#ded5c6] bg-[#f8f4eb] px-5 py-5 xl:hidden">
          {navigation.map((item) => (
            <a
              key={item}
              href="#inicio"
              className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-[#eee6d8]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
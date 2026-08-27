import {
  ArrowUp,
  ExternalLink,
  Mail,
  MapIcon,
  Phone,
} from "lucide-react";

const modules = [
  "Administración Tributaria",
  "Administración Financiera",
  "Administración Contable",
  "Catastro",
  "RRHH",
  "Rodados",
];

function Footer() {
  const year =
    new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#211a18] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          {/* MARCA */}
          <div>
            <img
              src="/images/ggmmLogo.png"
              alt="ggmm"
              className="h-8 w-auto object-contain brightness-0 invert"
            />

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Gestión Gubernamental Municipal
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Tecnología integral para modernizar
              la gestión pública, mejorar la
              recaudación y acercar el municipio
              al ciudadano.
            </p>

            <a
              href="https://ggmm.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              ggmm.com.ar
              <ExternalLink size={15} />
            </a>
          </div>

          {/* PLATAFORMA */}
          <div>
            <FooterTitle>
              Plataforma
            </FooterTitle>

            <ul className="mt-5 space-y-3">
              <FooterLink href="#inicio">
                Inicio
              </FooterLink>

              <FooterLink href="#inicio">
                Nuestro Software
              </FooterLink>

              <FooterLink href="#inicio">
                Beneficios Municipales
              </FooterLink>

              <FooterLink href="#contacto">
                Contacto
              </FooterLink>
            </ul>
          </div>

          {/* MÓDULOS */}
          <div>
            <FooterTitle>
              Módulos
            </FooterTitle>

            <ul className="mt-5 space-y-3">
              {modules.map((module) => (
                <li
                  key={module}
                  className="text-sm text-white/55"
                >
                  {module}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <FooterTitle>
              Contacto
            </FooterTitle>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:info@inft.com.ar"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail size={17} />
                info@inft.com.ar
              </a>

              <a
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone size={17} />
                (+54) 3547-459107 <br></br> (+54) 3547-459192
              </a>

              <a
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <MapIcon size={17} />
                Eva Perón 124. Alta Gracia, Córdoba CP - 5186
              </a>

            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} ggmm · INFT S.A. Todos
            los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
          >
            Volver arriba
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/85">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-white/55 transition hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;
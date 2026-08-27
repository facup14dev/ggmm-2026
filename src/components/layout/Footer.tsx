import {
  ArrowUp,
  ExternalLink,
  Mail,
  MapIcon,
  Phone,
} from "lucide-react";

import {
  areas,
} from "../../data/sections";

import {
  areaHashById,
  sectionHashById,
} from "../../lib/ggmmNavigation";

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
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1fr_0.9fr]">
          {/* =====================================
              MARCA
          ====================================== */}

          <div>
            <img
              src="/images/ggmmLogo.webp"
              alt="GGMM - Gestión Gubernamental Municipal"
              width={700}
              height={303}
              className="h-8 w-auto object-contain brightness-0 invert"
              loading="lazy"
              decoding="async"
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

            <div className="mt-6 space-y-1">
              <ExternalSite
                href="https://ggmm.com.ar/"
                label="ggmm.com.ar"
              />

              <ExternalSite
                href="https://inft.com.ar/"
                label="inft.com.ar"
              />

              <ExternalSite
                href="https://ggtt.com.ar/"
                label="ggtt.com.ar"
              />
            </div>
          </div>

          {/* =====================================
              PLATAFORMA
          ====================================== */}

          <nav
            aria-label="Navegación de la plataforma"
          >
            <FooterTitle>
              Plataforma
            </FooterTitle>

            <ul className="mt-5 space-y-3">
              <FooterLink
                href={
                  sectionHashById.inicio
                }
              >
                Inicio
              </FooterLink>

              <FooterLink
                href={
                  sectionHashById.software
                }
              >
                Nuestro Software
              </FooterLink>

              <FooterLink
                href={
                  sectionHashById.beneficios
                }
              >
                Beneficios Municipales
              </FooterLink>

              <FooterLink
                href={
                  sectionHashById.contacto
                }
              >
                Contacto
              </FooterLink>
            </ul>
          </nav>

          {/* =====================================
              ÁREAS GGMM
          ====================================== */}

          <nav
            aria-label="Áreas de gestión GGMM"
          >
            <FooterTitle>
              Áreas de gestión
            </FooterTitle>

            <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2">
              {areas.map(
                (area) => (
                  <li
                    key={area.id}
                  >
                    <a
                      href={
                        areaHashById[
                          area.id
                        ]
                      }
                      className="text-[13px] leading-5 text-white/55 transition hover:text-white"
                    >
                      {area.title}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* =====================================
              CONTACTO
          ====================================== */}

          <div>
            <FooterTitle>
              Contacto
            </FooterTitle>

            <address className="mt-5 space-y-4 not-italic">
              <a
                href="mailto:info@inft.com.ar"
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  info@inft.com.ar
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/60">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <div className="space-y-1">
                  <a
                    href="tel:+543547459107"
                    className="block transition hover:text-white"
                  >
                    (+54) 3547-459107
                  </a>

                  <a
                    href="tel:+543547459192"
                    className="block transition hover:text-white"
                  >
                    (+54) 3547-459192
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/60">
                <MapIcon
                  size={17}
                  className="mt-1 shrink-0"
                />

                <span>
                  Eva Perón 124. Alta Gracia,
                  Córdoba CP 5186
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} GGMM · INFT S.A.
            Todos los derechos reservados.
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

function ExternalSite({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition hover:text-white"
    >
      {label}

      <ExternalLink
        size={15}
      />
    </a>
  );
}

export default Footer;

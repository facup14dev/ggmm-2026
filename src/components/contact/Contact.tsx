import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import DeferredContactForm from "./DeferredContactForm";

function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-[#fff8f5] px-5 py-12 lg:bg-[#f5f0e8] lg:px-0 lg:py-20 xl:py-24"
    >
      {/* Decoración desktop */}

      <div className="pointer-events-none absolute -left-32 top-20 hidden h-96 w-96 rounded-full bg-[#8d1430]/5 blur-3xl lg:block" />

      <div className="pointer-events-none absolute -right-32 bottom-0 hidden h-96 w-96 rounded-full bg-[#8d1430]/5 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          {/* =====================================
              INFORMACIÓN

              Esta parte queda en el bundle inicial
              y en el DOM aunque el formulario
              todavía no se haya descargado.
          ====================================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#8d1430] lg:h-1 lg:w-10 lg:rounded-full" />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8d1430] lg:text-xs">
                Contacto
              </span>
            </div>

            <h2 className="mt-4 max-w-lg font-serif text-[28px] font-black leading-[1.08] text-[#211a18] lg:mt-6 lg:text-5xl">
              Hablemos sobre la transformación digital de su municipio
            </h2>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#655a52] lg:mt-6 lg:text-base lg:leading-8">
              Contanos qué necesita tu municipio y nuestro equipo podrá
              orientarte sobre los módulos, herramientas y servicios que mejor
              se adapten a tu gestión.
            </p>

            <div className="mt-6 space-y-3 lg:mt-10 lg:space-y-4">
              <ContactItem
                icon={Mail}
                title="Correo electrónico"
                value="info@inft.com.ar"
                href="mailto:info@inft.com.ar"
              />

              <ContactItem
                icon={Phone}
                title="Contacto"
                value="(+54) 3547-459107 / 3547-459192"
                href="tel:+543547459107"
              />

              <ContactItem
                icon={MapPin}
                title="Ubicación"
                value="Eva Perón 124. Alta Gracia, Córdoba CP - 5186"
                href="https://share.google/H6DBvZqxivtlkIbvw"
                external
              />
            </div>

            {/* Sólo desktop */}

            <div className="mt-10 hidden rounded-3xl border border-[#ded3c3] bg-white/65 p-6 shadow-sm lg:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8d1430]">
                Plataforma ggmm
              </p>

              <p className="mt-3 font-serif text-2xl font-bold text-[#211a18]">
                Una solución integral, modular y escalable.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#74685f]">
                Administración, recaudación, territorio, recursos y atención al
                ciudadano dentro de un mismo ecosistema tecnológico.
              </p>
            </div>
          </div>

          {/* =====================================
              FORMULARIO

              react-hook-form + zod se descargan
              recién cuando el usuario está cerca
              de esta sección.
          ====================================== */}

          <DeferredContactForm />
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: typeof Mail;
  title: string;
  value: string;
  href: string;
  external?: boolean;
};

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
  external = false,
}: ContactItemProps) {
  return (
    <a
      href={href}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="flex items-center gap-3 rounded-xl border border-[#ded3c3] bg-white p-3.5 transition hover:border-[#8d1430]/30 lg:border-0 lg:bg-transparent lg:p-0"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8d1430] text-white lg:h-11 lg:w-11 lg:rounded-xl">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#8a7f77] lg:text-xs">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] font-semibold text-[#352d29] lg:mt-1 lg:text-sm">
          {value}
        </p>
      </div>
    </a>
  );
}

export default Contact;

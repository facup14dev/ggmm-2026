import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { areas } from "../../data/sections";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre.")
    .max(80, "El nombre es demasiado largo."),

  company: z
    .string()
    .trim()
    .max(120, "El nombre del municipio es demasiado largo.")
    .optional(),

  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu correo electrónico.")
    .email("Ingresá un correo electrónico válido."),

  phone: z
    .string()
    .trim()
    .max(30, "El teléfono es demasiado largo.")
    .optional(),

  interest: z
    .string()
    .min(1, "Seleccioná el motivo de tu consulta."),

  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(1500, "El mensaje no puede superar los 1500 caracteres."),

  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const interestOptions = [
  {
    value: "general",
    label: "Consulta general sobre GGMM",
  },
  ...areas.map((area) => ({
    value: area.id,
    label: area.title,
  })),
];

/*
 * IIS:
 *   /api/contact.php
 *
 * Vercel:
 *   VITE_CONTACT_ENDPOINT=/api/contact
 */
const contactEndpoint =
  import.meta.env.VITE_CONTACT_ENDPOINT?.trim() ||
  "/api/contact.php";

function getInterestLabel(value: string) {
  return (
    interestOptions.find(
      (option) => option.value === value,
    )?.label ?? value
  );
}

function Contact() {
  const [wasSubmitted, setWasSubmitted] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (
    data: ContactFormData,
  ) => {
    setWasSubmitted(false);
    setSubmitError("");

    try {
      const payload = {
        businessUnit: "ggmm",

        name: data.name,
        company: data.company ?? "",
        email: data.email,
        phone: data.phone ?? "",

        interest:
          getInterestLabel(data.interest),

        message: data.message,

        website: data.website ?? "",
      };

      const response = await fetch(
        contactEndpoint,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(payload),
        },
      );

      let result: {
        message?: string;
      };

      try {
        result =
          (await response.json()) as {
            message?: string;
          };
      } catch {
        throw new Error(
          "El servidor devolvió una respuesta inválida.",
        );
      }

      if (!response.ok) {
        throw new Error(
          result.message ??
            "No fue posible enviar la consulta.",
        );
      }

      setWasSubmitted(true);

      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "No fue posible enviar la consulta.",
      );
    }
  };

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
                value="(+54) 3547-459107"
                href="tel:+543547459107"
              />
            </div>

            {/* Sólo desktop */}

            <div className="mt-10 hidden rounded-3xl border border-[#ded3c3] bg-white/65 p-6 shadow-sm lg:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8d1430]">
                Plataforma GGMM
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
          ====================================== */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative rounded-2xl border border-[#ded3c3] bg-white p-5 shadow-sm sm:p-6 lg:rounded-[2rem] lg:p-10 lg:shadow-[0_25px_70px_rgba(66,46,30,0.10)]"
          >
            {/* Honeypot */}

            <div
              className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">
                Sitio web
              </label>

              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="mb-6 lg:mb-8">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8d1430] lg:text-xs">
                Envíenos su consulta
              </p>

              <h3 className="mt-2 font-serif text-[24px] font-bold leading-tight text-[#211a18] lg:mt-3 lg:text-3xl">
                ¿Cómo podemos ayudar?
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-[#74685f] lg:mt-3 lg:text-sm lg:leading-6">
                Completá el formulario y nos pondremos en contacto a la
                brevedad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <Field
                label="Nombre y apellido"
                error={errors.name?.message}
              >
                <input
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={inputClass(
                    Boolean(errors.name),
                  )}
                  placeholder="Tu nombre"
                />
              </Field>

              <Field
                label="Municipio / Organización"
                error={
                  errors.company?.message
                }
              >
                <input
                  type="text"
                  autoComplete="organization"
                  {...register("company")}
                  className={inputClass(
                    Boolean(errors.company),
                  )}
                  placeholder="Nombre del municipio"
                />
              </Field>

              <Field
                label="Correo electrónico"
                error={errors.email?.message}
              >
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className={inputClass(
                    Boolean(errors.email),
                  )}
                  placeholder="nombre@municipio.gob.ar"
                />
              </Field>

              <Field
                label="Teléfono"
                error={errors.phone?.message}
              >
                <input
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className={inputClass(
                    Boolean(errors.phone),
                  )}
                  placeholder="+54 ..."
                />
              </Field>
            </div>

            {/* INTERÉS */}

            <div className="mt-4 lg:mt-5">
              <Field
                label="¿Sobre qué necesitás información?"
                error={
                  errors.interest?.message
                }
              >
                <select
                  {...register("interest")}
                  className={inputClass(
                    Boolean(
                      errors.interest,
                    ),
                  )}
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                  >
                    Seleccioná una opción
                  </option>

                  {interestOptions.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ),
                  )}
                </select>
              </Field>
            </div>

            {/* MENSAJE */}

            <div className="mt-4 lg:mt-5">
              <Field
                label="Mensaje"
                error={
                  errors.message?.message
                }
              >
                <textarea
                  rows={6}
                  {...register("message")}
                  className={`${inputClass(
                    Boolean(
                      errors.message,
                    ),
                  )} resize-none`}
                  placeholder="Contanos brevemente qué necesita el municipio..."
                />
              </Field>
            </div>

            {/* SUCCESS */}

            {wasSubmitted && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                <CheckCircle2
                  className="mt-0.5 shrink-0"
                  size={19}
                />

                <p className="text-xs leading-5 lg:text-sm lg:leading-6">
                  Tu consulta fue enviada correctamente. Nos pondremos en
                  contacto a la brevedad.
                </p>
              </div>
            )}

            {/* ERROR */}

            {submitError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-5 text-red-700 lg:text-sm">
                {submitError}
              </div>
            )}

            {/* FOOT */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-[9px] leading-4 text-[#8a7f77] lg:text-xs lg:leading-5">
                Al enviar este formulario, utilizaremos los datos únicamente
                para responder tu consulta.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8d1430] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#8d1430]/15 transition hover:bg-[#741027] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={17} />

                {isSubmitting
                  ? "Enviando..."
                  : "Enviar consulta"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AUXILIARES
   ========================================================= */

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({
  label,
  error,
  children,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold text-[#352d29] lg:text-sm">
        {label}
      </span>

      {children}

      {error && (
        <span className="mt-2 block text-[10px] font-medium text-red-600 lg:text-xs">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(
  hasError: boolean,
) {
  return [
    "w-full rounded-xl border bg-[#fcfaf6] px-4 py-3",
    "text-[12px] text-[#302824] outline-none transition lg:text-sm",
    "placeholder:text-[#a39990]",
    "focus:bg-white focus:ring-4",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-[#ddd3c6] focus:border-[#8d1430]/60 focus:ring-[#8d1430]/8",
  ].join(" ");
}

type ContactItemProps = {
  icon: typeof Mail;
  title: string;
  value: string;
  href: string;
};

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: ContactItemProps) {
  return (
    <a
      href={href}
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
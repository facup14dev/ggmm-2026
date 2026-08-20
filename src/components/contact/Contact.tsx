import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import {
  useForm,
} from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre.")
    .max(80, "El nombre es demasiado largo."),

  company: z
    .string()
    .trim()
    .max(120, "La organización es demasiado larga.")
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
    .max(
      1500,
      "El mensaje no puede superar los 1500 caracteres.",
    ),

  /*
   * Honeypot antispam.
   */
  website: z.string().optional(),
});

type ContactFormData = z.infer<
  typeof contactSchema
>;

const interestOptions = [
  {
    value: "plataforma",
    label: "Conocer la plataforma GGMM",
  },
  {
    value: "tributaria",
    label: "Administración Tributaria",
  },
  {
    value: "financiera",
    label: "Administración Financiera",
  },
  {
    value: "contable",
    label: "Administración Contable",
  },
  {
    value: "catastro",
    label: "Catastro / GIS",
  },
  {
    value: "rrhh",
    label: "Recursos Humanos",
  },
  {
    value: "rodados",
    label: "Rodados",
  },
  {
    value: "vecino",
    label: "Atención al Vecino",
  },
  {
    value: "otro",
    label: "Otra consulta",
  },
];

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
      /*
       * Adaptamos los datos al endpoint
       * que ya desarrollamos para INFT.
       */
      const payload = {
        businessUnit: "ggmm",
        name: data.name,
        company: data.company ?? "",
        email: data.email,
        phone: data.phone ?? "",

        /*
         * Incluimos el interés dentro
         * del mensaje para no necesitar
         * modificar inicialmente contact.php.
         */
        message: [
          `Interés: ${getInterestLabel(
            data.interest,
          )}`,
          "",
          data.message,
        ].join("\n"),

        website: data.website ?? "",
      };

      const response = await fetch(
        "/api/contact.php",
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
      } = {};

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
      className="relative overflow-hidden bg-[#f5f0e8] py-20 sm:py-24"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#8d1430]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8d1430]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* IZQUIERDA */}
          <div className="lg:sticky lg:top-10">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#8d1430]" />

              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#8d1430]">
                Contacto
              </span>
            </div>

            <h2 className="mt-6 max-w-lg font-serif text-4xl font-black leading-[1.05] text-[#211a18] sm:text-5xl">
              Hablemos sobre la transformación digital de su municipio
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#655a52]">
              Contanos qué necesita tu municipio y
              nuestro equipo podrá orientarte sobre
              los módulos, herramientas y servicios
              que mejor se adapten a tu gestión.
            </p>

            <div className="mt-10 space-y-4">
              <ContactItem
                icon={Mail}
                title="Correo electrónico"
                text="info@inft.com.ar"
              />

              <ContactItem
                icon={Phone}
                title="Contacto"
                text="(+54) 3547-459107"
              />

              <ContactItem
                icon={MapPin}
                title="GGMM"
                text="Gestión Gubernamental Municipal"
              />
            </div>

            <div className="mt-10 rounded-3xl border border-[#ded3c3] bg-white/65 p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8d1430]">
                Plataforma GGMM
              </p>

              <p className="mt-3 font-serif text-2xl font-bold text-[#211a18]">
                Una solución integral, modular y
                escalable.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#74685f]">
                Administración, recaudación,
                territorio, recursos y atención al
                ciudadano dentro de un mismo
                ecosistema tecnológico.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative rounded-[2rem] border border-[#ded3c3] bg-white p-6 shadow-[0_25px_70px_rgba(66,46,30,0.10)] sm:p-8 lg:p-10"
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

            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8d1430]">
                Envíenos su consulta
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold text-[#211a18]">
                ¿Cómo podemos ayudar?
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#74685f]">
                Completá el formulario y nos
                pondremos en contacto a la
                brevedad.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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

            <div className="mt-5">
              <Field
                label="¿Sobre qué necesitás información?"
                error={
                  errors.interest?.message
                }
              >
                <select
                  {...register("interest")}
                  className={inputClass(
                    Boolean(errors.interest),
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

            <div className="mt-5">
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

            {wasSubmitted && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                <CheckCircle2
                  className="mt-0.5 shrink-0"
                  size={20}
                />

                <p className="text-sm leading-6">
                  Tu consulta fue enviada
                  correctamente. Nos pondremos
                  en contacto a la brevedad.
                </p>
              </div>
            )}

            {submitError && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                {submitError}
              </div>
            )}

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-[#8a7f77]">
                Al enviar este formulario,
                utilizaremos los datos únicamente
                para responder tu consulta.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8d1430] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#8d1430]/20 transition hover:-translate-y-0.5 hover:bg-[#741027] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    Enviando...
                    <Send
                      size={17}
                      className="animate-pulse"
                    />
                  </>
                ) : (
                  <>
                    Enviar consulta
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function getInterestLabel(
  value: string,
) {
  return (
    interestOptions.find(
      (option) =>
        option.value === value,
    )?.label ?? value
  );
}

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
      <span className="mb-2 block text-sm font-bold text-[#352d29]">
        {label}
      </span>

      {children}

      {error && (
        <span className="mt-2 block text-xs font-medium text-red-600">
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
    "w-full rounded-xl border bg-[#fcfaf6] px-4 py-3.5",
    "text-sm text-[#302824] outline-none transition",
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
  text: string;
};

function ContactItem({
  icon: Icon,
  title,
  text,
}: ContactItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8d1430] text-white shadow-md shadow-[#8d1430]/15">
        <Icon size={19} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a7f77]">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-[#352d29]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Contact;
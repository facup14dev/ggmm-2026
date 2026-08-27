import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  useForm,
} from "react-hook-form";

import {
  z,
} from "zod";

import {
  areas,
} from "../../data/sections";

const contactSchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        "Ingresá tu nombre.",
      )
      .max(
        80,
        "El nombre es demasiado largo.",
      ),

    company: z
      .string()
      .trim()
      .max(
        120,
        "El nombre del municipio es demasiado largo.",
      )
      .optional(),

    email: z
      .string()
      .trim()
      .min(
        1,
        "Ingresá tu correo electrónico.",
      )
      .email(
        "Ingresá un correo electrónico válido.",
      ),

    phone: z
      .string()
      .trim()
      .max(
        30,
        "El teléfono es demasiado largo.",
      )
      .optional(),

    interest: z
      .string()
      .min(
        1,
        "Seleccioná el motivo de tu consulta.",
      ),

    message: z
      .string()
      .trim()
      .min(
        10,
        "El mensaje debe tener al menos 10 caracteres.",
      )
      .max(
        1500,
        "El mensaje no puede superar los 1500 caracteres.",
      ),

    website:
      z.string().optional(),
  });

type ContactFormData =
  z.infer<
    typeof contactSchema
  >;

const interestOptions = [
  {
    value: "general",
    label:
      "Consulta general sobre ggmm",
  },

  ...areas.map((area) => ({
    value: area.id,
    label: area.title,
  })),
];

/*
 * Vercel:
 *
 * VITE_CONTACT_ENDPOINT=/api/contactVercel
 *
 * IIS producción:
 *
 * al no definir VITE_CONTACT_ENDPOINT
 * se utiliza /api/contact.php.
 */
const contactEndpoint =
  import.meta.env
    .VITE_CONTACT_ENDPOINT
    ?.trim() ||
  "/api/contact.php";

function getInterestLabel(
  value: string,
) {
  return (
    interestOptions.find(
      (option) =>
        option.value ===
        value,
    )?.label ?? value
  );
}

function ContactForm() {
  const [
    wasSubmitted,
    setWasSubmitted,
  ] = useState(false);

  const [
    submitError,
    setSubmitError,
  ] = useState("");

  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } =
    useForm<ContactFormData>(
      {
        resolver:
          zodResolver(
            contactSchema,
          ),

        defaultValues: {
          name: "",
          company: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
          website: "",
        },
      },
    );

  const onSubmit = async (
    data: ContactFormData,
  ) => {
    setWasSubmitted(false);
    setSubmitError("");

    try {
      const payload = {
        businessUnit:
          "ggmm",

        name: data.name,

        company:
          data.company ?? "",

        email: data.email,

        phone:
          data.phone ?? "",

        interest:
          getInterestLabel(
            data.interest,
          ),

        message:
          data.message,

        website:
          data.website ?? "",
      };

      const response =
        await fetch(
          contactEndpoint,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                payload,
              ),
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
    <form
      onSubmit={
        handleSubmit(
          onSubmit,
        )
      }
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
          {...register(
            "website",
          )}
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
          Completá el formulario y
          nos pondremos en contacto
          a la brevedad.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        <Field
          label="Nombre y apellido"
          error={
            errors.name?.message
          }
        >
          <input
            type="text"
            autoComplete="name"
            {...register(
              "name",
            )}
            className={inputClass(
              Boolean(
                errors.name,
              ),
            )}
            placeholder="Tu nombre"
          />
        </Field>

        <Field
          label="Municipio / Organización"
          error={
            errors.company
              ?.message
          }
        >
          <input
            type="text"
            autoComplete="organization"
            {...register(
              "company",
            )}
            className={inputClass(
              Boolean(
                errors.company,
              ),
            )}
            placeholder="Nombre del municipio"
          />
        </Field>

        <Field
          label="Correo electrónico"
          error={
            errors.email?.message
          }
        >
          <input
            type="email"
            autoComplete="email"
            {...register(
              "email",
            )}
            className={inputClass(
              Boolean(
                errors.email,
              ),
            )}
            placeholder="nombre@municipio.gob.ar"
          />
        </Field>

        <Field
          label="Teléfono"
          error={
            errors.phone?.message
          }
        >
          <input
            type="tel"
            autoComplete="tel"
            {...register(
              "phone",
            )}
            className={inputClass(
              Boolean(
                errors.phone,
              ),
            )}
            placeholder="+54 ..."
          />
        </Field>
      </div>

      <div className="mt-4 lg:mt-5">
        <Field
          label="¿Sobre qué necesitás información?"
          error={
            errors.interest
              ?.message
          }
        >
          <select
            {...register(
              "interest",
            )}
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
                  key={
                    option.value
                  }
                  value={
                    option.value
                  }
                >
                  {option.label}
                </option>
              ),
            )}
          </select>
        </Field>
      </div>

      <div className="mt-4 lg:mt-5">
        <Field
          label="Mensaje"
          error={
            errors.message
              ?.message
          }
        >
          <textarea
            rows={6}
            {...register(
              "message",
            )}
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
        <div
          role="status"
          className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
        >
          <CheckCircle2
            className="mt-0.5 shrink-0"
            size={19}
          />

          <p className="text-xs leading-5 lg:text-sm lg:leading-6">
            Tu consulta fue
            enviada correctamente.
            Nos pondremos en
            contacto a la brevedad.
          </p>
        </div>
      )}

      {submitError && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs leading-5 text-red-700 lg:text-sm"
        >
          {submitError}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-sm text-[9px] leading-4 text-[#8a7f77] lg:text-xs lg:leading-5">
          Al enviar este
          formulario, utilizaremos
          los datos únicamente para
          responder tu consulta.
        </p>

        <button
          type="submit"
          disabled={
            isSubmitting
          }
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8d1430] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#8d1430]/15 transition hover:bg-[#741027] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <Send size={17} />

          {isSubmitting
            ? "Enviando..."
            : "Enviar consulta"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children:
    React.ReactNode;
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

export default ContactForm;

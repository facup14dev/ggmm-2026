import type {
  VercelRequest,
  VercelResponse,
} from "@vercel/node";

import nodemailer from "nodemailer";

type ContactBody = {
  businessUnit?: string;

  name?: string;
  company?: string;

  email?: string;
  phone?: string;

  interest?: string;

  message?: string;

  website?: string;
};

function textValue(
  value: unknown,
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function escapeHtml(
  value: string,
): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(
  email: string,
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email,
  );
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.setHeader(
    "Cache-Control",
    "no-store",
  );

  if (request.method !== "POST") {
    response.setHeader(
      "Allow",
      "POST",
    );

    return response
      .status(405)
      .json({
        message:
          "Método no permitido.",
      });
  }

  try {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_APP_PASSWORD,
      SMTP_FROM,
      CONTACT_EMAIL_TO,
    } = process.env;

    if (
      !SMTP_USER ||
      !SMTP_APP_PASSWORD ||
      !CONTACT_EMAIL_TO
    ) {
      console.error(
        "Faltan variables SMTP obligatorias.",
      );

      return response
        .status(500)
        .json({
          message:
            "El servicio de correo no está configurado.",
        });
    }

    const body =
      request.body as ContactBody;

    const businessUnit =
      textValue(
        body.businessUnit,
      );

    const name =
      textValue(body.name);

    const company =
      textValue(body.company);

    const email =
      textValue(
        body.email,
      ).toLowerCase();

    const phone =
      textValue(body.phone);

    const interest =
      textValue(body.interest);

    const message =
      textValue(body.message);

    const website =
      textValue(body.website);

    /*
     * Honeypot.
     */
    if (website !== "") {
      return response
        .status(200)
        .json({
          message:
            "Consulta enviada correctamente.",
        });
    }

    /*
     * Esta API pertenece a ggmm.
     */
    if (
      businessUnit !== "ggmm"
    ) {
      return response
        .status(400)
        .json({
          message:
            "La unidad de negocio no es válida.",
        });
    }

    if (
      !name ||
      !email ||
      !interest ||
      !message
    ) {
      return response
        .status(400)
        .json({
          message:
            "Faltan campos obligatorios.",
        });
    }

    if (
      name.length < 2 ||
      name.length > 80
    ) {
      return response
        .status(400)
        .json({
          message:
            "El nombre ingresado no es válido.",
        });
    }

    if (
      company.length > 120
    ) {
      return response
        .status(400)
        .json({
          message:
            "El nombre del municipio u organización es demasiado largo.",
        });
    }

    if (
      !isValidEmail(email) ||
      email.length > 254
    ) {
      return response
        .status(400)
        .json({
          message:
            "El correo electrónico no es válido.",
        });
    }

    if (phone.length > 30) {
      return response
        .status(400)
        .json({
          message:
            "El teléfono ingresado no es válido.",
        });
    }

    if (
      !interest ||
      interest.length > 120
    ) {
      return response
        .status(400)
        .json({
          message:
            "El motivo de la consulta no es válido.",
        });
    }

    if (
      message.length < 10 ||
      message.length > 1500
    ) {
      return response
        .status(400)
        .json({
          message:
            "El mensaje debe tener entre 10 y 1500 caracteres.",
        });
    }

    const smtpPort = Number(
      SMTP_PORT || "587",
    );

    const smtpHost =
      SMTP_HOST ||
      "smtp.gmail.com";

    const smtpFrom =
      SMTP_FROM ||
      SMTP_USER;

    const transporter =
      nodemailer.createTransport({
        host: smtpHost,

        port: smtpPort,

        secure:
          smtpPort === 465,

        requireTLS:
          smtpPort === 587,

        auth: {
          user: SMTP_USER,
          pass: SMTP_APP_PASSWORD,
        },
      });

    await transporter.verify();

    const info =
      await transporter.sendMail({
        from:
          `"Formulario web ggmm" <${smtpFrom}>`,

        to: CONTACT_EMAIL_TO,

        replyTo: email,

        subject:
          `Nueva consulta web ggmm · ${interest}`,

        text: `
Nueva consulta desde la web de ggmm

Nombre: ${name}

Municipio / Organización:
${company || "No informado"}

Correo:
${email}

Teléfono:
${phone || "No informado"}

Motivo:
${interest}

Mensaje:

${message}
        `.trim(),

        html: `
<div
  style="
    max-width:680px;
    margin:0 auto;
    font-family:Arial,Helvetica,sans-serif;
    color:#211a18;
    line-height:1.6;
  "
>
  <div
    style="
      padding:26px;
      background:#681027;
      border-radius:16px 16px 0 0;
      color:#ffffff;
    "
  >
    <div
      style="
        font-size:12px;
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:2px;
        color:#e8c7ce;
      "
    >
      ggmm
    </div>

    <h1
      style="
        margin:8px 0 0;
        font-size:24px;
      "
    >
      Nueva consulta desde la web
    </h1>

    <p
      style="
        margin:8px 0 0;
        color:#f0dfe3;
      "
    >
      Gestión Gubernamental Municipal
    </p>
  </div>

  <div
    style="
      padding:26px;
      border:1px solid #ded3c6;
      border-top:0;
      border-radius:0 0 16px 16px;
      background:#ffffff;
    "
  >
    <p>
      <strong>Nombre:</strong>
      ${escapeHtml(name)}
    </p>

    <p>
      <strong>Municipio / Organización:</strong>
      ${escapeHtml(
        company || "No informado",
      )}
    </p>

    <p>
      <strong>Correo:</strong>

      <a
        href="mailto:${escapeHtml(
          email,
        )}"
        style="color:#8d1430;"
      >
        ${escapeHtml(email)}
      </a>
    </p>

    <p>
      <strong>Teléfono:</strong>
      ${escapeHtml(
        phone || "No informado",
      )}
    </p>

    <div
      style="
        margin-top:22px;
        padding:16px;
        background:#f8f1ed;
        border-left:4px solid #a51f37;
        border-radius:8px;
      "
    >
      <strong>
        Motivo de la consulta
      </strong>

      <p style="margin-bottom:0;">
        ${escapeHtml(
          interest,
        )}
      </p>
    </div>

    <div
      style="
        margin-top:18px;
        padding:18px;
        background:#f5f0e8;
        border-radius:10px;
      "
    >
      <strong>Mensaje</strong>

      <p
        style="
          margin-bottom:0;
          white-space:pre-wrap;
        "
      >
        ${escapeHtml(message)}
      </p>
    </div>
  </div>
</div>
        `,
      });

    console.log(
      "Correo ggmm enviado:",
      {
        messageId:
          info.messageId,

        accepted:
          info.accepted,

        rejected:
          info.rejected,
      },
    );

    return response
      .status(200)
      .json({
        message:
          "Consulta enviada correctamente.",
      });

  } catch (error) {
    console.error(
      "Error enviando correo ggmm:",
      error,
    );

    return response
      .status(500)
      .json({
        message:
          "No fue posible enviar la consulta. Intentá nuevamente más tarde.",
      });
  }
}
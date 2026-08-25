<?php

/**
 * ggmm - FORMULARIO DE CONTACTO
 *
 * Compatible con PHP 5.5.
 * PHPMailer 6.x mediante Composer 2.2 LTS.
 */

use PHPMailer\PHPMailer\PHPMailer;

require_once dirname(__DIR__) . '/vendor/autoload.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

function respond($status, $message)
{
    http_response_code($status);

    echo json_encode(
        array(
            'message' => $message
        ),
        JSON_UNESCAPED_UNICODE
    );

    exit;
}

function textValue($value)
{
    return trim((string) $value);
}

function escapeHtml($value)
{
    return htmlspecialchars(
        (string) $value,
        ENT_QUOTES,
        'UTF-8'
    );
}

/*
 * Únicamente POST.
 */
if (
    !isset($_SERVER['REQUEST_METHOD']) ||
    $_SERVER['REQUEST_METHOD'] !== 'POST'
) {
    header('Allow: POST');

    respond(
        405,
        'Método no permitido.'
    );
}

$rawBody = file_get_contents(
    'php://input'
);

if (
    $rawBody === false ||
    trim($rawBody) === ''
) {
    respond(
        400,
        'No se recibieron datos.'
    );
}

$data = json_decode(
    $rawBody,
    true
);

if (!is_array($data)) {
    respond(
        400,
        'Los datos enviados no son válidos.'
    );
}

/*
 * Campos.
 */
$businessUnit = textValue(
    isset($data['businessUnit'])
        ? $data['businessUnit']
        : ''
);

$name = textValue(
    isset($data['name'])
        ? $data['name']
        : ''
);

$company = textValue(
    isset($data['company'])
        ? $data['company']
        : ''
);

$email = strtolower(
    textValue(
        isset($data['email'])
            ? $data['email']
            : ''
    )
);

$phone = textValue(
    isset($data['phone'])
        ? $data['phone']
        : ''
);

$interest = textValue(
    isset($data['interest'])
        ? $data['interest']
        : ''
);

$message = textValue(
    isset($data['message'])
        ? $data['message']
        : ''
);

$website = textValue(
    isset($data['website'])
        ? $data['website']
        : ''
);

/*
 * Honeypot.
 */
if ($website !== '') {
    respond(
        200,
        'Consulta enviada correctamente.'
    );
}

/*
 * Esta landing pertenece exclusivamente
 * a Gestión Gubernamental Municipal.
 */
if ($businessUnit !== 'ggmm') {
    respond(
        400,
        'La unidad de negocio no es válida.'
    );
}

/*
 * Obligatorios.
 */
if (
    $name === '' ||
    $email === '' ||
    $interest === '' ||
    $message === ''
) {
    respond(
        400,
        'Faltan campos obligatorios.'
    );
}

/*
 * Validaciones.
 */
if (
    strlen($name) < 2 ||
    strlen($name) > 80
) {
    respond(
        400,
        'El nombre ingresado no es válido.'
    );
}

if (strlen($company) > 120) {
    respond(
        400,
        'El nombre del municipio u organización es demasiado largo.'
    );
}

if (
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    ) ||
    strlen($email) > 254
) {
    respond(
        400,
        'El correo electrónico no es válido.'
    );
}

if (strlen($phone) > 30) {
    respond(
        400,
        'El teléfono ingresado no es válido.'
    );
}

if (strlen($interest) > 120) {
    respond(
        400,
        'El motivo de la consulta no es válido.'
    );
}

if (
    strlen($message) < 10 ||
    strlen($message) > 1500
) {
    respond(
        400,
        'El mensaje debe tener entre 10 y 1500 caracteres.'
    );
}

/*
 * Configuración SMTP privada.
 */
$configPath =
    __DIR__ .
    '/mail-config.php';

if (!is_file($configPath)) {
    error_log(
        'ggmm contacto: no existe api/mail-config.php'
    );

    respond(
        500,
        'El servicio de correo todavía no está configurado.'
    );
}

$config = require $configPath;

if (!is_array($config)) {
    error_log(
        'ggmm contacto: mail-config.php no devolvió un array.'
    );

    respond(
        500,
        'El servicio de correo todavía no está configurado.'
    );
}

$requiredConfig = array(
    'host',
    'port',
    'username',
    'password',
    'from_email',
    'from_name',
    'contact_to'
);

foreach ($requiredConfig as $key) {
    if (
        !isset($config[$key]) ||
        trim(
            (string) $config[$key]
        ) === ''
    ) {
        error_log(
            'ggmm contacto: falta configuración SMTP: ' .
            $key
        );

        respond(
            500,
            'El servicio de correo todavía no está configurado.'
        );
    }
}

/*
 * Valores seguros para HTML.
 */
$safeName =
    escapeHtml($name);

$safeCompany =
    escapeHtml(
        $company !== ''
            ? $company
            : 'No informado'
    );

$safeEmail =
    escapeHtml($email);

$safePhone =
    escapeHtml(
        $phone !== ''
            ? $phone
            : 'No informado'
    );

$safeInterest =
    escapeHtml($interest);

$safeMessage =
    nl2br(
        escapeHtml($message)
    );

/*
 * Mail.
 */
$mail =
    new PHPMailer(true);

try {
    $mail->isSMTP();

    $mail->Host =
        (string) $config['host'];

    $mail->Port =
        (int) $config['port'];

    $mail->SMTPAuth = true;

    $mail->Username =
        (string) $config['username'];

    $mail->Password =
        (string) $config['password'];

    /*
     * Gmail 587 + STARTTLS.
     */
    $mail->SMTPSecure = 'tls';

    $mail->CharSet = 'UTF-8';

    /*
     * Remitente SMTP real.
     */
    $mail->setFrom(
        (string) $config['from_email'],
        (string) $config['from_name']
    );

    /*
     * Destinatario interno.
     */
    $mail->addAddress(
        (string) $config['contact_to']
    );

    /*
     * Responder al visitante.
     */
    $mail->addReplyTo(
        $email,
        $name
    );

    $mail->isHTML(true);

    $mail->Subject =
        'Nueva consulta desde la web ggmm - ' .
        $interest;

    /*
     * HTML.
     */
    $mail->Body = '
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Nueva consulta desde ggmm</title>
</head>

<body style="
    margin:0;
    padding:24px;
    background:#f5f0e8;
">

    <div style="
        max-width:680px;
        margin:0 auto;
        font-family:Arial,Helvetica,sans-serif;
        color:#211a18;
        line-height:1.6;
    ">

        <div style="
            padding:26px;
            background:#681027;
            color:#ffffff;
            border-radius:16px 16px 0 0;
        ">

            <div style="
                font-size:12px;
                font-weight:bold;
                text-transform:uppercase;
                letter-spacing:2px;
                color:#e8c7ce;
            ">
                ggmm
            </div>

            <h1 style="
                margin:8px 0 0;
                font-size:24px;
            ">
                Nueva consulta desde la web
            </h1>

            <p style="
                margin:8px 0 0;
                color:#f0dfe3;
            ">
                Gestión Gubernamental Municipal
            </p>

        </div>

        <div style="
            padding:26px;
            background:#ffffff;
            border:1px solid #ded3c6;
            border-top:0;
            border-radius:0 0 16px 16px;
        ">

            <p>
                <strong>Nombre:</strong>
                ' . $safeName . '
            </p>

            <p>
                <strong>Municipio / Organización:</strong>
                ' . $safeCompany . '
            </p>

            <p>
                <strong>Correo:</strong>
                <a
                    href="mailto:' . $safeEmail . '"
                    style="color:#8d1430;"
                >
                    ' . $safeEmail . '
                </a>
            </p>

            <p>
                <strong>Teléfono:</strong>
                ' . $safePhone . '
            </p>

            <div style="
                margin-top:22px;
                padding:16px;
                background:#f8f1ed;
                border-left:4px solid #a51f37;
                border-radius:8px;
            ">

                <div style="
                    font-size:11px;
                    font-weight:bold;
                    text-transform:uppercase;
                    letter-spacing:1px;
                    color:#8d1430;
                ">
                    Motivo de la consulta
                </div>

                <p style="
                    margin:6px 0 0;
                    font-weight:bold;
                ">
                    ' . $safeInterest . '
                </p>

            </div>

            <div style="
                margin-top:18px;
                padding:18px;
                background:#f5f0e8;
                border-radius:10px;
            ">

                <strong>Mensaje</strong>

                <p style="
                    margin-bottom:0;
                ">
                    ' . $safeMessage . '
                </p>

            </div>

        </div>

    </div>

</body>
</html>';

    /*
     * Texto plano.
     */
    $mail->AltBody =
        "Nueva consulta desde la web de ggmm\r\n\r\n" .
        "Nombre: " .
        $name .
        "\r\n" .

        "Municipio / Organización: " .
        (
            $company !== ''
                ? $company
                : 'No informado'
        ) .
        "\r\n" .

        "Correo: " .
        $email .
        "\r\n" .

        "Teléfono: " .
        (
            $phone !== ''
                ? $phone
                : 'No informado'
        ) .
        "\r\n" .

        "Motivo: " .
        $interest .
        "\r\n\r\n" .

        "Mensaje:\r\n" .
        $message;

    /*
     * Un solo envío.
     */
    $mail->send();

    respond(
        200,
        'Consulta enviada correctamente.'
    );

} catch (\Exception $error) {

    error_log(
        'ggmm contacto - error: ' .
        $error->getMessage() .
        ' | PHPMailer: ' .
        $mail->ErrorInfo
    );

    respond(
        500,
        'No fue posible enviar la consulta. Intentá nuevamente.'
    );
}
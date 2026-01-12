<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "Datos vacíos"
    ]);
    exit;
}

// Campos del formulario
$nombre  = strip_tags($data["name"] ?? "");
$empresa = strip_tags($data["company"] ?? "");
$email   = strip_tags($data["email"] ?? "");
$telefono= strip_tags($data["phone"] ?? "");
$mensaje = strip_tags($data["message"] ?? "");

// Validación mínima
if ($nombre === "" || $email === "" || $mensaje === "") {
    echo json_encode([
        "status" => "error",
        "message" => "Faltan campos obligatorios"
    ]);
    exit;
}

// 📌 Correo destino (tú)
$destinatario = "comercial@sinergiasgi.com";
$asunto = "Nuevo contacto web – " . $nombre;

// 📧 Cuerpo HTML
$cuerpo  = "<html><body>";
$cuerpo .= "<h2>Nuevo contacto desde la web Sinergia</h2>";
$cuerpo .= "<p><strong>Nombre:</strong> {$nombre}</p>";
$cuerpo .= "<p><strong>Empresa:</strong> {$empresa}</p>";
$cuerpo .= "<p><strong>Email:</strong> {$email}</p>";
$cuerpo .= "<p><strong>Teléfono:</strong> {$telefono}</p>";
$cuerpo .= "<p><strong>Mensaje:</strong><br>{$mensaje}</p>";
$cuerpo .= "<hr>";
$cuerpo .= "<p><small>Enviado desde sinergiasgi.com</small></p>";
$cuerpo .= "</body></html>";

// 📌 Headers IMPORTANTES (clave del éxito)
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";

// ⚠️ From DEBE ser del dominio
$headers .= "From: Sinergia Web <comercial@sinergiasgi.com>\r\n";

// Para responder directamente al cliente
$headers .= "Reply-To: {$email}\r\n";

if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Mensaje enviado correctamente"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "No se pudo enviar el mensaje"
    ]);
}

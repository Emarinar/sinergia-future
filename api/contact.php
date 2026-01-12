<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "message" => "Método no permitido"]);
  exit;
}

// Leer body JSON
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$name = trim($data["name"] ?? "");
$company = trim($data["company"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$message = trim($data["message"] ?? "");

// Validaciones mínimas
if ($name === "" || $email === "" || $message === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => "Faltan campos obligatorios (nombre, correo, mensaje)."]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => "Correo inválido."]);
  exit;
}

// Destino
$to = "comercial@sinergiasgi.com";
$subject = "Nueva solicitud desde sinergiasgi.com — " . $name;

// Construir mensaje
$body = "Nueva solicitud de contacto:\n\n";
$body .= "Nombre: $name\n";
$body .= "Empresa: $company\n";
$body .= "Correo: $email\n";
$body .= "Teléfono: $phone\n\n";
$body .= "Mensaje:\n$message\n\n";
$body .= "IP: " . ($_SERVER["REMOTE_ADDR"] ?? "N/A") . "\n";
$body .= "Fecha: " . date("Y-m-d H:i:s") . "\n";

// Cabeceras
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
// OJO: From debe ser del mismo dominio para evitar spam
$headers[] = "From: Sinergia Web <no-reply@sinergiasgi.com>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(["ok" => true, "message" => "Enviado correctamente."]);
} else {
  http_response_code(500);
  echo json_encode(["ok" => false, "message" => "No se pudo enviar. Revisa la configuración de correo del servidor."]);
}

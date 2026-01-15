<?php
/**
 * enviar.php — Sinergia Consultoría SGI
 * Recibe JSON por POST y envía correo a comercial@sinergiasgi.com
 * Compatible con:
 * - Formulario Contact.jsx (name/company/email/phone/message)
 * - LeadMagnet.jsx (nombre/empresa/email/tipo/source/pdf_url/utm...)
 *
 * Recomendación: deja este archivo en la raíz del hosting (public_html/enviar.php)
 */

declare(strict_types=1);

// ---------- CORS + JSON ----------
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["status" => "error", "message" => "Método no permitido. Usa POST."]);
  exit;
}

// ---------- Helpers ----------
function clean_str($v): string {
  $v = is_string($v) ? $v : "";
  $v = trim($v);
  $v = strip_tags($v);
  // evita saltos de línea en headers (header injection)
  $v = str_replace(["\r", "\n"], " ", $v);
  return $v;
}

function clean_long($v): string {
  $v = is_string($v) ? $v : "";
  $v = trim($v);
  $v = strip_tags($v);
  return $v;
}

function is_valid_email($email): bool {
  return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function respond(int $code, array $payload): void {
  http_response_code($code);
  echo json_encode($payload);
  exit;
}

// ---------- Read JSON ----------
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
  respond(400, ["status" => "error", "message" => "JSON inválido o vacío"]);
}

// ---------- Normaliza campos (acepta ambos formatos) ----------
$nombre   = clean_str($data["name"]    ?? $data["nombre"]   ?? "");
$empresa  = clean_str($data["company"] ?? $data["empresa"]  ?? "");
$email    = clean_str($data["email"]   ?? "");
$telefono = clean_str($data["phone"]   ?? $data["telefono"] ?? "");
$mensaje  = clean_long($data["message"] ?? $data["mensaje"] ?? "");

// Extras (Lead magnet / tracking)
$tipo     = clean_str($data["tipo"]   ?? "");
$source   = clean_str($data["source"] ?? "");
$pdf_url  = clean_str($data["pdf_url"] ?? "");
$page     = clean_str($data["page"] ?? "");

$utm_source   = clean_str($data["utm_source"] ?? "");
$utm_medium   = clean_str($data["utm_medium"] ?? "");
$utm_campaign = clean_str($data["utm_campaign"] ?? "");
$utm_content  = clean_str($data["utm_content"] ?? "");
$utm_term     = clean_str($data["utm_term"] ?? "");

// ---------- Validación mínima ----------
if ($nombre === "" || $email === "") {
  respond(400, ["status" => "error", "message" => "Faltan campos obligatorios (nombre y email)."]);
}
if (!is_valid_email($email)) {
  respond(400, ["status" => "error", "message" => "Correo inválido."]);
}

// Si viene de Contact.jsx normalmente hay mensaje; si viene de LeadMagnet puede venir "mensaje" genérico
if ($mensaje === "" && $tipo === "") {
  respond(400, ["status" => "error", "message" => "Falta el mensaje o el tipo de solicitud."]);
}

// ---------- Config correo ----------
$destinatario = "comercial@sinergiasgi.com";

// Asunto inteligente según tipo
if ($tipo === "revista") {
  $asunto = "Lead – Revista Sinergia – " . $nombre;
} else {
  $asunto = "Nuevo contacto web – " . $nombre;
}

// From debe ser del dominio (clave en cPanel)
$from_email = "comercial@sinergiasgi.com";
$from_name  = "Sinergia Web";

// ---------- Cuerpo HTML ----------
date_default_timezone_set("America/Bogota");
$fecha = date("Y-m-d H:i:s");

$cuerpo  = "<html><body style='font-family:Arial,sans-serif; color:#111; line-height:1.45;'>";
$cuerpo .= "<h2 style='margin:0 0 12px;'>Nuevo contacto desde la web Sinergia</h2>";
$cuerpo .= "<p style='margin:0 0 10px; color:#444;'><small><strong>Fecha:</strong> {$fecha}</small></p>";

$cuerpo .= "<table cellpadding='6' cellspacing='0' style='border-collapse:collapse; width:100%; max-width:720px;'>";
$cuerpo .= row("Nombre", $nombre);
$cuerpo .= row("Empresa", $empresa !== "" ? $empresa : "—");
$cuerpo .= row("Email", $email);
$cuerpo .= row("Teléfono", $telefono !== "" ? $telefono : "—");
$cuerpo .= row("Tipo", $tipo !== "" ? $tipo : "contacto");
$cuerpo .= row("Fuente", $source !== "" ? $source : "web");
if ($pdf_url !== "") $cuerpo .= row("PDF", $pdf_url);
if ($page !== "") $cuerpo .= row("Página", $page);
$cuerpo .= "</table>";

$cuerpo .= "<div style='margin-top:14px; padding:12px; border:1px solid #e5e7eb; border-radius:10px; background:#fafafa;'>";
$cuerpo .= "<p style='margin:0 0 6px; font-weight:bold;'>Mensaje</p>";
$cuerpo .= "<p style='margin:0; white-space:pre-wrap;'>" . nl2br(htmlspecialchars($mensaje)) . "</p>";
$cuerpo .= "</div>";

if ($utm_source || $utm_medium || $utm_campaign || $utm_content || $utm_term) {
  $cuerpo .= "<div style='margin-top:14px;'>";
  $cuerpo .= "<p style='margin:0 0 6px; font-weight:bold;'>UTM</p>";
  $cuerpo .= "<ul style='margin:0; padding-left:18px; color:#333;'>";
  if ($utm_source)   $cuerpo .= "<li>utm_source: {$utm_source}</li>";
  if ($utm_medium)   $cuerpo .= "<li>utm_medium: {$utm_medium}</li>";
  if ($utm_campaign) $cuerpo .= "<li>utm_campaign: {$utm_campaign}</li>";
  if ($utm_content)  $cuerpo .= "<li>utm_content: {$utm_content}</li>";
  if ($utm_term)     $cuerpo .= "<li>utm_term: {$utm_term}</li>";
  $cuerpo .= "</ul>";
  $cuerpo .= "</div>";
}

$cuerpo .= "<hr style='margin:18px 0; border:none; border-top:1px solid #e5e7eb;'/>";
$cuerpo .= "<p style='margin:0; color:#6b7280; font-size:12px;'>Enviado desde sinergiasgi.com</p>";
$cuerpo .= "</body></html>";

// Helper para filas (evita repetir)
function row(string $k, string $v): string {
  $k = htmlspecialchars($k, ENT_QUOTES, "UTF-8");
  $v = htmlspecialchars($v, ENT_QUOTES, "UTF-8");
  return "<tr>
    <td style='border:1px solid #e5e7eb; background:#f9fafb; font-weight:bold; width:160px;'>{$k}</td>
    <td style='border:1px solid #e5e7eb;'>{$v}</td>
  </tr>";
}

// ---------- Headers ----------
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";

// (Opcional) Mejora entregabilidad (algunos servidores lo respetan)
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Envelope sender (muy útil en cPanel para SPF/DMARC)
$additional_params = "-f {$from_email}";

// ---------- Envío ----------
$ok = @mail($destinatario, $asunto, $cuerpo, $headers, $additional_params);

if ($ok) {
  respond(200, ["status" => "success", "message" => "Mensaje enviado"]);
}

respond(500, ["status" => "error", "message" => "No se pudo enviar (mail() falló)"]);

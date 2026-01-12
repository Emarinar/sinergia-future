<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
  echo json_encode(["status" => "error", "message" => "Datos vacíos"]);
  exit;
}

$nombre  = strip_tags($data->nombre ?? "");
$empresa = strip_tags($data->empresa ?? "");
$email   = strip_tags($data->email ?? "");
$lead    = strip_tags($data->lead ?? "Lead Magnet");
$origen  = strip_tags($data->origen ?? "");

if (empty($nombre) || empty($email)) {
  echo json_encode(["status" => "error", "message" => "Nombre y correo son obligatorios"]);
  exit;
}

$destinatario = "comercial@sinergiasgi.com";
$asunto = "Nuevo Lead: $lead - $nombre";

$cuerpo = "<html><body>";
$cuerpo .= "<h2>Nuevo lead desde la web</h2>";
$cuerpo .= "<p><strong>Lead:</strong> {$lead}</p>";
$cuerpo .= "<p><strong>Nombre:</strong> {$nombre}</p>";
$cuerpo .= "<p><strong>Empresa:</strong> {$empresa}</p>";
$cuerpo .= "<p><strong>Email:</strong> {$email}</p>";
$cuerpo .= "<p><strong>Origen:</strong> {$origen}</p>";
$cuerpo .= "<hr>";
$cuerpo .= "<p>Acción recomendada: contactar y ofrecer diagnóstico / plan.</p>";
$cuerpo .= "</body></html>";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: comercial@sinergiasgi.com\r\n";
$headers .= "Reply-To: {$email}\r\n";

if (mail($destinatario, $asunto, $cuerpo, $headers)) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error", "message" => "No se pudo enviar el correo"]);
}

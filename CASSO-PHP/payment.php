<?php
require_once __DIR__ . '/vendor/autoload.php';

use PayOS\PayOS;

$HOST = ($_SERVER['HTTPS'] ? 'https://' : 'http://') . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'];

$payOS = new PayOS('486088ac-32ec-4b2c-9d91-a7aac8cd18a6', 'd357ac2d-9a13-49e0-b8e8-553a52835ec9', 'ead873638ccd32545a7c9abb5746d9580433ae4c146740e002dbda27b0a379f1');
$data = [
      "orderCode" => intval(substr(strval(microtime(true) * 10000), -6)),
      "amount" => 10000,
      "description" => "CASSO ENTRY TEST",
      "returnUrl" => $HOST . '/',
      "cancelUrl" => $HOST . '/',
      "items" => [["name" => "Bí Mật Của May Mắn", "quantity" => 1, "price" => 10000]]
];

try {
      $response = $payOS->createPaymentLink($data);
      header("Location: " . $response['checkoutUrl']);
} catch (\Throwable $th) {
      return $th->getMessage();
}

<?php
// ===== CORS =====
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ===== TERIMA DATA =====
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    file_put_contents('log.txt', $data . "\n", FILE_APPEND);
    echo "OK";
    exit();
}

// ===== TESTING (GET) =====
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "Server is running!";
    exit();
}

// ===== DEFAULT =====
http_response_code(405);
echo "Method Not Allowed";
?>

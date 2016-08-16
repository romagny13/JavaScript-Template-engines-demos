<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

$result = [
    [
        "id" => 1,
        "title" => "Premier article php",
        "excerpt" => "Aperçu article 1",
        "content" => "Contenu 1"
    ],
    [
        "id" => 2,
        "title" => "Second article php",
        "excerpt" => "Aperçu article 2",
        "content" => "Contenu 2"
    ]
];

echo json_encode($result);
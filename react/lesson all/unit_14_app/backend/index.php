<?php
header("Access-Control-Allow-Origin: *");

$data = file_get_contents('./omar.txt');
// $content = trim(file_get_contents("php://input"));
echo $data;

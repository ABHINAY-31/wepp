<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config/database.php';
    include_once '../class/client.php';

    $database = new Database();
    $db = $database->getConnection();

    
    $item = new client($db);

    $data = json_decode(file_get_contents("php://input"));

    $item->user = $data->user;
    $item->mobileNumber = $data->mobileNumber;
    $item->emails = $data->emails;
    $item->Dream = $data->Dream;
    
    if($item->createPatient()){
        echo 'Your record is submitted.';
    } else{
        echo '** error .. try again please **';
    }
?>
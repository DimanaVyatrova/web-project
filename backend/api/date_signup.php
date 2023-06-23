<?php
    //require_once("../db/db.php");

    $userData = json_decode(file_get_contents("php://input"), true);
    //var_dump($userData);

    //echo json_encode(array("name" => "didi", "age" => "midi"));

    echo json_encode($userData);
?>
<?php
    require_once("../db/db.php");

    $userData = json_decode(file_get_contents("php://input"), true);

    $db = new DB();
    $connection = $db->getConnection();

    $sql = "SELECT * from students WHERE name = :name AND faculty_number = :faculty_number";
    
    $stmt = $connection->prepare($sql);
   
    $stmt->execute($userData);

    $presentations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($presentations);
?>
<?php
    require_once("../db/db.php");

    $userData = json_decode(file_get_contents("php://input"), true);

    $db = new DB();
    $connection = $db->getConnection();

    $sql = "SELECT * from presentations WHERE date = :date AND field = :field AND technology = :technology";

    $stmt = $connection->prepare($sql);
    //$stmt->execute(["date" => "12.05.23"]);
    $stmt->execute($userData);

    $presentations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($presentations);
?>
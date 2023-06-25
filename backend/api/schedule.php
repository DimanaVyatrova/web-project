<?php
    require_once("../db/db.php");

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $userData = json_decode(file_get_contents("php://input"), true);

        $sql = "SELECT * FROM presentations WHERE date=:date";

        $stmt = $connection->prepare($sql);
        //$stmt->execute(["date" => "12.05.23"]);
        $stmt->execute($userData);

        $presentations = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($presentations);

        // $result = $connection->query($sql);

        // $rows = $result->fetchAll(PDO::FETCH_ASSOC);

        // echo json_encode($rows);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при извличане от базата!"]);
    }

?>
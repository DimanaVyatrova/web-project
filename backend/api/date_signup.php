<?php
    require_once("../db/db.php");

    $userData = json_decode(file_get_contents("php://input"), true);

    try {

        $db = new DB();
        $connection = $db->getConnection();

         $sql = "INSERT INTO presentations (name, faculty_number, topic, date, hour, field, technology) 
                 VALUES (:name, :faculty_number, :topic, :date, :hour, :field, :technology)";

        $stmt = $connection->prepare($sql);
        $stmt->execute($userData);

        echo json_encode(["status" => "SUCCESS", "message" => "Успешно записахте час за представяне на презентация."]);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при запис в базата!"]);
    }
?>
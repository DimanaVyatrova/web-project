<?php
    require_once("../db/db.php");

    $userData = json_decode(file_get_contents("php://input"), true);
    //var_dump($userData);

    //echo json_encode(array("name" => "didi", "age" => "midi"));

    try {

        $db = new DB();
        $connection = $db->getConnection();

        //$roles_id = getUsersRoleId($connection);
        //$userData += ["roles_id" => $roles_id];
        // $userDataSQL = ["name" => $userData["name"], "faculty-number" => $userData["faculty-number"], "topic" => $userData["topic"],
        // "date" => $userData["date"], "hour" => $userData["hour"]];

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
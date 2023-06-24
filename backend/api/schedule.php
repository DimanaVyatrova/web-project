<?php
    require_once("../db/db.php");

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $sql = "SELECT * FROM presentations";

        $result = $connection->query($sql);

        $rows = $result->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($rows);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при извличане от базата!"]);
    }

?>
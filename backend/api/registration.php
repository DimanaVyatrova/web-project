<?php

    require_once("../db/db.php");

    function isUserDataValid($userData) {
        if (!isset($userData["email"]) || !isset($userData["password"])
         || !isset($userData['username']) || !isset($userData['repeat-password'])) {
            return ["isValid" => false, "message" => "Некоректни данни!"];
        }

        if ($userData['password'] !== $userData['repeat-password']) {
            return ["isValid" => false, "message" => "Паролите не съвпадат!"];
        }

        $regex = "/^[a-z0-9_]+@[a-z]+\.[a-z]+$/";

        if (!preg_match($regex, $userData["email"])) {
            return ["isValid" => false, "message" => "Невалиден имейл!"];
        }

        return ["isValid" => true, "message" => "Данните са валидни!"];
    }

    $userData = json_decode(file_get_contents("php://input"), true);
    //var_dump($userData);

    if ($userData) {

        $valid = isUserDataValid($userData);

        if (!$valid["isValid"]) {
            http_response_code(400);

            exit(json_encode(["status" => "ERROR", "message" => $valid["message"]]));
        }

        $userData["password"] = password_hash($userData["password"], PASSWORD_DEFAULT);

        try {

            $db = new DB();
            $connection = $db->getConnection();

            //$roles_id = getUsersRoleId($connection);
            //$userData += ["roles_id" => $roles_id];
            $userDataSQL = ["email" => $userData["email"], "username" => $userData["username"], "password" => $userData["password"]];

            $sql = "INSERT INTO users (email, username, password) 
                    VALUES (:email, :username, :password)";



            $stmt = $connection->prepare($sql);
            $stmt->execute($userDataSQL);

            echo json_encode(["status" => "SUCCESS", "message" => "Регистрацията е успешна"]);

        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["status" => "ERROR", "message" => "Грешка при регистрация!"]);
        }


    } else {
        http_response_code(400);
        echo json_encode(["status" => "ERROR", "message" => "Некоректни данни! Моля попълнете всички полета!"]); 
    }

?>
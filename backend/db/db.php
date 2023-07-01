<?php

    class DB {

        public $connection;

        public function __construct() {
            $this->connection = new PDO("mysql:host=localhost:3306;dbname=calendar", "root", "");
        }

        public function getConnection() {
            return $this->connection;
        }

    }

?>
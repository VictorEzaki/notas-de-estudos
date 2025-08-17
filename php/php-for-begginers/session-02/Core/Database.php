<?php

namespace Core;

use PDO;
use Core\Router;

class Database
{
    public $connection;
    public $statement;

    public function __construct($config, $username = 'root', $password = '')
    {
        $dsn = 'mysql:' . str_replace(
            '&',
            ';',
            http_build_query($config)
        );
        $this->connection = new PDO($dsn, $username, $password, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }

    public function query($query, $params = [])
    {
        $this->statement = $this->connection->prepare($query);
        $this->statement->execute($params);

        return $this;
    }

    public function find()
    {
        return $this->statement->fetch();
    }

    public function findOrFail()
    {
        $result = $this->find();
        $router = new Router();
        if (!$result) {
            $router->abort();
        }

        return $result;
    }

    public function get()
    {
        return $this->statement->fetchAll();
    }
}

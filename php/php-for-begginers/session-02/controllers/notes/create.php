<?php

$config = require base_path('config.php');
$db = new Database($config['Database']);
$errors = [];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (! Validator::string( $_POST['body'], 1, 255 )) {
        $errors['body'] = 'A body of no more than 255 characters is required.';
    }

    if (empty($errors)) {
        $db->query('INSERT INTO note(body, id_user) VALUES(:body, :id_user)', [
            'body' => $_POST['body'],
            'id_user' => 1
        ]);
    }
}

require view("notes/create.view.php", [
    'heading' => 'Create note',
    'errors' => $errors
]);
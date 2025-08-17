<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);
$errors = [];

if (! Validator::string($_POST['body'], 1, 255)) {
    $errors['body'] = 'A body of no more than 255 characters is required.';
}

if (!empty($errors)) {
    return view("notes/create.view.php", [
        'heading' => 'Create note',
        'errors' => $errors
    ]);
}

if (empty($errors)) {
    $db->query('INSERT INTO note(body, id_user) VALUES(:body, :id_user)', [
        'body' => $_POST['body'],
        'id_user' => 1
    ]);

    header('location: /notes');
    die();
}

<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);

$currentUserID = 1;

$note = $db->query('SELECT * FROM note WHERE id_note = :id', ['id' => $_POST['id_note']])->findOrFail();

authorize($note['id_user'] === $currentUserID);

$errors = [];

if (! Validator::string($_POST['body'], 1, 255)) {
    $errors['body'] = 'A body of no more than 255 characters is required.';
}

if (count($errors)) {
    return view('notes/edit.view.php', [
        'heading' => 'Edit note',
        'errors' => $errors,
        'note' => $note
    ]);
}

$db->query('update note set body = :body where id_note = :id', [
    'id' => $_POST['id_note'],
    'body' => $_POST['body']
]);

header('location: /notes');
die();
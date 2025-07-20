<?php

$config = require base_path('config.php');
$db = new Database($config['Database']);

$currentUserID = 1;

$note = $db->query('SELECT * FROM note WHERE id_note = :id', ['id' => $_GET['id_note']])->findOrFail();

authorize($note['id_user'] === $currentUserID);

require view("notes/show.view.php", [
    'heading' => 'Note',
    'note' => $note
]);
<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$currentUserID = 1;

$note = $db->query('SELECT * FROM note WHERE id_note = :id', ['id' => $_GET['id_note']])->findOrFail();

authorize($note['id_user'] === $currentUserID);

view("notes/show.view.php", [
    'heading' => 'Note',
    'note' => $note
]);

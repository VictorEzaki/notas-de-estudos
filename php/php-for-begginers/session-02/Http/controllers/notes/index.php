<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$notes = $db->query('SELECT * FROM note WHERE id_user = 1;')->get();

view("notes/index.view.php", [
    'heading' => 'My note',
    'notes' => $notes
]);
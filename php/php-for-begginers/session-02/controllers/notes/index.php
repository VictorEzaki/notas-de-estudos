<?php

$config = require base_path('config.php');
$db = new Database($config['Database']);

$notes = $db->query('SELECT * FROM note WHERE id_user = 1;')->get();

require view("notes/index.view.php", [
    'heading' => 'My note',
    'notes' => $notes
]);
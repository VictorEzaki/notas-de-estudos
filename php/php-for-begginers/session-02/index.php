<?php

require 'functions.php';
require 'Database.php';
// require 'router.php';

$config = require 'config.php';

$db = new Database($config['Database']);

$id = $_GET['id'];
$query = "select * from post where id_post = :id";

$posts = $db->query($query, ["id" => $id])->fetch();

dd($posts);

// foreach($posts as $post) {
//     echo "<li>" . $post['title'] . " - " . $post['description'] . "</li>";
// }
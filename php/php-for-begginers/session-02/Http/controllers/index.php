<?php

$_SESSION['name'] = 'Victor';

view("index.view.php", [
    'heading' => 'Home'
]);

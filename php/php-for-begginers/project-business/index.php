<?php

$business = [
    'name' => 'Laracasts',
    'cost' => 15,
    'categories' => ["Testing", "PHP", "JavaScript"]
];

require 'functions.php';

function register($user)
{
    // Create user record
    // Sign in user
    // Send welcome email
    // Redirect to dashboard
}

$heading = 'Home';

require "views/index.view.php";

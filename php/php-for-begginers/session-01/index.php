<?php
    $items = [
        [
            'name' => 'Do Androids Dream of Eletric Sheep',
            'author' => 'Philip K. Dick',
            'releaseYear' => 1968,
            'url' => 'https://example.com'
        ],
        [
            'name' => 'Porject Hail Mary',
            'author' => 'Andy Weir',
            'releaseYear' => 2021,
            'url' => 'https://example.com'
        ],
        [
            'name' => 'The Martian',
            'author' => 'Andy Weir',
            'releaseYear' => 2011,
            'url' => 'https://example.com'
        ]
    ];

    $filteredBooks = array_filter($items, function ($book) {
        return $book['releaseYear'] < 2000;
    });

    require "index.view.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <ul>
        <?php $i = 0; ?>
        <?php foreach ($filteredBooks as $book) : ?>
            <li>
                <a href="<?= $book['url'] ?>">
                    <?= $book['name']; ?> (<?= $book['releaseYear']; ?>) - By <?= $book['author']; ?>
                </a>
            </li>
        <?php endforeach ?>
    </ul>

</body>
</html>
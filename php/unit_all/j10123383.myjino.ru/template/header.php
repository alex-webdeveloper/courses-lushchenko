<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project PHP</title>
     <link rel="shortcut icon" href="/static/images/favicon.ico" type="image/ico">
    <link rel="stylesheet" href="/static/css/bootstrap.min.css">
    <link rel="stylesheet" href="/static/css/style.css">
</head>

<body>
    <header>
        <nav class="d-flex justify-content-center align-items-center m-3">
            <h1><a class="nav-link" href="/">Новости спорта</a></h1>

            <div class="dropdown btn-group">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Category</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <?php
                    $query = 'select url from category';
                    $categ = select($query);
                    $outHead = '';
                    for ($i = 0; $i < count($categ); $i++) {
                        $outHead .= '<a class="dropdown-item" href="/category/' . $categ[$i]['url'] . '">' . $categ[$i]['url'] . '</a>';
                    }
                    echo $outHead; ?>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 bg-secondary">
                <aside>
                    <nav class="nav flex-column align-items-center mt-5 mb-3">
                        <a class="m-2" href="/register">Регистрация</a>
                        <a href="/login">Login</a>
                    </nav>
                </aside>
            </div>
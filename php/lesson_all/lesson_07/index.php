<!-- ФОРМЫ В PHP. GET, POST -->
<!-- метод GET по умолчанию, POST нужно указывать в форме -->
<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ФОРМЫ В PHP. GET, POST. Unit 07</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <h1>Unit 07. Работа с формами</h1>
        <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
                Александра</a></h2>
        <section>
            <h2>method=POST</h2>
            <form action="form_handler.php" method="POST">
                <div><label for="">Name: <input type="text" name="user" value="Pupkin"></label></div>
                <div><label for="">Pass: <input type="text" name="pass" value="qwerty123"></label></div>
                <div><input type="submit" class="get-started button button-primary button-large" value="Push"></div>
            </form>
            <section>
                <h2>method=GET</h2>
                <form action="form_handler.php">
                    <div><label for="">Name: <input type="text" name="user" value="Pupkin"></label></div>
                    <div><label for="">Pass: <input type="text" name="pass" value="qwerty123"></label></div>
                    <div><input type="submit" class="get-started button button-primary button-large" value="Push"></div>
                </form>
            </section>

    </div>
</body>

</html>
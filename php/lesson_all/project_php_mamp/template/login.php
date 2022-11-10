<?php

/**
 * login page template
 */
$out = '';
if (isset($_POST['submit'])) {
    $user = login($_POST['login'], $_POST['password']);
    // var_dump($user);
    if ($user) {
        $user = $user[0];
        $hash = md5(generateCode(10));
        $ip = null;
        if (!empty($_POST['ip'])) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        var_dump($ip);
        updateUser($user['id'], $hash, $ip);
        setcookie('id', $user['id'], time() + 60 * 60 * 24 * 30, "/");
        setcookie('hash', $hash, time() + 60 * 60 * 24 * 30, "/");
        header("Location: " . SETEURL . "/admin");
        exit();
    } else {
        $out = 'Вы неправильно ввели логин или пароль!';
    }
}
require_once 'header.php';
?>

<div class="col-sm-9">
    <main>
        <section>
            <h2>Логин</h2>
            <form method="POST">
                <div class="m-3">Login: <input type="text" name="login" autocomplete="username" required></div>
                <div class="m-3">Pass: <input type="password" name="password" autocomplete="current-password" required></div>
                <div class="m-3">Прикреплять к IP: <input type="checkbox" name="ip"></div>
                <div class="m-3"><input class="btn btn-primary" type="submit" name="submit" value="Войти"></div>
            </form>
            <div class="d-flex m-3">
                <a class="btn btn-primary" role="button" href="http://localhost:8888/project_php">Назад</a>
            </div>
            <?php echo $out; ?>
        </section>
    </main>
</div>
</div>
</div>
<?php require_once 'footer.php'; ?>
<?php

/**
 * register page template
 */
// var_dump(isset($_POST['submit']));
// var_dump($_POST['submit']);
$out = '';
if (isset($_POST['submit'])) {
    $err = [];
    $log = trim($_POST['login']);
    $pas = trim($_POST['password']);
    if (strlen($log) < 4 or strlen($log) > 30) {
        $err[] = "Логин не меньше 4 и не больше 30";
    }
    if (isLoginExist($log)) {
        $err[] = "Логин существует";
    }
    if (strlen($pas) < 6) {
        $err[] = "Пароль не меньше 6";
    }
    if (count($err) === 0) {
        createUser($log, $pas);
        header('Location: ' . SETEURL . '/login');
        exit();
    } else {
        $out = '<h4>Ошибки регистрации</h4>';
        foreach ($err as $error) {
            $out .= $error . '<br>';
        }
    }
}

require_once 'header.php';
?>

<div class="col-sm-9">
    <main>
        <section>
            <h2>Регистрация</h2>

            <form method="POST">
                <div class="m-3">Login: <input type="text" name="login" autocomplete="username" required>
                    <small class="text-muted">
                        Логин не меньше 4 и не больше 30 символов
                    </small>
                </div>
                <div class="m-3">Pass: <input type="password" name="password" autocomplete="new-password" required>
                    <small class="text-muted">
                        Пароль не меньше 6 символов
                    </small>
                </div>
                <div class="m-3"><input class="btn btn-primary" type="submit" name="submit" value="Регистрация"></div>
            </form>
            <div class="d-flex m-3">
                <a class="btn btn-primary" role="button" href="http://localhost:8888/project_php_mamp">Назад</a>
            </div>
            <?php echo $out; ?>
        </section>
    </main>
</div>
</div>
</div>
<?php require_once 'footer.php'; ?>
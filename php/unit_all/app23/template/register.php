<?php
/**
 * register page template
 */
if (isset($_POST['submit'])){
    $err =[];
    if (strlen($_POST['login']) < 4 OR strlen($_POST['login'] > 30)) {
        $err[] = "Логин не меньше 4 и не больше 30";
    }
    if ( isLoginExist($_POST['login'])) {
        $err[] = "Логин существует";
    }
    if (count($err) === 0) {
        createUser($_POST['login'], $_POST['password']);
        header('Location: /login');
        exit();
    }
    else {
        echo '<h4>Ошибки регистрации</h4>';
        foreach ($err as $error) {
            echo $error.'<br>';
        }
    }
}
?>
<h2>Регистрация</h2>
<form method="POST">
    Login: <input type="text" name="login" required><br>
    Pass: <input type="text" name="password" required><br>
    <input type="submit" name="submit" value="Регистрация">
</form>

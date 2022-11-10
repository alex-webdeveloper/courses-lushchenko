<?php

function t1()
{
    if (isset($_GET['inp-1']) and trim($_GET['inp-1']) !== '') {
        return trim($_GET['inp-1']);
    }
    return false;
}

function t2()
{
    // используем функцию https://www.php.net/manual/en/function.max.php
    if (isset($_GET['inp-2-1']) and isset($_GET['inp-2-2']) and $_GET['inp-2-1'] !== '' and $_GET['inp-2-2'] !== '') {
        $inp1 = $_GET['inp-2-1'];
        $inp2 = $_GET['inp-2-2'];
        return  max($inp1, $inp2);
    }
    return false;
}

function t3()
{
    // тут ваш код
    if (isset($_GET['inp-3'])) {
        $inp = trim($_GET['inp-3']);
        if (strlen($inp) > 5) return 1;
        else return 0;
    }
    return false;
}

function t4()
{
    // тут ваш код
    if (isset($_GET['inp-4'])) {
        $inp = $_GET['inp-4'];
        if ((date("Y") - $inp) >= 18) return 1;
        else return 0;
    }
    return false;
}

function t5()
{
    // var_dump($_GET);
    // тут ваш код
    if (isset($_GET['i-5'])) {
        return 1;
    }
    return 0;
}

function t6()
{
    // тут ваш код
    if (isset($_GET['radio-1'])) {
        return $_GET['radio-1'];
    }
    return false;
}

function t7()
{
    // тут ваш код
    if (isset($_POST['radio-2'])) {
        return $_POST['radio-2'];
    }
    return false;
}

function t8()
{
    // тут ваш код
    if (isset($_POST['i-8'])) {
        return 1;
    }
    return 0;
}

function t9()
{
    // тут ваш код
    if (isset($_POST['i-9']) and trim($_POST['i-9']) !== '') {
        $inp = trim($_POST['i-9']);
        if (strpos($inp, '@') !== false) return 1;
        else return 0;
    }
    return false;
}

function t10()
{
    // тут ваш код
    if (isset($_POST['i-10']) and trim($_POST['i-10']) !== '') {
        return trim($_POST['i-10']);
    }
    return false;
}

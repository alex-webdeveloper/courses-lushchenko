<?php

function t1()
{
    /**
     * Поскольку мы еще не умеем работать с функциями
     * я объявил глобальные переменные $a, $b, $c
     * чтобы использовать их внутри функции, я использовал
     * gloabal - теперь $a, $b, $c  внутри и снаружи функции - это одни и те же переменные
     */
    global $a, $b, $c;
    // тут ваш код
    if ($a > $b) $c = $a;
    elseif ($a < $b) $c = $b;
    else $c = '';

    echo $c;
}

function t2()
{
    global $d, $e, $f;

    // тут ваш код
    //$f =  присваиваем результат
    if ($d > $e)  $f = $d;
    elseif ($d < $e)  $f = $e;
    else $f = '';

    echo $f;
}

function t3()
{
    global $k, $l;
    // тут проводите операции

    if ($k > $l) {
        $n = $k;
        $k = $l;
        $l = $n;
    } elseif ($k === $l) {
        $k = '';
        $l = '';
    }
}

function t4()
{
    global $s1, $s2, $maxString;
    // тут ваш код
    if (strlen($s1) > strlen($s2))  $maxString = $s1;
    elseif (strlen($s1) < strlen($s2)) $maxString = $s2;
    else $maxString = '';

    echo $maxString;
}

function t5()
{
    global $password, $successPass;

    if (strlen($password) >= 10)  $successPass = true;
    elseif ((strlen($password) < 10))  $successPass = false;

    echo ' ' . $successPass;
}

function t6()
{
    global $r1, $r2;

    if ($r1 >= 0 and $r1 <= 4) $r2 = 'and';
    else return false;

    echo 'Результат: ' . $r2;
}

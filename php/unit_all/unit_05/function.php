<?php

function t1()
{
    global $a, $b, $out1;
    // тут ваш код
    $out1 = '';
    $i = $a;
    while ($i <= $b) {
        $out1 .= $i . ' ';
        $i++;
    }

    echo $out1;
}

function t2()
{
    global $d, $e, $out2;

    // тут ваш код
    $out2 = '';
    $i = $d;
    while ($i <= $e) {
        $out2 .= $i . ' ';
        $i += 2;
    }

    echo $out2;
}

function t3()
{
    global $f, $g, $out3;
    // тут проводите операции
    $out3 = '';
    $i = $f;
    while ($i >= $g) {
        $out3 .= $i . ' ';
        $i -= 2;
    }

    echo $out3;
}

function t4()
{
    global $num1, $num2, $out4;
    // тут ваш код
    $out4 = '';
    if ($num1 > $num2) {
        $i = $num2;
        while ($i <= $num1) {
            $out4 .= $i . ' ';
            $i++;
        }
    } else {
        $i = $num1;
        while ($i <= $num2) {
            $out4 .= $i . ' ';
            $i++;
        }
    }
    echo $out4;
}

function t5()
{
    global $out5;
    $out5 = '';
    $i = 0;
    while ($i <= 5) {
        $out5 .= 5 - $i . ' ' . $i . ' ';
        $i++;
    }

    echo $out5;
}

function t6()
{
    global $out6, $k;
    $out6 = '';
    $i = 1;
    while ($i <= $k) {
        $out6 .= $i . ' * ';
        $i++;
    }

    echo $out6;
}

function t7()
{
    global $out7, $m;
    $out7 = '';
    $i = 1;
    while ($i <= $m) {
        if ($i % 2 === 0) $out7 .= $i . ' ** ';
        else $out7 .= $i . ' * ';
        $i++;
    }

    echo $out7;
}

function t8()
{
    global $out8, $n;
    $out8 = '';
    $i = 1;
    while ($i <= $n) {
        if ($i % 2 === 0)  $out8 .= 0 . ' ';
        else $out8 .= $i . ' ';
        $i++;
    }

    echo $out8;
}

function t9()
{
    global $out9;
    $out9 = '';
    $i = 0;
    while ($i < 3) {
        $out9 .= '***<br>';
        $i++;
    }

    echo $out9;
}

function t10()
{
    global $out10, $t;
    $out10 = '';
    $i = $t;
    while ($i <= 2020) {
        $out10 .= $i . ' ';
        $i += 2;
    }

    echo $out10;
}

function t11()
{
    global $out11, $num1, $num2;
    $out11 = 0;
    $i = $num1;
    while ($i <= $num2) {
        $out11 += $i;
        $i++;
    }

    echo $out11;
}

function t12()
{
    global $out12, $num4, $num5;
    $out12 = 1;
    $i = $num4;
    while ($i <= $num5) {
        $out12 *= $i;
        $i++;
    }

    echo $out12;
}

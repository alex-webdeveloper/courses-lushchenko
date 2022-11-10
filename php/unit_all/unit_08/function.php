<?php

function t1()
{
    $a = ['1', 2, true, false, 'hello'];
    return $a;
}

function t2()
{
    $a = [true, false];
    return $a;
}

function t3()
{
    $a = [];
    for ($i = 0; $i < 100; $i++) {
        $a[$i] = $i + 1;
    }
    return $a;
}

function t4()
{
    $a = [];
    $a[10] = 5;
    $a[15] = 11;
    return $a;
}

function t5($ar)
{
    return $ar[5];
}

function t6($ar)
{
    $num = $ar[2];
    $ar[2] = $ar[4];
    $ar[4] = $num;
    return $ar;
}

function t7($arr)
{
    $num = $arr[0];
    $arr[0] = $arr[count($arr) - 1];
    $arr[count($arr) - 1] = $num;
    return $arr;
}

function t8($arr)
{
    $num = '';
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < 0) {
            $num = $arr[$i];
            echo $num . '<br>';
            break;
        }
    }
    return $num;
}

function t9($arr)
{
    $num = '';
    for ($i = $arr[count($arr) - 1]; $i >= 0; $i--) {
        if ($arr[$i] < 0) {
            $num = $arr[$i];
            echo $num . '<br>';
            break;
        }
    }
    return $num;
}

function t10($num, $arr)
{
    $out = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($num === $arr[$i]) {
            return 1;
            break;
        }
    }
    return $out;
}

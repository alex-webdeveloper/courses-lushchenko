<?php

function t1()
{
    $t = time();
    return $t;
}

function t2()
{
    $t = time();
    $day = date('D', $t);
    return $day;
}

function t3($year)
{
    $data = date('L', mktime(null,  null,  null,  null,  null, $year));
    return $data;
}

function  t4()
{
    $t = time();
    $mon = date('m', $t);
    return $mon;
}

function t5()
{
    $t = time();
    date_default_timezone_set('Europe/Minsk');
    $data = date('Y-m-d H:i', $t);
    return $data;
}

function t6()
{
    $data = mktime(0, 0, 0);
    return $data;
}

function t7($m)
{
    $data = mktime(0, 0, 0, $m, 1);
    return $data;
}

function t8($t)
{
    $data = date('w', $t);
    if ($data == 0 and $data == 6)  return 1;
    else return 0;
}
function t9($s)
{
    if (strtotime($s) == false) {
        $arr = explode(" ", $s);
        $rev = array_reverse($arr);
        $str = implode(' ', $rev);
        $inp = strtotime($str);
        $t = time();
        $sec = 60 * 60 * 24;
        $dey = floor(($t - $inp) / $sec);
        return $dey;
    } else {
        $inp = strtotime($s);
        $t = time();
        $sec = 60 * 60 * 24;
        $dey = floor(($t - $inp) / $sec);
        return $dey;
    }
}

// для более корректного вычисления нужно отключать функцию date_default_timezone_set
// в function t5
function t10()
{
    $t = time();
    $data = mktime(0, 0, 0, 1, 1);
    $out = $t - $data;
    return $out;
}

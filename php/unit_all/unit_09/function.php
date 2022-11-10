<?php

function t1($num, $arr)
{
    if (in_array($num, $arr)) return  'yes';
    else return  'no';
}

function t2($num, $arr)
{
    $count = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($num === $arr[$i]) $count += 1;
    }
    return $count;
}

function t3($num, $arr)
{
    $count = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < $num) $count += 1;
    }
    return $count;
}

function  t4($num, $arr)
{
    $out = [];
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] > $num) array_push($out, $arr[$i]);;
    }
    return $out;
}

function t5($num, $arr)
{
    $out = [];
    for ($i = 0; $i < count($arr); $i++) {
        if ($num === 'even') {
            if ($arr[$i] % 2 === 0) array_push($out, $arr[$i]);
        } elseif ($num === 'odd') {
            if ($arr[$i] % 2 !== 0) array_push($out, $arr[$i]);
        }
    }
    return count($out);
}

function t6($ar)
{
    $rev = array_reverse($ar);
    return $rev;
}

function t7($arr)
{
    sort($arr);
    return $arr;
}

function t8($arr)
{
    array_pop($arr);
    return $arr;
}
function t9($arr)
{
    array_shift($arr);
    return $arr;
}

function t10($num, $arr)
{
    $ind = array_search($num, $arr);
    if ($ind) return $ind;
    else return 0;
}

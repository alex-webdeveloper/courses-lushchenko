<?php

function t1()
{
    $str = file_get_contents('./one/book1.json');
    $arr = json_decode($str, true);

    $out = '';
    foreach ($arr as $key => $value) {
        $out .= $key . ' ' . $value . '<br>';
    }
    echo $out;
}

function t2($path)
{
    $str = file_get_contents($path);
    $arr = json_decode($str, true);
    return $arr;
}

function t3($path)
{
    $str = file_get_contents($path);
    $arr = json_decode($str, true);
    $out = '';
    for ($i = 0; $i < count($arr); $i++) {
        $out .= $arr[$i]['name'] . ' ';
    }
    return $out;
}

function t4($arr, $path)
{
    $jsonStr = json_encode($arr);
    file_put_contents($path, $jsonStr);
}

function t5($path)
{
    $str = file_get_contents($path);
    $arr = json_decode($str, true);
    return count($arr);
}

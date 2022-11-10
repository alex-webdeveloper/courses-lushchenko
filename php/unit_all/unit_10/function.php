<?php

function t1($path)
{
    if (file_exists($path)) return 1;
    else return 0;
}

function t2($path)
{
    if (file_exists($path)) return filesize($path);
    else return 0;
}

function t3($path)
{
    if (is_dir($path)) return 'dir';
    else return 'file';
}

function  t4($path)
{
    $arr = pathinfo($path);
    $out = [];
    array_push($out, $arr['filename'], $arr['extension']);
    return $out;
}

function t5($path)
{
    $handle = fopen($path, "r");
    $contents = fread($handle, filesize($path));
    fclose($handle);
    return $contents;
}

function t6($path, $str)
{
    $handle = fopen($path, "w");
    fwrite($handle, $str);
    fclose($handle);
}

function t7($path, $str)
{
    // $handle = fopen($path, "a");
    // fwrite($handle, $str);
    // fclose($handle);
}

function t8($path)
{
    if (is_dir($path)) {
        if ($handle = opendir($path)) {
            $count = 0;
            while (false !== ($entry = readdir($handle))) {
                if ($entry != "." && $entry != "..") {
                    if (is_file($path . '/' . $entry)) $count += filesize($path . '/' . $entry);
                }
            }
            closedir($handle);
        }
        return $count;
    }
    // return filesize($path);
}

function t9($path)
{
    if ($handle = opendir($path)) {
        $arr = [];
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $arr2 = explode('.', $entry);
                array_push($arr, [$entry, $arr2[1], filesize($path . '/' . $entry)]);
            }
        }
        closedir($handle);
        return $arr;
    }
}

function t10($path)
{
    if (file_exists($path)) return 0;
    else {
        $fp = fopen($path, 'w');
        fwrite($fp, 42);
        fclose($fp);
        return 1;
    }
}

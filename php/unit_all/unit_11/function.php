<?php

function t1()
{
    if (($file = fopen('./one/book1.csv', 'r')) !== false) {
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            $out = '';
            for ($i = 0; $i < count($data); $i++) {
                $out .= $data[$i] . " ";
            }
            echo $out;
            echo '<br>';
        }
        fclose($file);
    }
}

function t2($path)
{
    if (($file = fopen($path, 'r')) !== false) {
        $arr = [];
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            array_push($arr, $data);
        }
        fclose($file);
        return $arr;
    }
}

function t3($path)
{
    if (($file = fopen($path, 'r')) !== false) {
        $out = '';
        while (($data = fgetcsv($file, 1000, ";")) !== false) {
            if ($data[2] !== 'color') $out .= $data[2] . ' ';
        }
        fclose($file);
        return $out;
    }
}

function  t4($arr, $path)
{
    $file = fopen($path, 'w');
    foreach ($arr as $line) {
        fputcsv($file, $line, ';');
    }
    fclose($file);
}

function t5($path)
{
    if (($file = fopen($path, 'r')) !== false) {
        $count = 0;
        while ((fgetcsv($file, 1000)) !== false) {
            $count++;
        }
        fclose($file);
        return $count;
    }
}

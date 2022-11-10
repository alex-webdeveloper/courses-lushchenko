<?php
// ЧИТАЕМ И ПИШЕМ CSV ФАЙЛЫ С PHP

// читаем файл CSV и выводим его содержимое на страницу
echo '<pre>';
if (($file = fopen('book1.csv', 'r')) !== false) {
    while (($data = fgetcsv($file, 1000, ";")) !== false) {
        // print_r($data);
        $out = '';
        for ($i = 0; $i < count($data); $i++) {
            $out .= $data[$i] . " ";
        }
        echo $out;
        echo '<hr>';
    }
    fclose($file);
}

// читаем файл CSV и выводим его содержимое в масиве на страницу
$res = [];
if (($file = fopen('book1.csv', 'r')) !== false) {
    while (($data = fgetcsv($file, 1000, ";")) !== false) {
        $res[] = $data;
        // array_push($res, $data);
    }
    fclose($file);
}

print_r($res);

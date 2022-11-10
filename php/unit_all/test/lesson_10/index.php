<?php
//1. Размера файла
echo filesize('./one/t1.txt');  // 247872 = 248 кб
echo '<br>';

// создаем файл  mode: 'w'
$fp = fopen('./one/data.txt', 'w');
$a = fwrite($fp, date('Y m d H:i:s', time()));
var_dump($a); // возвращает число что-бы понять произошла запись или нет
fclose($fp);

$fp = fopen('./one/data2.txt', 'w');
fwrite($fp, 'hello world');
fwrite($fp, '99');
fclose($fp);

$fp = fopen('./one/data3.txt', 'w+');
fwrite($fp, 'hello');
fwrite($fp, '99');
fclose($fp);

//2. читать файл  mode: 'r'
$filename = "./one/data.txt";
$handle = fopen($filename, "r"); //!!!
$contents = fread($handle, filesize($filename));
fclose($handle);
echo '<br>читать файл: ';
var_dump($contents);


//3 получать содержимое папки
echo '<br>содержимое папки: ';
if ($handle = opendir('./one')) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            echo "$entry<br>";
            echo filesize('./one/' . $entry) . '<br>';
        }
    }
    closedir($handle);
}


// 1: hello 2: Hi  3: Hello
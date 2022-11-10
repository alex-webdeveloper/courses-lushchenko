<pre>
<?php
// 1. Прочитать json файл
$string = file_get_contents('s.json');
print_r($string);
echo "<hr>";
var_dump($string);  // string(406)
echo "<hr>";
$arr = json_decode($string, true); //  преобразовать в массив // Array
print_r($arr);

// изменить данные в файле
for ($i = 0; $i < count($arr); $i++) {
    $arr[$i]['age'] = $arr[$i]['age'] + 10; // изменить возраст
}

echo "изменить возраст<hr>";
print_r($arr);

// запись данных в json файл и создание json файл
$jsonString = json_encode($arr); // преобразовать массив в строку
file_put_contents('t.json', $jsonString); // запись строки в json файл

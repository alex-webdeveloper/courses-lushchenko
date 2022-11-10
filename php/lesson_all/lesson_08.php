<?php
//  МАССИВЫ В PHP
echo '<pre>';
$m = array(
    1 => 'hi',
    5 => 'bbb',
    'j' => 888,
    'hello' => true
);
var_dump($m);
echo '<br>';
echo $m[5]; // $m['5'] - так тоже можно обратится 
echo '<br>';
echo $m['j'];
$b = 1;      // $b = '1' - так тоже можно записать
echo '<br>';
echo $m[$b];
// запись нового ключа со значением
$m['new'] = 'insert';
echo '<br>';
echo $m['new'];


$c = [4, 5, 7, 88, 99];
$c[] = 33;              //  добавление элемента в конец массива вместо push
$c[1] = 'test'; // замена одного элемента на другой по индексу(ключу)
var_dump($c);

// вывод массива
$out = '';
for ($i = 0; $i < count($c); $i++) {
    $out .= $c[$i] . ' ';
}
echo $out;

// нахождение минимального числа массива
$ex1 = [22, 3, 7, 88, -99, 12, 4, 4];
$min = $ex1[0];
for ($i = 0; $i < count($ex1); $i++) {
    if ($min > $ex1[$i]) $min = $ex1[$i];
}
echo '<br>';
echo $min;

// нахождение суммы всех элементов массива
$sum = 0;
for ($i = 0; $i < count($ex1); $i++) {
    $sum += $ex1[$i];
}
echo '<br>';
echo 'sum= ' . $sum;
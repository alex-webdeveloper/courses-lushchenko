
// ПОСЛЕ ФУНКЦИИ ; не ставится!
<?php
$a = 5;
echo $a;
echo '<p>Hello</p>';
$a = '<div>Test</div>';
$a = 'myString';
$a = 8;
$myVar = true;
$my_var = 7;
echo $a;
echo '<br>';

var_dump($a); // тип данных(int-число, float-дробь,string, bool-true, function, arr, obj)
$c = 10 % $a; // + - * / %
echo $c;

$d = ' str';
echo $d .' hi'; // . конкотенация строк

echo '<br>';
var_dump($a === 9);

myFunc();// вверху лучше не вызывать - правило хорошего тона
function myFunc() {
    // тело функции
    echo '<hr>';
    $a = 11111;
    echo 11111 * $a;
}

myFunc();
myFunc();

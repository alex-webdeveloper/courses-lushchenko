<?php // УСЛОВНЫЙ ОПЕРАТОР IF..ELSE В PHP. ВЕТВЛЕНИЕ
//есть строгое равенство и не строгое $a == '5'-true, $a === '5'-false
// ==(сравнивает только значение) ===(сравнивает и значение и типы)

$a = 7;
$b = 8;

if (true) {
    echo 'work'; 
}
if (false) {
    echo 'work';  // нечего не выведет
}
if ($a == 5) {
    echo 'es';
}
if ($a == 6) {
    echo 'es'; // условие не верно, нечего не выведет
}
if ($a < 9 AND $b === 8) {
    echo ' условие AND';
}
if ($a < 9 OR $b === 1) {
    echo ' условие OR';
}
if ($a < 5) {
    echo '<5';
}
elseif ($a < 12) {
    echo (' $a > 5 but < 12');
}
else {
    echo ' иной';
}

$flat = 1;
if ($flat >= 1 AND $flat <= 40) {
    echo (1);
}
elseif ($flat >= 41 AND $flat <= 61) {
    echo (2); 
}
else {
    echo (0);
}
$a = true;
if ($a){
    echo 'true';
}
if (!$a){
    echo 'true'; // условие не верно, нечего не выведет
}
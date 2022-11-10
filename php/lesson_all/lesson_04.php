<?php // ЦИКЛЫ В PHP. ЦИКЛ FOR

// echo '*'; 
$out = '';
for ($i = 0; $i < 10; $i = $i + 1) {
    if ($i == 5) continue; // пропуск 5 
    if ($i == 7) break;    // выход из цикла при 7
    echo $i . ' ';
}
echo '<br>';
for ($i = 9; $i >= 0; $i = $i - 1) {
    echo $i . ' ';
}
echo '<br>';

// amount 
$sum = 0;
for ($i = 0; $i < 11; $i++) {
    $sum += $i;
}
echo $sum;
echo '<br>';

// произведение это умножение
$multi = 1;
for ($i = 1; $i < 11; $i++) {
    $multi *= $i;
}
echo $multi;
echo '<br>';

$out = '';
$val = 11;
f();

function f()
{
    global $out, $val;
    $out = '';         // для повторного использования функции очистка переменной
    for ($i = 0; $i < $val; $i++) {
        $out .= $i . ' ';   // $out = $out.$i.' ';
    }
    echo $out;
}

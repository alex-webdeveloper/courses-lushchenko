<?php //   ФУНКЦИИ В PHP
$a = 5;
$b = 7;
function sum()
{
    global $a, $b;
    echo $a + $b;
}
sum();
echo '<hr>';

$a = 8;
$b = 9;
sum();

function sum2($a, $b)
{
    echo $a + $b;
}
echo '<hr>';
sum2(12, 10);

function sum3($a, $b, $s = '+')
{
    if ($s == '*') echo $a * $b;
    elseif ($s == '+') echo $a + $b;
    elseif ($s == '-') echo $a - $b;
    elseif ($s == '/') echo $a / $b;
}
echo '<hr>';
sum3(12, 15);
echo '<br>';
sum3(12, 10, '*');
echo '<br>';
sum3(12, 10, '-');
echo '<br>';
sum3(120, 10, '/');

function sum4($a, $b, $s)
{
    if ($s == '*') echo $a * $b;
    elseif ($s == '+') return $a + $b;
    elseif ($s == '-') return $a - $b;
    elseif ($s == '/') return $a / $b;
}
echo '<hr>';
$c = 100 + sum4(10, 9, '-');
echo $c;
echo '<br>';
echo sum4(10, 9, '+');

<pre>
<?php
//   РАБОТАЕМ СО ВРЕМЕНЕМ В PHP
// timestamp время для людей которое мы видим на экране
// unix time в секундах с 1970г для удобного исчисления и хранения в базе данных
// $un = time();
// echo date('Y-m-d H:i A', $un), '<br>';
// echo ($un);

echo "\n=================\n"; // \n - перенос стоки для консоли
// сменит time зону из unix в America/Los_Angeles
// date_default_timezone_set('America/Los_Angeles');
// echo date('Y-m-d H:i A', $un), '<br>';

// перевести обратно время из America/Los_Angeles в unix time
// $st = "10 September 2000 20:00"; //  September 10 2000 20:00 так не чего не изменится
// echo strtotime($st) . ' перевод обратно в unix' . '<br>';

echo strtotime("19 February 1978");

// php version: 7.4
// $data = date('L', mktime(date('H'),  date('i'),  date('s'),  date('n'),  date('j'), $year));
// php version: 8.0
// $data = date('L', mktime(null,  null,  null,  null,  null, $year));


function t6()
{ // вернуть время в unixtime текущего дня полуночи
    // $t = time();
    // $data =  strtotime(date('Y-m-d', $t) . ' 0:00:00');
    $data = mktime(0, 0, 0);
    return $data;
}

 // $s = '01-' . $m . '-2021';
// $data = strtotime($s);
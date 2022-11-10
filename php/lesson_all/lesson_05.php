<?php //  ЦИКЛЫ В PHP. ЦИКЛ WHILE


for ($i = 0; $i < 10; $i++) {
    echo $i . ' ';               //  0 1 2 3 4 5 6 7 8 9 
}
// WHILE LOOP
echo '<br>';
$i = 0;
while ($i < 10) {
    // if ($i == 6) continue; //  бесконечный цикл
    $i++;                    //  1 2 3 4 5 6 7 8 9 10
    if ($i == 6) continue;
    if ($i == 8) break;    // выход из цикла при 8
    echo $i . ' ';
}
echo '<br>';
$i = 0;
while ($i < 10) {
    // if ($i == 5) continue;
    echo $i . ' ';
    $i++;           // 0 1 2 3 4 5 6 7 8 9 

}
echo '<hr>';

// amount 
$sum = 0;
for ($i = 0; $i < 11; $i++) {
    $sum += $i;               // 55
}
echo $sum;
echo '<br>';
// WHILE 
$sum = 0;
$i = 0;
while ($i < 11) {
    $sum += $i;           // 55
    $i++;
}
echo $sum;
echo '<hr>';

// multi
$multi = 1;
$i = 1;
while ($i < 11) {
    $multi *= $i;           // 3628800
    $i++;
}
echo $multi;
echo '<hr>';

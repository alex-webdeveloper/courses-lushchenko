<?php
// РАБОТАЕМ С ИЗОБРАЖЕНИЯМИ PHP
$imagePath = __DIR__ . '/images/blank.png'; // фон-картинка
$fontPath =  __DIR__ . '/9605.ttf'; // шрифт джорджия 

$jpg_image = imagecreatefrompng($imagePath);

$color = imagecolorallocate($jpg_image, 0, 155, 0);

$text = "Ivanov Ivan";
imagettftext($jpg_image, 50, 0, 580, 250, $color, $fontPath, $text); // записать текс на картинке

$text = "+38 (050) 55-55-555";
imagettftext($jpg_image, 36, 0, 540, 350, $color, $fontPath, $text);

$cat = imagecreatefrompng(__DIR__ . '/cat.png');
imagecopy($jpg_image, $cat, 30, 50, 0, 0, 512, 512);
imagepng($jpg_image, __DIR__ . '/result.png');

imagedestroy($jpg_image); // удаление изображения
imagedestroy($cat);   // удаление изображения

echo '<img src="result.png">';

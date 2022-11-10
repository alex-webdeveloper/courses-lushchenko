<?php
//$blankPath = __DIR__ . 'если я здесь ставлю точку у меня выдает ошибку/images/blank.png';
function t1()
{
    $blankPath = __DIR__ . '/images/blank.png';
    $fontPath =  __DIR__ . '/9605.ttf';
    $image = imagecreatefrompng($blankPath);
    $color = imagecolorallocate($image, 255, 0, 0);
    $un = time();
    $text = date('Y-m-d', $un);
    imagettftext($image, 40, 0, 256, 148, $color, $fontPath, $text);
    imagepng($image, __DIR__ . '/task_1.png');
    imagedestroy($image);
}

function t2()
{
    $blankPath = __DIR__ . '/images/blank.png';
    $image = imagecreatefrompng($blankPath);
    $flash = imagecreatefrompng(__DIR__ . '/images/flash.png');
    imagecopy($image, $flash, 512, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . '/task_2.png');
    imagedestroy($image);
    imagedestroy($flash);
}

function t3()
{
    $blankPath = __DIR__ . '/images/blank.png';
    $image = imagecreatefrompng($blankPath);
    $flash = imagecreatefrompng(__DIR__ . '/images/flash.png');
    imagecopy($image, $flash, 0, 0, 0, 0, 256, 256);
    $spider = imagecreatefrompng(__DIR__ . '/images/spider.png');
    imagecopy($image, $spider, 256, 0, 0, 0, 256, 256);
    $thor = imagecreatefrompng(__DIR__ . '/images/thor.png');
    imagecopy($image, $thor, 512, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . '/task_3.png');
    imagedestroy($image);
    imagedestroy($flash);
    imagedestroy($spider);
    imagedestroy($thor);
}

function  t4()
{
    $blankPath = __DIR__ . '/images/blank.png';
    $fontPath =  __DIR__ . '/9605.ttf';
    $image = imagecreatefrompng($blankPath);
    $color = imagecolorallocate($image, 0, 0, 0);
    $text = 'hello';
    imagettftext($image, 36, 45, 50, 170, $color, $fontPath, $text);
    $thor = imagecreatefrompng(__DIR__ . '/images/thor.png');
    imagecopy($image, $thor, 256, 0, 0, 0, 256, 256);
    imagepng($image, __DIR__ . '/task_4.png');
    imagedestroy($image);
    imagedestroy($thor);
}

function t5()
{
    $image = imagecreatetruecolor(300, 300);
    $flash = imagecreatefrompng(__DIR__ . '/images/flash.png');
    imagecopy($image, $flash, 22, 22, 0, 0, 256, 256);
    imagepng($image, __DIR__ . '/task_5.png');
    imagedestroy($image);
    imagedestroy($flash);
}

function t6()
{
    $image = imagecreatetruecolor(512, 256);
    $yellow = imagecolorallocate($image, 255, 255, 0);
    imagefill($image, 0, 0, $yellow);
    $fontPath =  __DIR__ . '/9605.ttf';
    $color = imagecolorallocate($image, 0, 0, 0);
    $text = '"hello jpeg"';
    imagettftext($image, 50, 0, 90, 153, $color, $fontPath, $text);
    imagejpeg($image, __DIR__ . '/task_6.jpg');
    imagedestroy($image);
}

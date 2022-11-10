<?php

function t1()
{
    $zip = new ZipArchive();
    $filename = "./1.zip";
    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit('errors');
    }
    $zip->addFile("t1.txt");
    $zip->close();
}

function t2()
{
    echo filesize('t1.txt') . '<br>';
    $zip = new ZipArchive();
    $filename = "./2.zip";
    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit('errors');
    }
    $zip->addFile("t1.txt");
    $zip->close();
    echo filesize('2.zip');
}

function t3()
{
    $zip = new ZipArchive();
    $filename = "./3.zip";
    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit('errors');
    }
    $zip->addFile("t1.txt");
    $zip->addFile('./images/flash.png', 'flash.png');
    $zip->close();
}

function  t4()
{

    $zip = new ZipArchive();
    $filename = "./4.zip";
    if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
        exit('errors');
    }
    $zip->addFile("t1.txt", 'one/t1.txt');
    $zip->close();
}

function t5($arc, $folder)
{
    $zip = new ZipArchive;
    $zip->open($arc);
    $zip->extractTo($folder);
    $zip->close();
}

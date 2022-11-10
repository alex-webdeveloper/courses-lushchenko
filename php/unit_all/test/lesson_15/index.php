<?php
// РАБОТАЕМ С ZIP АРХИВАМИ PHP
// архивировать

// $zip = new ZipArchive();
// $filename = "./test112.zip";

// if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
//     exit("Невозможно открыть <$filename><br>"); // 'errors';
// }

// $zip->addFile("./text.txt");
// echo "filename: " . $zip->filename . "<br>";
// echo "numFiles: " . $zip->numFiles . "<br>";
// echo "status: " . $zip->status  . "<br>";
// echo "statusSys: " . $zip->statusSys . "<br>";
// echo "comment: " . $zip->comment . "<br>";
// $zip->close();
?>
<?php
// разархивировать (распоковать архив в указанную папку)
$zip = new ZipArchive;
$zip->open('test112.zip');
$zip->extractTo('./unzip');
$zip->close();
echo "Ok!";
?>
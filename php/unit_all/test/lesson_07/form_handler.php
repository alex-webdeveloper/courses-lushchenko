<?php
//http://test1.ua/form_handler.php?user=Pupkin
//http://test1.ua/form_handler.php?user=Ivanov&pass=23ed223
var_dump($_GET);
echo '<br>';
$a = $_GET['pass'];
$b = 'user';
$c = $_GET[$b];
echo $a;
echo '<br>';
echo $c;
echo '<br>';
var_dump(isset($_GET['pass'])); // проверка на наличие такой переменной(в форме name)
echo '<br>';
echo 'es ';
var_dump($_GET['pass'] !== ''); // проверка на пустую строку 
//trim
echo '<br>';
// _ _ _passw_ _ _  
var_dump(trim($_GET['pass']) !== ''); // проверка на пустую строку удаляя пробелы

echo '<br>';
// проверка на наличие переменной и на то что значение переменной не пустая строка
if (isset($_GET['pass']) and trim($_GET['pass']) !== '') {
    $b = trim($_GET['pass']);
    echo $b;  // вывод значения переменной pass
}
echo '<br>';
// http://test1.ua/form_handler.php
var_dump($_POST);
echo '<br>';
echo $_POST['user'];

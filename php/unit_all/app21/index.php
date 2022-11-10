<?php
require_once 'config/db.php';
require_once 'core/function_db.php';
require_once 'core/function.php';
$conn = connect();

$route = $_GET['route']; // NULL!
$route = explodeURL($route);
var_dump($route);

// main - главная страниц
// cat - категории
// article - статья

switch ($route) {
    case ($route[0] == ''):
        $query = 'select * from info';
        $result = select($query);
        require_once 'template/main.php';
        break;
    case ($route[0] == 'article' and isset($route[1])):
        $url = $route[1];
        $result = getArticle($url);
        require_once 'template/article.php';
        break;
    case 2:
        echo "i равно 2";
        break;
        //    default:
        //        echo "i не равно 0, 1 или 2";
}

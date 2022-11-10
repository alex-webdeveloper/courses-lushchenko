<?php
require_once 'config/db.php';
require_once 'core/function_db.php';
require_once 'core/function.php';
$conn = connect();

$route = $_GET['route']; // NULL!
$route = explodeURL($route);

// main - главная страниц
// cat - категории
// article - статья

switch ($route) {
    case ($route[0] == ''):
        $query = 'select * from info';
        $result = select($query);
        require_once 'template/main.php';
        break;
    case ($route[0] == 'article' AND isset($route[1])):
        $url = $route[1];
        $result = getArticle($url);
        require_once 'template/article.php';
        break;
    case ($route[0] == 'cat' AND isset($route[1])):
        $url = $route[1];
        $cat = getCategory($url);
        $result = getCategoryArticle($cat['id']);
        require_once 'template/cat.php';
        break;
    case ($route[0] == 'register'):
        require_once 'template/register.php';
        break;
    case ($route[0] == 'login'):
        require_once 'template/login.php';
        break;
    case ($route[0] == 'admin' AND $route[1]==='delete' AND isset($route[2])):
        if (getUser()){
            $query ="DELETE FROM info where id=".$route[2];
            execQuery($query);
            header("Location: /admin");
            exit;
        }
        header("Location: /");
        break;
    case ($route[0] == 'admin' AND $route[1]==='create'):
        if (getUser()){
            $query ="SELECt id, title FROM category";
            $category = select($query);
            require_once 'template/create.php';
        }
//        header("Location: /");
        break;
    case ($route[0] == 'admin'):
        $query = 'SELECT * from info';
        $result = select($query);
        require_once 'template/admin.php';
        break;
    default:
        require_once 'template/404.php';
}
<?php
require_once 'config/db.php';
require_once 'core/function_db.php';
require_once 'core/function.php';
$conn = connect();

$route = $_GET['route'] ?? NULL; // NULL!
// var_dump(explodeURL($route));
// var_dump($route);
$route = explodeURL($route);
// var_dump($route);
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
        if ($result = getArticle($url)) require_once 'template/article.php';
        else require_once 'template/404.php';
        break;
    case ($route[0] == 'category' and isset($route[1])):
        $url = $route[1];
        if ($cat = getCatecory($url)) {
            $result = getCatecoryArticle($cat['id']);
            require_once 'template/category.php';
        } else require_once 'template/404.php';
        break;
    case ($route[0] == 'register'):
        require_once 'template/register.php';
        break;
    case ($route[0] == 'login'):
        require_once 'template/login.php';
        break;
    case ($route[0] === 'admin' and isset($route[1]) and $route[1] === 'delete' and isset($route[2]) and is_numeric($route[2])):
        if (getUser()) {
            $query = "DELETE FROM info where id=" . $route[2];
            execQuery($query);
            header("Location: " . SETEURL . "/admin");
            exit;
        } else header("Location: " . SETEURL . "");
        break;
    case ($route[0] === 'admin' and isset($route[1]) and $route[1] === 'create'):
        if (getUser()) {
            $query = "SELECT id, title FROM category";
            $category = select($query);
            require_once 'template/create.php';
        } else header("Location: " . SETEURL . "");
        break;
    case ($route[0] === 'admin' and isset($route[1]) and isset($route[1]) and $route[1] === 'update' and isset($route[2]) and is_numeric($route[2])):
        // ..../admin/update/
        if (getUser()) {
            $query = "SELECT id, title FROM category";
            $category = select($query);
            $query = "SELECt * FROM info where id=" . $route[2];
            $result = select($query)[0];
            if ($result !== NULL) {
                require_once 'template/update.php';
            } else require_once 'template/404.php';
        } else header("Location: /");
        break;
    case ($route[0] == 'admin'):
        $query = 'select * from info';
        $result = select($query);
        require_once 'template/admin.php';
        break;
    case ($route[0] == 'logout'):
        // require_once 'template/logout.php';
        // clearCookies();
        header("Location: " . SETEURL . "");
        break;
    default:
        require_once 'template/404.php';
}

// enctype="multipart/form-data прописывать в форме чтобы можно было загружать картинки
// . $_SERVER['REQUEST_URI'] перезагрузка страницы 
//  если Прикреплять к IP: то хэша нет
<?php
/**
 * update page template
 */
$action = "Update";
if (isset($_POST['submit'])){
    $title = trim($_POST['title']);
    $url = trim($_POST['url']);
    $descr_min = trim($_POST['descr_min']);
    $description = trim($_POST['description']);
    $id = $route[2];
    $cid = ($_POST['cid']);
    move_uploaded_file($_FILES['image']['tmp_name'], 'static/images/'.$_FILES['image']['name']);
    $image = $_FILES['image']['name'];
    $update = updateArticle($id, $title, $url, $descr_min, $description, $cid, $image);
    if ($update) {
        setcookie("alert", "update ok", time()+60*60*24*600);
        header('Location: '.$_SERVER['REQUEST_URI']);
    }
    else {
        setcookie("alert", "update error", time()+60*60*24*600);
    }

}
if(isset($_COOKIE['alert'])) {
    $alert =  $_COOKIE['alert'];
    setcookie("alert", "", time() - 60 * 60 * 24 * 600);
    unset($_COOKIE['alert']);
    echo $alert;
}

?>


<h2>Update:</h2>
<?php
require_once '_form.php';
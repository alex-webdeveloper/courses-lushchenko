<?php

/**
 * update page template
 */


$action = "Update";
$alert = '';

if (isset($_POST['submit'])) {
    $title = trim($_POST['title']);
    $url = trim($_POST['url']);
    $descr_min = trim($_POST['descr_min']);
    $description = trim($_POST['description']);
    $cid = $_POST['cid'];
    if (isset($_FILES['image']['tmp_name']) and $_FILES['image']['tmp_name'] != '') {
        move_uploaded_file($_FILES['image']['tmp_name'], 'static/images/' . $_FILES['image']['name']);
        $image = $_FILES['image']['name'];
    } else {
        $image = $result['image'];
    }

    $id = $route[2];
    $update = updateArticle($id, $title, $url, $descr_min, $description, $cid, $image);
    // print_r($update);
    if ($update) {
        setcookie("alert", "update ok", time() + 60 * 10);
        header('Location: ' . $_SERVER['REQUEST_URI']);
    } else {
        setcookie("alert", "update error", time() + 60 * 10);
        header('Location: ' . $_SERVER['REQUEST_URI']);
    }
}
if (isset($_COOKIE['alert'])) {
    $alert = $_COOKIE['alert'];
    setcookie("alert", "", time() - 60 * 10);
    unset($_COOKIE['alert']);
}

require_once 'header_admin.php';
?>

<div class="col-sm-9">
    <main>
        <section>
            <h2>Update</h2>
            <?php
            require_once '_form.php';
            echo $alert;
            ?>

        </section>
    </main>
</div>
</div>
</div>

<?php require_once 'footer.php'; ?>
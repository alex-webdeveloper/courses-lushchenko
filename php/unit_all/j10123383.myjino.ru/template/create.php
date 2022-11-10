<?php

/**
 * create page template
 */
// echo '<pre>';
// print_r($result);

$action = "Create";

// (isset($_FILES['image']) and $_FILES['error'] == 0) 
if (isset($_POST['submit'])) {
    $title = trim($_POST['title']);
    $url = trim($_POST['url']);
    $descr_min = trim($_POST['descr_min']);
    $description = trim($_POST['description']);
    $cid = $_POST['cid'];

    move_uploaded_file($_FILES['image']['tmp_name'], 'static/images/' . $_FILES['image']['name']);
    $image = $_FILES['image']['name'];

    $create = createArticle($title, $url, $descr_min, $description, $cid, $image);
    if ($create) {
        header('Location: /admin');
    } else {
        setcookie("alert", "create error", time() + 60 * 10);
    }
    if (isset($_COOKIE['alert'])) {
        $alert = $_COOKIE['alert'];
        setcookie("alert", "", time() - 60 * 10);
        unset($_COOKIE['alert']);
        echo $alert;
    }
} else {
    $result = array(
        "title" => "",
        "url" => "",
        "descr_min" => "",
        "description" => "",
        "cid" => "",
        "image" => ""
    );
}
require_once 'header_admin.php';
?>
<div class="col-sm-9">
    <main>
        <section>
            <h2>Create</h2>
            <?php
            require_once '_form.php';
            ?>
        </section>
    </main>
</div>
</div>
</div>
<?php
require_once 'footer.php'; ?>

<script>
    document.title = "Create";
</script>
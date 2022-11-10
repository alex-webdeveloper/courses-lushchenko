<?php

/**
 * login page template
 */
if (!getUser()) {
    header("Location: /login");
}

$out = '<div class="col-sm-9"><main>';
$out .= '<h2 class="mb-5">Admin panel</h2>';
for ($i = 0; $i < count($result); $i++) {
    $out .= '<section class="mb-5">';
    $out .= '<h4>' . $result[$i]['title'] . '</h4>';
    $out .= '<img alt="foto" class="img-fluid min mb-3" src="/static/images/' . $result[$i]['image'] . '">';
    $out .= '<div><a class="btn btn-primary mb-2 btn-sm" role="button" href="/admin/delete/' . $result[$i]['id'] . '" onclick="return confirm(\'Точно???\')">Удалить</a></div>';
    $out .= '<div><a class="btn btn-primary btn-sm" role="button" href="/admin/update/' . $result[$i]['id'] . '" onclick="return confirm(\'Точно???\')">Обновить</a></div>';
    $out .= '</section>';
}
$out .= '</main></div></div></div>';

require_once 'header_admin.php';
echo $out;


require_once 'footer.php';
?>

<script>
    document.title = "Admin";
</script>
<?php

/**
 * login page template
 */
if (!getUser()) {
    header("Location: login");
}

$out = '<div class="col-sm-9"><main>';
$out .= '<h2>Admin panel</h2>';
for ($i = 0; $i < count($result); $i++) {
    // var_dump($result[$i]['id']);
    $out .= '<section class="mb-5">';
    $out .= '<p>' . $result[$i]['title'] . '</p>';
    $out .= '<img alt="foto" class="img-fluid min" src="' . SETEURL . '/static/images/' . $result[$i]['image'] . '">';
    $out .= '<div><a href="' . SETEURL . '/admin/delete/' . $result[$i]['id'] . '" onclick="return confirm(\'Точно???\')">Удалить</a></div>';
    $out .= '<div><a href="' . SETEURL . '/admin/update/' . $result[$i]['id'] . '" onclick="return confirm(\'Точно???\')">Обновить</a></div>';
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
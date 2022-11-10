<?php
/**
 * login page template
 */
    if (!getUser()){
        header("Location: /login");
    }
$out = '';
for ($i = 0; $i < count($result); $i++) {
    $out .='<div>';
    $out .='<p>'.$result[$i]['title'].'</p>';
    $out .='<img src="/static/images/'.$result[$i]['image'].'" width=50>';
    $out .='<a href="/admin/delete/'.$result[$i]['id'].'" onclick="return confirm(\'Точно???\')">Удалить</a>';
    $out .='</div>';
}

?>
<h1>Admin panel</h1>
<?php
echo $out;

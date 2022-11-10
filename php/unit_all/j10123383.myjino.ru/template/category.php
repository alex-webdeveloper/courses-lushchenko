<?php

/**
 * category page template
 */
require_once 'header.php';

$out = '<div class="col-sm-9"><main>';
$out .= '<section class="mb-5">';
$out .= '<h4>Организация: ' . $cat['title'] . '</h4>';
$out .= '<p>' . $cat['description'] . '</p>';
$out .= '</section>';
echo $out;

$out = '';
for ($i = 0; $i < count($result); $i++) {
    $out .= '<section>';
    $out .= '<h4>' . $result[$i]['title'] . '</h4>';
    $out .= '<p>' . $result[$i]['descr_min'] . '</p>';
    $out .= '<img src="/static/images/' . $result[$i]['image'] . '" width=200>';
    $out .= '<div class="mb-5"><a href="/article/' . $result[$i]['url'] . '">Читать</a></div>';
    $out .= '</section>';
}
$out .= '</main></div></div></div>';
echo $out;

require_once 'footer.php';?>

<script>
    document.title = "Category";
</script>

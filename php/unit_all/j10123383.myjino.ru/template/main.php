<?php

/**
 * main page template
 */
// print_r($category);
require_once 'header.php';

// $out = 'Category:';
// for ($i = 0; $i < count($category); $i++) {
//     $out .= '<div><a href="category/' . $category[$i]['url'] . '">' . $category[$i]['url'] . '</a></div>';
// }
// echo $out;

$out = '<div class="col-sm-9 p-"><main>';
for ($i = 0; $i < count($result); $i++) {
    $out .= '<section class="mb-5">';
    $out .= '<h4>' . $result[$i]['title'] . '</h4>';
    $out .= '<p>' . $result[$i]['descr_min'] . '</p>';
    $out .= '<img alt="foto" class="img-fluid average" src="/static/images/' . $result[$i]['image'] . '">';
    $out .= '<div><a href="/article/' . $result[$i]['url'] . '">Читать полностью</a></div>';
    $out .= '</section>';
}
$out .= '</main></div></div></div>';
echo $out;
require_once 'footer.php';

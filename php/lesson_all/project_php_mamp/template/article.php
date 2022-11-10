<?php

/**
 * article page template
 */
// echo '<pre>';
// print_r($result);
require_once 'header.php';

$out = '<div class="col-sm-9"><main>';
$out .= '<section>';
$out .= '<h4>' . $result['title'] . '</h4>';
$out .= '<p>' . $result['descr_min'] . '</p>';
$out .= '<img alt="foto" class="img-thumbnail" src="' . SETEURL . '/static/images/' . $result['image'] . '" >';
$out .= '<p class="mt-5">' . $result['description'] . '</p>';
$out .= '<a class="btn btn-primary m-3" role="button" href="' . SETEURL . '">Назад</a>';
$out .= '<section>';
$out .= '</main></div></div></div>';
echo $out;
require_once 'footer.php';

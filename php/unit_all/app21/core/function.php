<?php
    function explodeURL($url){
        return explode("/", $url);
    }

    function getArticle($url) {
        $query = "select * from info where url='".$url."'";
        return select($query)[0];
    }
?>
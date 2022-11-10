<?php
    function explodeURL($url){
        return explode("/", $url);
    }

    function getArticle($url) {
        $query = "select * from info where url='".$url."'";
        return select($query)[0];
    }

    function getCategory($url) {
        $query = "select * from category where url='".$url."'";
        return select($query)[0];
    }
function getCategoryArticle($cid) {
    $query = "select * from info where cid=".$cid;
    return select($query);
}


?>
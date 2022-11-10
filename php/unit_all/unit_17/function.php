<?php

function t2()
{
    $query = "SELECT * FROM cars";
    return select($query);
}

function t3()
{
    $query = "SELECT cars FROM cars WHERE cost > 100000";
    $data = select($query);
    $out = [];
    for ($i = 0; $i < count($data); $i++) {
        $out[] = $data[$i]['cars'];
    }
    return $out;
}

function  t4()
{
    $query = "SELECT cars FROM cars";
    $data = select($query);
    $out = [];
    for ($i = 0; $i < count($data); $i++) {
        $out[] =  "'" . $data[$i]['cars'] .  "'" . ',';
    }
    return $out;
}

function t5()
{
    $dataInsert = execQuery('INSERT INTO cars (cars, image, cost) VALUES ("Cadillac Escalade Platinum", "http://elite.cars.ua/img/upload/cache/zc-1_iar-1_h-357_w-570_5ecd1aa8a55af0_68546755.jpg", 47777);');
    return $dataInsert;
}

function t6()
{
    $dataUpdate = execQuery('UPDATE cars SET cars="Cadillac Escalade", cost=47500 WHERE cars="Cadillac Escalade Platinum"');
    return  $dataUpdate;
}

function t7()
{
    $dataUpdate = execQuery('UPDATE cars SET cost=cost-2800 WHERE cost>= 100000 and cost<=200000');
    return  $dataUpdate;
}

function t8()
{
    $query = "SELECT sum(cost) as summa FROM cars";
    $data = select($query);
    return $data[0]['summa'];
}

function t9()
{
    $query = "SELECT cars, cost FROM cars";
    $data = select($query);
    $out = [];
    for ($i = 0; $i < count($data); $i++) {
        $out["'" . $data[$i]['cars'] .  "'"] = $data[$i]['cost'];
    }

    return $out;
}

function t10()
{
    $dataDelete = execQuery('DELETE FROM cars WHERE cars="Cadillac Escalade"');
    return $dataDelete;
}

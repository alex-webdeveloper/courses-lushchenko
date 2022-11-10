<?php
require_once 'config.php'; // настройки db
require_once 'function.php';

$conn = connect();

echo '<pre>';
echo 'Select <br>';
$testSelect = select('SELECT * FROM user');
print_r($testSelect);

echo 'Insert <br>';
$testInsert = execQuery('INSERT INTO user (name, age, photo) VALUES ("Flash", 88, "https://www.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-18-128.png");');
var_dump($testInsert);

echo 'Update <br>';
$testUpdate = execQuery('UPDATE user SET name="Old Flash" WHERE id = 6');
var_dump($testUpdate);

echo 'Delete <br>';
$testDelete = execQuery('DELETE FROM user WHERE id = 6');
var_dump($testDelete);

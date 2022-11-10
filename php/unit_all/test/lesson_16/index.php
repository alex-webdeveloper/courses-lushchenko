<?php
require_once 'config.php'; // настройки db

// Create connection
$conn = mysqli_connect(SERVER, USER, PASSWORD, DB);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// else echo 'Work';
mysqli_set_charset($conn, "utf8"); // бд работает с кирилицей-русским языком

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);  // запрос в бд

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $res = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $res[] = $row;
    }
    echo '<pre>';
    print_r($res);
    $out = '';
    for ($i = 0; $i < count($res); $i++) {
        $out .= '<img src="' . $res[$i]['photo'] . '">';
    }
    echo $out;
} else {
    echo "0 results";
}

mysqli_close($conn);

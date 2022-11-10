<?php

function connect()
{
    $conn = mysqli_connect(SERVER, USER, PASSWORD, DB);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

// получение данных из базы данных 
function select($query)
{
    global $conn;
    $queryResult = [];
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0 and mysqli_num_rows($result) != null) {
        while ($row = mysqli_fetch_assoc($result)) {
            $queryResult[] = $row;
        }
    }
    return $queryResult;
}

// удаление и создание записей в базе данных
function execQuery($query)
{
    global $conn;
    if (mysqli_query($conn, $query)) {
        return true;
    }
    return false;
}

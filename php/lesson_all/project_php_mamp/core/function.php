<?php
function explodeURL($url)
{
    return explode("/", $url);
}

function getArticle($url)
{
    $query = "select * from info where url='" . $url . "'";
    return select($query)[0] ?? null;
}

function getCatecory($url)
{
    $query = "select * from category where url='" . $url . "'";
    return select($query)[0] ?? null;
}

function getCatecoryArticle($cid)
{
    $query = "select * from info where cid=" . $cid;
    return select($query);
}

function isLoginExist($login)
{
    $query = "select id from users where login='" . htmlspecialchars($login, ENT_QUOTES) . "'";
    $result = select($query);
    if (count($result) === 0) return false;
    return true;
}

function createUser($login, $password)
{
    $password = md5(md5($password));
    $query = "INSERT INTO users SET login='" . htmlspecialchars($login, ENT_QUOTES) . "', password='" . htmlspecialchars($password, ENT_QUOTES) . "'";
    return execQuery($query);
}

function login($login, $password)
{
    $password = md5(md5(trim($password)));
    $login = trim($login);
    $query = "SELECT id, login from users WHERE login='" . htmlspecialchars($login, ENT_QUOTES) . "' AND password='" . htmlspecialchars($password, ENT_QUOTES) . "'";
    $result = select($query);
    if (count($result) != 0) return $result;
    return false;
}
// создание случайных символов
function generateCode($length = 7)
{
    $chars = "huhhgeerfsfgbhjjkkjjvbvcSWETGFDAXCBNJJMKIOPLKJHNMBF239845621";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0, $clen)];
    }
    return $code;
}

function updateUser($id, $hash, $ip)
{
    if (is_null($ip)) {
        $query = "UPDATE users SET hash='" . $hash . "' WHERE id=" . $id;
    } else {
        $query = "UPDATE users SET hash='" . $hash . "', ip=INET_ATON('" . $ip . "') WHERE id=" . $id;
    }
    return execQuery($query);
}


function getUser()
{
    if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])) {
        $query = "SELECT id, login, hash, INET_NTOA(ip) as ip FROM users WHERE id = " . intval($_COOKIE['id']) . " LIMIT 1";
        $user = select($query);
        if (count($user) === 0) {
            return false;
        } else {
            $user = $user[0];
            if ($user['hash'] !== $_COOKIE['hash']) {
                clearCookies();
                return false;
            }

            if ($user['ip'] != "0.0.0.0") {
                if ($user['ip'] !== $_SERVER['REMOTE_ADDR']) {
                    clearCookies();
                    return false;
                }
            }
            $_GET['login'] = $user['login'];
            return true;
        }
    } else {
        clearCookies();
        return false;
    }
}

function clearCookies()
{
    setcookie('id', "", time() - 60 * 60 * 24 * 30, "/");
    setcookie('hash', "", time() - 60 * 60 * 24 * 30, "/", null, null, true);
    unset($_GET['login']);
}

function createArticle($title, $url, $descr_min, $description, $cid, $image)
{
    $query = "INSERT INTO info (title, url, descr_min, description, cid, image) VALUES ('" . htmlspecialchars($title, ENT_QUOTES) . "', '" . $url . "','" . htmlspecialchars($descr_min, ENT_QUOTES) . "','" . htmlspecialchars($description, ENT_QUOTES) . "'," . $cid . ",'" . $image . "')";
    return execQuery($query);
}

function updateArticle($id, $title, $url, $descr_min, $description, $cid, $image)
{
    $query = "UPDATE info SET title='" . htmlspecialchars($title, ENT_QUOTES) . "', url='" . $url . "', descr_min='" . htmlspecialchars($descr_min, ENT_QUOTES) . "', description='" . htmlspecialchars($description, ENT_QUOTES) . "', cid=" . $cid . ", image='" . $image . "' WHERE id=" . $id;
    return execQuery($query);
}

function is_image($path)
{
    $a = getimagesize($path);
    $image_type = $a[2];

    if (in_array($image_type, array(IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_BMP))) {
        return true;
    }
    return false;
}

function logout()
{
    clearCookies();
    header("Location: /");
    exit;
}

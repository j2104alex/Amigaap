<?php

// database conection variables
$db_name = 'amigaapp02';
$db_username = 'root';
$db_password = '';
$db_hostname = '127.0.0.1';
$db_port = '3306';

//vairnable that store the database conection
$connection = mysqli_connect($db_hostname, $db_username, $db_password, $db_name, $db_port);

//Modify latin alphabet
mysqli_set_charset($connection, "utf8");

/**
 * Function that new users on the database.
 * @param $username STRING 
 * @param $lastname STRING
 * @param $email STRING
 * @param $password STRING
 */
function register($username, $lastname, $email, $password)
{
    global $connection;
    if (user_exists($email)) {
        show_alert('El correo ya se encuentra registrado');
        echo '<script type="text/javascript"> window.location.href="../pages/register.php"; </script>';
        //header("Location: http://localhost/Amigaap-v0.2/pages/register.php?error=El correo ya se encuentra registrado");
        exit();
    } else {
        $query = 'INSERT INTO usuarios (nombre_usuario, apellido_usuario, correo_usuario, password_usuario)
                  VALUES ("' . $username . '","' . $lastname . '", "' . $email . '", "' . $password . '");';
        mysqli_query($connection, $query);
        show_alert(mysqli_insert_id($connection));
        header("Location: http://localhost/Amigaap-v0.2/pages/login.php");
        exit();
    }
}

/**
 * Function that validate if an email is registered on the database.
 * @param $email STRING
 */
function user_exists($email)
{
    global $connection;
    $query = 'SELECT correo_usuario FROM usuarios WHERE correo_usuario = "' . $email . '";';
    $result = mysqli_query($connection, $query);
    //mysqli_fetch_assoc sirve para devolver un arreglo con los resultados obtenidos del mysqli
    if (mysqli_fetch_assoc($result)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function that show an alert message.
 * @param $message STRING
 */
function show_alert($message)
{
    echo '<script type="text/javascript"> alert("' . $message . '");</script>';
}

/**
 * Function to login.
 * @param $user_email STRING 
 * @param $user_password STRING
 */
function login($user_email, $user_password)
{
    if (user_exists($user_email) && validate_session($user_email, $user_password)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function that validate the login session
 * @param $user_email STRING 
 * @param $user_password STRING
 */
function validate_session($user_email, $user_password)
{
    global $connection;
    $query = 'SELECT * FROM usuarios WHERE correo_usuario = "' . $user_email . '";';
    $result = mysqli_query($connection, $query);
    $user = mysqli_fetch_assoc($result);
    if ($user && $user['password_usuario'] == $user_password) {
        return true;
    } else {
        return false;
    }
}

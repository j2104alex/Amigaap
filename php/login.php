<?php
include('./db_handle.php');

// User data
$user_password = $_POST['password'];
$user_email = $_POST['email'];

if (!login($user_email, $user_password)){
    show_alert('Tiene errores en las credenciales, valida');
    echo '<script type="text/javascript"> window.location.href="http://localhost/Amigaap-v0.2/pages/login.php"; </script>';
}
else {
    readfile("../pages/home.php");
}

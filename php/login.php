<?php
include('./db_handle.php');

// Datos del usuario
$user_password = $_POST['password'];
$user_email = $_POST['email'];

if (!login($user_email, $user_password)){
    echo '<p>Tiene errores en las credenciales, valida. <a href="http://localhost/Amigaap-v0.2/pages/login.html">Regresar</a></p>';
}
else {
    readfile("../pages/home.html");
}

?>
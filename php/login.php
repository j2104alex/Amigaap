<?php
include('./db_handle.php');

// Datos del usuario
$user_password = $_POST['password'];
$user_email = $_POST['email'];

login($user_email, $user_password)

?>
<?php
include('./db_handle.php');

// Datos del usuario
$user_name = $_POST['username'];
$user_lastname = $_POST['lastname'];
$user_password = $_POST['password'];
$user_email = $_POST['email'];

register($user_name, $user_lastname, $user_email, $user_password);

?>
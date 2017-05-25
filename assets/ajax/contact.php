<?php 
if (isset($_POST["name"], $_POST["email"], $_POST["message"])) {
$message = print_r( $_POST, true);
}
mail("kaderaart@gmail.com", "My Subject", $message);
?>
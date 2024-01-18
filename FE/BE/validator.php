<?php

$tes1 = "tes@tes.com";
$tes2 = "tes";

$email = $_POST['email'];
$password = $_POST['password'];

if ($tes1 == $email && $tes2 == $password){
    // Redirect to the logged-in page
    header("Location: ../dashboard.php");
    exit(); // Ensure that no other content is sent
}else{
    echo"error";
}


?>
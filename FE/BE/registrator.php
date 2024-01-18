<?php

if($_POST['password'] == $_POST['cpassword']){

        $email = $_POST['email'];
        $password = $_POST['password'];
        $name = $_POST['name'];

      echo $email, '', $password,'',$name,'';

}
else{
    echo "err";
}
?>
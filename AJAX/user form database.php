<?php
    $host = "localhost";
    $user = "root";
    $db = "ajaxtest";

    $conn = new mysqli($host,$user) or die("Unable to connect");    //as i am noob in php
    $conn->select_db($db) or die("Unable to connect");
    
    if(isset($_POST['name'])){
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $query = "INSERT INTO users(name) Values ('$name')";

        if(mysqli_query($conn, $query)){
            echo "User added ". $name;
        }else{
            echo 'Error: '. mysqli_error($conn);
        }
    }
?>
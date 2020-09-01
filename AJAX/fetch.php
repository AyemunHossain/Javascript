<?php

    $host = "localhost";
    $user = "root";
    $db = "ajaxtest";

    $conn = new mysqli($host,$user) or die("Unable to connect");    //as i am noob in php
    $conn->select_db($db) or die("Unable to connect");
    
    
    $query = "SELECT * FROM users";
    
    $result = mysqli_query($conn,$query);
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    echo json_encode($users);

    ?>
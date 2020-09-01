<?php
    $obj->name="Ashik";
    $obj->id = 22323;
    $obj->university = "DIU";
    $obj->job = "Student";
    
    $json_data = json_encode($obj);
    
    echo($json_data);
?>
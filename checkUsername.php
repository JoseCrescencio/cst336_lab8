<?php

    include "databaseConnection.php";
    
    $conn = connectToDB("Lab8");
    
    $username = $_GET['username'];
    $sql = "SELECT * FROM user WHERE username = :username";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":username",$username);
    $stmt->execute();
    $record = $stmt->fetchall(PDO::FETCH_ASSOC);
    
    
    echo json_encode($record);   
?>
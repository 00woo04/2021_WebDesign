<?php

$name = $_POST["name"];
$id = $_POST["id"];
$email = $_POST["email"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Post Example</h1>
    <?php echo $name."님의 아이디는 ".$id.", 이메일 주소는 ".$email."입니다."; ?>
</body>
</html>
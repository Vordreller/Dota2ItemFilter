<?php

//2nd argument true => decode result in to associative array
$result = json_decode(file_get_contents("files/dota2itemfilter.json"), true);
$name = $_POST['name'];

//Return only the specified item
echo json_encode($result[$name]);

?>

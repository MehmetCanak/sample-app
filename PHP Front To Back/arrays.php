<?php 
# Array - Variable that holds multiple values

/*
    - Indexed
    - Associative
    - Multi-dimensional     
*/

#İNDEXED
$people = array('Kevin', 'Jeremy', 'Sara');
$ids1 = array(23, 55, 12);
$cars = ["Honda", "Toyota", "Ford"];
echo $people[1];
echo $cars[2];
echo $ids1[0];



$people = array("Brad", "Jose", "William");
$ids = [22 => "Brad", 44 => "Jose", 63 => "William"];
echo $output . " " . var_dump($people). " " . var_dump($ids), " " . var_dump($cars) . " " . $cars[1] . " " . $ids[22] . $ids1[1];

?>
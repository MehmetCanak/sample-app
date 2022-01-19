<?php 

#CONDITIONALS

/*
    if
    else
    elseif
    switch

    ==
    === 
    !=
    !==
    <
    >
    <=
    >=
    <=>
    <=>
*/  

$num = 5;
if($num == 5){
    echo "5 passed";
}
elseif($num == 6){
    echo "6 passed";
}
else{
    echo "5 not passed";
}
#nesting if
$num = 5;
if($num > 4){
    if($num < 10){
        echo "5 passed";
    }
}

/*logical operators
    && and
    || or
    !  
    xor
*/
if($num > 4 && $num < 10){
    echo "5 passed";
}

#switch
$favColor = "red";
switch($favColor){
    case "red":
        echo "Your favorite color is red";
        break;
    case "blue":
        echo "Your favorite color is blue";
        break;
    case "green":
        echo "Your favorite color is green";
        break;
    default:
        echo "Your favorite color is someting else";
        break ;
}




?>
<?php 

# FUNCTİONS - blocks of code that can be repeatedly called

/*
    Functions perform a set of operations
    Parameters - input variables
    Return value - usually the result of the operation
    
    Camel Case - myFunction()
    Lower Case - my_function()
    Pascal Case - MyFunction()
*/  
#create a function
function simpleFunction(){
    echo "Hello World";
}

#call the function
#run the function

simpleFunction();

//function with parameters
function sayHello($name = "World"){
    echo "Hello $name<br>";
}

sayHello("Brad");

//return value
function   addNumbers($num1, $num2){
    $sum = $num1 + $num2;
    return $sum;
}
echo addNumbers(2, 3);

//by reference

$myNum = 10;

function addFive($num){
    $num += 5;
}
function addTen(&$num){
    $num += 10;
}

addFive($myNum);

echo "value :" ,$myNum;

addTen($myNum);

echo "value2 :" ,$myNum;;
?>
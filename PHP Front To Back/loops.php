<?php 
    # LOOPS - Execute code set number of times
    /*
        For
        While
        Do...While
        Foreach
    */  
    # For loop 
    # @param -init, condition, increment

    for($i = 0; $i < 10; $i++){
        echo $i . " ";
    }

    #while loop
    # @param -condition

    $i = 0;

    while($i < 10){
        echo $i . " ";
        $i++;
    }

    # do...while loop
    # @param -condition
    $i = 0;
    do{
        echo $i . " ";
        $i++;       
    }while($i < 10);

    # foreach loop - for arrays

    $people = array("Brad" => "brad@gmail.com", "Jose" => "jose@gmail.com", "William" => "will@gmail.com");
    foreach($people as $person => $email){
        echo $person . ": " . $email . "<br>";
    }
?>
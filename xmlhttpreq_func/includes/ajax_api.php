<?php

    $data = trim(stripslashes(file_get_contents('php://input')));
    $param = json_decode($data, true);
    if(isset($param['proceed']) && $param['proceed'] === true ) {
        if ( is_numeric($param['first_number']) && is_numeric($param['second_number']) ) {
            $firstnum = (float)$param['first_number'];
            $secondnum = (float)$param['second_number'];
            $operator = $param['operation'];

            switch($operator){
                case "add":
                    echo "<strong>ADDITION:</strong><br>$firstnum added to $secondnum = " . ($firstnum + $secondnum);
                    break;
                case "times":
                    echo "<strong>MULTIPLICATION:</strong><br>$firstnum multiplied by $secondnum = " . ($firstnum * $secondnum);
                    break;
                case "minus":
                    echo "<strong>SUBTRACTION:</strong><br>$firstnum minus $secondnum = " . ($firstnum - $secondnum);
                    break;
                case "divide":
                    if ($secondnum === 0) {
                        echo "<strong>DIVISION:</strong><br>Cannot divide $firstnum by $secondnum.";
                    } else {
                        echo "<strong>DIVISION:</strong><br>$firstnum divided by $secondnum = " . ($firstnum / $secondnum);
                    }
                    break;
            }
        } else {
            echo '<strong>ERROR:</strong><br>Invalid Data Provided.';
        }        
        
    } else {
        echo '<strong>ERROR:</strong><br>Something went wrong.';
    }
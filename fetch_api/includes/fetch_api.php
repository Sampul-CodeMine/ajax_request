<?php
   
    if (isset($_POST['proceed']) && $_POST['proceed'] == true){
        if ( is_numeric($_POST['first_number']) && is_numeric($_POST['second_number']) ) {
            $firstnum = (float)$_POST['first_number'];
            $secondnum = (float)$_POST['second_number'];
            $operator = $_POST['operation'];

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
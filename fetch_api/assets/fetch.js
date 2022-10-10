document.addEventListener('DOMContentLoaded', function(){

    // Get the input fields elements on the page  
    const first_number = document.getElementById('num1');
    const second_number = document.getElementById('num2');
    const math_op = document.getElementById('operation');
    const result = document.getElementById('result');
    const btn = document.querySelector('button');

    // When the Calculate button is clicked 
    btn.addEventListener('click', function(evt){
        evt.preventDefault();
        if ( first_number.value == '' || isNaN (first_number.value) === true ) {
            first_number.focus();
            result.innerHTML = 'First Number Required and must be numeric.';
        } else if ( second_number.value == '' || isNaN (second_number.value) === true ) {
            second_number.focus();
            result.innerHTML = 'Second Number Required and must be numeric.';
        } else if (math_op.value === '') {
            math_op.focus();
            result.innerHTML = 'Choose a Math Operation.';
        } else {

            const data = new URLSearchParams();
            data.append('first_number', first_number.value);
            data.append('second_number', second_number.value);
            data.append('operation', math_op.value);
            data.append('proceed', true);
            
            fetch('includes/fetch_api.php', {
                method: 'post',
                body: data
            }).then(result => result.text())
            .then(res => {
                result.innerHTML = (res);
            }).catch(err => result.innerHTML = (err))
        }
    });
});
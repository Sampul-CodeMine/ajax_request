const xhrObj = (form_method, process_url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(form_method, process_url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    return xhr;    
};
const xhrReturn = (xhr) => {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        return true;
    } 
    return false;  
};

// When the Page completely loads
document.addEventListener('DOMContentLoaded', function(){

    // Get the input field elements on the page  
    const first_number = document.getElementById('num1');
    const second_number = document.getElementById('num2');
    const math_op = document.getElementById('operation');
    const result = document.getElementById('result');
    const btn = document.querySelector('button');

    // When the Calculate button is clicked 
    btn.addEventListener('click', function(evt){
        evt.preventDefault();
        
        // Input Validation 
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

            const data = {
                first_number: first_number.value,
                second_number: second_number.value,
                operation: math_op.value,
                proceed: true
            };

            const ajaxObj = xhrObj('POST', 'includes/ajax_api.php');
            ajaxObj.onload = function(){
                if(xhrReturn(ajaxObj) === true){
                    result.innerHTML = ajaxObj.responseText;
                }
            }
            ajaxObj.send(JSON.stringify(data));
        }
    })
});
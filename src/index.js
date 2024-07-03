import validator from './validator.js';

let button = document.getElementById('validatorButton');

button.addEventListener('click', function(){
    let cardNumber = document.getElementById('inputCardNumber').value;
    alert('El input es ' + cardNumber);

})



console.log(validator);

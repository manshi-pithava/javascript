// Calculator logic
document.addEventListener('DOMContentLoaded', function () {
    let result = document.getElementById('result');
    let clearButton = document.querySelector('.clear-button');
    let equalButton = document.querySelector('.equal-button');
    let calculatorButtons = document.querySelectorAll('.calculator-button');
  
    calculatorButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        result.value += this.innerText;
      });
    });
  
    clearButton.addEventListener('click', function () {
      result.value = '';
    });
  
    equalButton.addEventListener('click', function () {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = 'Error';
      }
    });
  });
  
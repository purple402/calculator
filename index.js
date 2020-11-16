const numberButtons = document.querySelectorAll('[data-number]'),
operationButtons = document.querySelectorAll('[data-operation]'),
equalsButton = document.querySelector('[data-equals]'),
deleteButton = document.querySelector('[data-delete]'),
allClearButton = document.querySelector('[data-all-clear]'),
previousOperandTextElement = document.querySelector('[data-previous-operand]'),
currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

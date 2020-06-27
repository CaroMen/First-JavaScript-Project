const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    currentResult = currentResult + userInput.value;
}

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);
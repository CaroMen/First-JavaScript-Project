const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIndentifier, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: operationIndentifier,
        prevResult: prevResult,
        number: operationNum,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calcResult(calcType) {
    if (
        (calcType !== "ADD" &&
            calcType !== "SUBTRACT" &&
            calcType !== "MULTIPLY" &&
            calcType !== "DIVIDE") ||
        !enteredNumber
    ) {
        return;
    }

    // if (
    //     calcType === "ADD" ||
    //     calcType === "SUBTRACT" ||
    //     calcType === "MULTIPLY" ||
    //     calcType === "DIVIDE"
    // ) {
    const enteredNumber = getUserNumInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calcType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calcType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calcType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calcType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    // }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
    calcResult("ADD");
}

function subtract() {
    calcResult("SUBTRACT");
}

function multiply() {
    calcResult("MULTIPLY");
}

function divide() {
    calcResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput () {
    return parseInt(userInput.value);
}

function createOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdent, prevRes, operationNum, newResult) {
    
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createOutput('+', initialResult, enteredNumber)
    logEntries.push(enteredNumber);
    const logEntry = {
        operation: "ADD",
        preResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    console.log(logEntry.operation);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createOutput('*', initialResult, enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

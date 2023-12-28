const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const equalsTo = document.querySelector('#equals-to');
const clearAll = document.querySelector('#clear-all');
const display = document.querySelector('#display');

let initialOperand = null;
let currentOperand = null;
let storeSolution = null;
let storeOperator = null;


// Store & display operand and operator && turn string to number
function displayBtnClicked (e) {
    display.textContent += e.target.textContent;
}
function handleOperator (e) {
    initialOperand = display.textContent; // Stores displayed numbers
    storeOperator = e.target.textContent; // Stores the clicked operator
    console.log(storeOperator);
    display.textContent += e.target.textContent; // Display on screen
    currentOperand = e.target.textContent;
    console.log(currentOperand)
    return storeOperator;
}

// function handleCurrentOperand () {
//     currentOperand = display.textContent;
//     return currentOperand;
// }


operands.forEach(operand => {
    operand.addEventListener('click', displayBtnClicked);
})
operators.forEach(operator => {
    operator.addEventListener('click', handleOperator);
})
// End

// Function for computations & handleClick & operator transformation from string to symbol
function compute (storeOperator, currentOperand, initialOperand) {
    initialOperand = parseFloat(initialOperand); //Turns into an integer
    currentOperand = parseFloat(currentOperand);

    if (storeOperator == '+') {
        storeSolution = initialOperand + currentOperand;
        display.textContent = storeSolution;
    } else if (storeOperator == '-') {
        storeSolution = initialOperand - currentOperand;
        display.textContent = storeSolution;
    } else if (storeOperator == '/') {
        storeSolution = initialOperand / currentOperand;
        display.textContent = storeSolution;
    } else if (storeOperator == 'x') {
        storeSolution = initialOperand * currentOperand;
        display.textContent = storeSolution;
    }
    return storeSolution;
}

equalsTo.addEventListener('click', compute);
// End







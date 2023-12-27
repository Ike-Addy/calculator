const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const equalsTo = document.querySelector('#equals-to');
const clearAll = document.querySelector('#clear-all');
const display = document.querySelector('#display');

let storeFirstOperand = null;
let storeCurrentOperand = null;
let storeSolution = null;
let storeOperator = null;


// Store & display operand and operator && turn string to number
function displayOperandClicked (e) {
    display.textContent += e.target.textContent;
}
function displayOperatorClicked (e) {
    storeFirstOperand = display.textContent; // Stores displayed numbers
    storeFirstOperand = parseFloat(storeFirstOperand); //Turns into an integer
    storeOperator = e.target.textContent; // Stores the clicked operator
    display.textContent += e.target.textContent; // Display on screen
    return storeOperator;
}


operands.forEach(operand => {
    operand.addEventListener('click', displayOperandClicked);
})
operators.forEach(operator => {
    operator.addEventListener('click', displayOperatorClicked);
})
// End

// Function for computations & handleClick & operator transformation from string to symbol
function compute (storeOperator) {
    if (storeOperator == '+') {
        storeSolution = storeFirstOperand + storeCurrentOperand;
    } else if (storeOperator == '-') {
        storeOperator = storeFirstOperand - storeCurrentOperand;
    } else if (storeOperator == '/') {
        storeOperator = storeFirstOperand / storeCurrentOperand;
    } else if (storeOperator == 'x') {
        storeOperator = storeFirstOperand * storeCurrentOperand;
    }
}
equalsTo.addEventListener('click', compute);
// End







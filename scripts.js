const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const equalsTo = document.querySelector('#equals-to');
const clearAll = document.querySelector('#clear-all');
const display = document.querySelector('#display');

let initialOperand = null;
let currentOperand = null;
let storeSolution = null;
let storeOperator = null;

// Store & display operands and operators && turn string to number
const displayBtnClicked = function(e) {
    display.textContent += e.target.textContent;
};

const handleOperator = function (e) {
    // Store first operator for later use in compute function
    initialOperand = display.textContent;
    // Get the clicked operator
    storeOperator = e.target.textContent;

    // Check if the display is empty, do not allow an operator input
    if (display.textContent === '') {
        return;
    }

    // Check if the display has an operator, do not allow a second operator
    const availableOperators = ['+', '-', 'x', '/'];
    const lastChar = display.textContent.charAt(display.textContent.length - 1);

    if (availableOperators.includes(lastChar)) {
        // If the last character is an operator, do not allow a second operator
        return;
    }

    // Append the new operator to the display
    display.textContent += storeOperator;
};

operands.forEach(operand => {
    operand.addEventListener('click', displayBtnClicked);
})
operators.forEach(operator => {
    operator.addEventListener('click', handleOperator);
})
// End

clearAll.addEventListener('click', () => {
    display.textContent = '';
    initialOperand = null;
    currentOperand = null;
    storeSolution = null; 
    storeOperator = null;
});

// Function for computations & handleClick & operator transformation from string to symbol
const compute = function () {
    // Check if the display is empty
    if (display.textContent === '') {
        return;
    }

    // Split the expression based on operators
    const expression = display.textContent.split(/([+\-x/])/);

    // Initialize variables for computation
    let result = parseFloat(expression[0]); // Initialize with the first operand

    // Loop through the expression parts
    for (let i = 1; i < expression.length; i += 2) {
        const operator = expression[i];
        const operand = parseFloat(expression[i + 1]);

        // Perform the operation based on the operator
        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case 'x':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
            default:
                break;
        }
    }

    // Update the display with the result
    display.textContent = result;
    
};

equalsTo.addEventListener('click', compute);
// End


const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const equalsTo = document.querySelector('#equals-to');
const clearAll = document.querySelector('#clear-all');
const display = document.querySelector('#display');

let storeFirstOperand = null;
let storeCurrentOperand = null;
let storeOperator = null;


// Store & display operand and operator 
function displayOperandClicked (e) {
    display.textContent += e.target.textContent;
}
function displayOperatorClicked (e) {
    storeFirstOperand = display.textContent
    storeFirstOperand = parseFloat(storeFirstOperand);
    storeOperator = e.target;
    display.textContent += e.target.textContent;
}
operands.forEach(operand => {
    operand.addEventListener('click', displayOperandClicked);
})
operators.forEach(operator => {
    operator.addEventListener('click', displayOperatorClicked);
})
// End

// Function for computation & handleClick to run computation
function compute () {

}







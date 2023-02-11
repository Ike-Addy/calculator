//Use data sets for numbers
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandContainer = document.querySelector('[data-previous-operand]');
const currentOperandContainer = document.querySelector('[data-current-operand]');



//For each number clicked, show the number clicked in the output screen
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperandContainer.append(button.innerText)   
    })
})

/**For each operator clicked, show the operator and also show the numbers before
before the operators in the topmost output and the numbers after in the bottom output**/
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        previousOperandContainer.append(currentOperandContainer.innerText);
        currentOperandContainer.append(button.innerText);
    })
})

//Clear output screen when AC is clicked
allClearButton.addEventListener('click', () => {
    currentOperandContainer.innerText = '' ;
    previousOperandContainer.innerText = '' ;
})

//Deletes the last number or operator when DEL is clicked
deleteButton.addEventListener('click', () => {
    currentOperandContainer.innerText = currentOperandContainer.innerText.slice(0, -1);
});

// function operation (a, b) {
//     equalsButton.addEventListener('click', () => {
//         let toNumbers = parseInt(currentOperandContainer.innerText);
//         if (operationButtons == x) {
//             return a * b;
//         } else if (operationButtons == ÷) {
//             return a / b;
//         }
        
//     })
/** sasa **/
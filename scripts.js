//Use data sets for numbers
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandContainer = document.querySelector('[data-previous-operand]');
const currentOperandContainer = document.querySelector('[data-current-operand]');

//For each number clicked, show the number clicked in the lower output screen
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperandContainer.append(button.innerText)
    })
})

console.log(operationButtons);

/** Moves the first set of numbers to the upper output panel **/
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operations(currentOperandContainer, previousOperandContainer);
        //When an operation button is clicked, copy the contents of the lower container to the upper container
        previousOperandContainer.append(currentOperandContainer.innerText);
        //Adds the operator to the top container
        previousOperandContainer.append(button.innerText);
        //Keeps contains in lower container
        currentOperandContainer.append(button.innerText);
        
        

    })
});

function operations (a, b) {
    if (operationButtons === '÷') {
        return a / b;
    }
    if (operationButtons === 'x') {
        return a * b;
    } 
    if (operationButtons === '+') {
        return a + b;
    } 
    if (operationButtons === '-') {
        return a - b;
    }
};

//Clear output screen when AC is clicked
allClearButton.addEventListener('click', () => {
    currentOperandContainer.innerText = '' ;
    previousOperandContainer.innerText = '' ;
})

//Deletes the last number or operator when DEL is clicked
deleteButton.addEventListener('click', () => {
    currentOperandContainer.innerText = currentOperandContainer.innerText.slice(0, -1);
});

//The Plan
/** When an operation is clicked, begin computation by shifting the contents + operator in the currentcontainer to the top container
 * Then, compute if another operator is clicked or if the equal sign is clicked
 */




//Use data sets for numbers
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const upperContainer = document.querySelector('[data-previous-operand]');
const lowerContainer = document.querySelector('[data-current-operand]');

//Output for numbers and assign the innerText to values
numberButtons.forEach(button => {
    button.addEventListener('click', () => {        
        lowerContainer.append(button.innerText);
        button.value = button.innerText;       
        // console.log(button.innerText);
        // console.log(button.value);
        // console.log(lowerContainer.innerText);
    })
})

// Output for operators
operationButtons.forEach(button => {
    button.addEventListener('click', () => {        
        lowerContainer.append(button.innerText);
        // console.log(button.value);
        // console.log(button.innerText);
        // console.log(lowerContainer.innerText);
        button.disabled = true;
    })
});

equalsButton.addEventListener('click', () => {
    console.log(equalsButton.value);
    console.log(equalsButton.innerText);

    //compute();
    //upperContainer.append(lowerContainer.innerText);
})

// function compute (a, b) {
//     if (operationButtons === '÷') {
//         divide();
//     }
//     if (operationButtons === 'x') {
//         multiply();
//     } 
//     if (operationButtons === '+') {
//         add();
//     } 
//     if (operationButtons === '-') {
//         subtract();
//     }
// };

//Clear all button
allClearButton.addEventListener('click', () => {
    lowerContainer.innerText = '' ;
    upperContainer.innerText = '' ;
});

//Delete a single item
deleteButton.addEventListener('click', () => {
    lowerContainer.innerText = lowerContainer.innerText.slice(0, -1);
});

//Operator functions
function add (a,b) {
    return a + b;
}
function subtract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;
}
function divide (a,b) {
    return a / b;
}

//The Plan
/** When an operation is clicked, begin computation by shifting the contents + operator in the currentcontainer to the top container
 * Then, compute if another operator is clicked or if the equal sign is clicked
 */




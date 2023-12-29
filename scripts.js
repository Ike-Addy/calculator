//Store html components in JS
const numberButtons = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousScreen = document.querySelector('[data-previous-screen]');
const currentScreen = document.querySelector('[data-current-screen]');

let operatorValue = '';
let currentValue = '';
let previousValue = '';

//Output for numbers and assign the textContent to values (first)
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => { 
       handleNumber(e.target.textContent) 
       currentScreen.textContent = currentValue;
    })
})

function handleNumber(num){
    currentValue += num;
}

// Output for operators  (second)
operator.forEach(button => {
    button.addEventListener('click', (e) => {        
        handleOperator(e.target.textContent)
        currentScreen.textContent = currentValue; //Should be empty
        previousScreen.textContent = previousValue + " " + operatorValue;
    })
});

function handleOperator(op) {
    operatorValue = op;
    previousValue = currentValue;
    currentValue = '';
}


// Calculates previousValue and currentValue when equal sign is clicked (third)
equalsButton.addEventListener('click', () => {
    calculate();
    currentValue = previousValue;
    currentScreen.textContent = currentValue;
    previousScreen.textContent = ''; 
})


function calculate () {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
 
    if (operatorValue === '÷') {
        previousValue /= currentValue;
    } else if(operatorValue === 'x') {
        previousValue *= currentValue;
    } else if(operatorValue === '+' ) {
        previousValue += currentValue;
    } else {
        previousValue -= currentValue;
    };
}

//Clear all button
allClearButton.addEventListener('click', () => {
    currentScreen.textContent = '' ;
    previousScreen.textContent = '' ;
    operatorValue = '';
    currentValue = '';
    previousValue = '';
});

//Delete a single item
deleteButton.addEventListener('click', () => {
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
    currentValue = currentScreen.textContent;
});

/** 1) User inputs a number ++
 * 2) Store this number in the currentValue variable ++
 *      >> Numbers are currently stored as strings so i need to turn them into numbers
 * 3) User selects an operator
 *      >> When the user selects an operator, move the current number as well as the selected operator into the top(previous screen)++
 *      >> Clear the currentScreen for a new value to be stored ++
 * 4) Calcute inputs in previousScreen and currentScreen
 *      >> Create a function to calculate ++
 *              && Make sure the function accounts for unique symbols and translates it to mathematical symbols ++
 * 5) Clear the numbers in the previous screen and move the total value to the current screen++
 * 
 * 
 *  TO DO
 * >> Allow calculator to string calculation without the equal sign
 * >> Prevent calculator from using more than 1 decimal point at a time
 */
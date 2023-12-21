const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const compute = document.querySelector('#compute');
const clearAll = document.querySelector('#clear-all');
const currentDisplay = document.querySelector('.current-display');
const computedDisplay = document.querySelector('.computed-display');


operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        alert(e.target.innerText);
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        alert(e.target.innerText);
    })
})

compute.addEventListener('click', () => {
    alert(compute.innerText);
})

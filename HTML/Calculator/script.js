let expression = '';

function appendToExpression(value) {
    expression += value;
    console.log(expression);
    js_show();
}

function calculateExpression() {
    try {
        expression = eval(expression);
        console.log(expression);
    } catch (error) {
        console.error('Error in calculation:', error);
    }
    js_show();
}

function clearExpression() {
    expression = '';
    console.log('Cleared.');
    js_show();
}

function js_show() {
    let expr1 = document.querySelector('.js-show');
    expr1.innerHTML = `${expression}`;
}

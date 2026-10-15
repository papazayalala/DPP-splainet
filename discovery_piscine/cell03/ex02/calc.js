setInterval(function() {
    alert('Please, use me...');
}, 30000);


function isPositiveInteger(str) {
    if (str.trim() === '') return false;

    const num = Number(str);

    return Number.isInteger(num) && num >= 0;
}

function calculate() {
    const leftVal = document.getElementById('leftNum').value;
    const rightVal = document.getElementById('rightNum').value;
    const operator = document.getElementById('operator').value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);

    if ((operator === '/' || operator === '%') && num2 === 0) {
        leftInput.value = '';
        rightInput.value = '';
        const overMsg = "It's over 9000!";
        alert(overMsg);
        console.log(overMsg);
        return;
    }

    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    

    alert(result);
    console.log(result);
}
function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;

    var result;
    switch (operator) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
        case 'exponentiation':
            result = Math.pow(num1, num2);
            break;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Rezultatul pentru ' + num1 + ' ' + operator + ' ' + num2 + ' este: ' + result;
}

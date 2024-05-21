function solve(numOne, numTwo, operator) {
    let result = 0;
    let firstNumber = Number(numOne);
    let secondNumber = Number(numTwo);

    switch (operator) {
        case '+': result = firstNumber + secondNumber;
            break;
        case '-': result = firstNumber - secondNumber;
            break;
        case '*': result = firstNumber * secondNumber;
            break;
        case '/': result = firstNumber / secondNumber;
            break;
        case '%': result = firstNumber % secondNumber;
            break;
        case '**': result = firstNumber ** secondNumber;
            break;
    }

    console.log(result);
}
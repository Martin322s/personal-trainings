function solve(firstNumber, secondNumber) {
    let start = Number(firstNumber);
    let end = Number(secondNumber);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        let currentNumber = Number(i);
        sum += currentNumber;
    }

    return sum;
}
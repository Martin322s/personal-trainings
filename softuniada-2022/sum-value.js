function solve(firstNumber, secondNumber) {
    let greatestCommonDivisor = gcd(firstNumber, secondNumber);
    let lowestCommonMultiple = (firstNumber * secondNumber) / greatestCommonDivisor;

    console.log(greatestCommonDivisor + lowestCommonMultiple);

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

solve(8, 12);
function solve(array) {
    let sum = (arr) => arr.reduce((acc, currValue) => acc + currValue, 0);
    let inverseSum = (arr) => arr.reduce((acc, currValue) => acc + 1 / currValue, 0);
    let concat = (arr) => arr.join('');

    console.log(sum(array));
    console.log(inverseSum(array));
    console.log(concat(array));
}
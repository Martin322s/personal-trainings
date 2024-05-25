function solve(matrix) {
    let maxNumber = 0;
    let maxNumbersArr = [];

    for (let i = 0; i < matrix.length; i++) {
        maxNumbersArr.push(Math.max(...matrix[i]));
    }

    maxNumber = Math.max(...maxNumbersArr);

    return maxNumber;
}
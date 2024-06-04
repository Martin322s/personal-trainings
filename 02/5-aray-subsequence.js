function solve(array) {
    let biggestNumber = 0;
    let result = [];

    for (let num of array) {
        if (num >= biggestNumber) {
            biggestNumber = num;
            result.push(num);
        } else {
            continue;
        }
    }

    return result;
}
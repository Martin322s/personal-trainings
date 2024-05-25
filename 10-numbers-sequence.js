function solve(limitNumber, numbersCount) {
    let result = [];

    if (result.length === 0) {
        result.push(1);
    }

    for (let i = 1; i < limitNumber; i++) {
        let sum = 0;
        let previous = i - 1;

        for (let j = numbersCount; j > 0; j--) {
            if (previous >= 0) {
                sum += result[previous];
            }
            previous--;
        }

        result.push(sum);
    }

    return result;
}
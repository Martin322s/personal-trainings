function solve(input) {
    let result = [];
    let sortedArray = input.sort((a, b) => a - b);

    while (sortedArray.length !== 0) {
        let firstElement = sortedArray.shift();
        let lastElement = sortedArray.pop();

        result.push(firstElement);
        result.push(lastElement);
    }

    return result;
}
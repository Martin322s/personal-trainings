function solve(array) {
    let resultArr = [];

    for (const element of array) {
        if (element >= 0) {
            resultArr.push(element);
        } else {
            resultArr.unshift(element);
        }
    }

    console.log(resultArr.join('\n'));
}
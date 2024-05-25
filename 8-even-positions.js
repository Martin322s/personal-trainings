function solve(array) {
    let resultArr = [];
    array.forEach((x, i) => i % 2 === 0 ? resultArr.push(x) : null)

    return resultArr.join(' ')
}
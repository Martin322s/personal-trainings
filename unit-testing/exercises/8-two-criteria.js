function solve(input) {
    let secondCriteria = input.sort((a, b) => a.localeCompare(b));
    let result = secondCriteria.sort((a, b) => a.length - b.length);

    console.log(result.join('\n'));
}

module.exports = solve;
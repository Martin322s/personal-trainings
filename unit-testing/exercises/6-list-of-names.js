function solve(input) {
    input
        .sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

module.exports = solve;
export function solve(input) {
    input = input
        .sort((a, b) => a.localeCompare(b))
        .map((x, i) => `${i + 1}.${x}`);

    return input;
}
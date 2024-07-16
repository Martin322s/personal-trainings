export function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop())
    }

    return array.join(' ');
}

solve([1, 2, 3, 4, 5, 6], 5);
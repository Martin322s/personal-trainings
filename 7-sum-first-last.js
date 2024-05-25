function solve(array) {
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());

    return firstElement + lastElement;
}
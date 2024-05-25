function solve(array) {
    let sortedArr = array.sort((a, b) => a - b);

    console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}
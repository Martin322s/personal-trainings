function solve(array) {
    let resultArr = [];
    array = array.map(x => x * 2);

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            resultArr.push(array[i]);
        }
    }

    console.log(resultArr.reverse().join(' '));
}
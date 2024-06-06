function solve(input) {
    let uniqueArrays = new Map();

    input.forEach(arrayString => {
        let currentArray = JSON.parse(arrayString).sort((a, b) => b - a);
        let key = JSON.stringify(currentArray.slice().sort((a, b) => a - b));

        if (!uniqueArrays.has(key)) {
            uniqueArrays.set(key, currentArray);
        }
    });

    let sortedArrays = Array.from(uniqueArrays.values()).sort((a, b) => a.length - b.length);

    sortedArrays.forEach(array => {
        console.log(`[${array.join(', ')}]`);
    });
}
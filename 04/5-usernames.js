function solve(input) {
    let set = new Set();
    let result = [];

    input.forEach(x => set.add(x));
    set.forEach(x => result.push(x))

    result = result.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    console.log(result.join('\n'));
}
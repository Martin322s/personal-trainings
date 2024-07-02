function solve(input) {
    let data = JSON.parse(input);
    let obj = {};

    for (let object of data) {
        let keys = Object.keys(object);

        keys.forEach(x => {
            if (!obj[x]) {
                obj[x] = object[x];
            }
        });
    }

    return obj;
}
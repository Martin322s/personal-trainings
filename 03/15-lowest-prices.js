function lowestPrices(array) {
    let products = new Map();

    for (let sentance of array) {
        let [town, product, price] = sentance.split(" | ");

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [key, value] of products) {
        let lowest = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));

        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}
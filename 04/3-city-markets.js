function solve(input) {
    let towns = {};

    for (let product of input) {
        let [town, productName, ...price] = product.split(' -> ');
        let [quantity, priceForUnit] = price[0].split(' : ');
        quantity = Number(quantity);
        priceForUnit = Number(priceForUnit);
        let total = quantity * priceForUnit;

        if (!towns[town]) {
            towns[town] = {};
        }

        if (!towns[town][productName]) {
            towns[town][productName] = 0;
        }

        towns[town][productName] += total;
    }

    for (let town in towns) {
        console.log(`Town - ${town}`);
        for (let product in towns[town]) {
            console.log(`$$$${product} : ${towns[town][product]}`);
        }
    }
}
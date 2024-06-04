function solve(library, orders) {
    let result = [];

    for (let order of orders) {
        let orderObject = {};
        orderObject.name = order.template.name;

        for (let part of order.parts) {
            orderObject[part] = library[part];
        }
        result.push(orderObject);
    }

    return result;
}
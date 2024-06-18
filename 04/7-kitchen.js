class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = [];
        this.productsInStock = [];
        this.actionsHistory = [];
    }

    loadProducts(arr) {
        let results = [];

        for (let product of arr) {
            let [productName, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (this.budget >= price) {
                if (!this.productsInStock.some(x => x.productName === productName)) {
                    this.productsInStock.push({ productName, quantity });
                    this.budget -= price;
                } else {
                    let product = this.productsInStock.find(x => x.productName === productName);
                    let index;
                    if (product) {
                        index = this.productsInStock.indexOf(product);
                    }
                    product.quantity += quantity;
                    this.productsInStock.splice(index, 1, product);
                    this.budget -= price;
                }
                results.push(`Successfully loaded ${quantity} ${productName}`);
            } else {
                results.push(`There was not enough money to load ${quantity} ${productName}`);
            }
        }

        return results.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.some(x => x.meal === meal)) {
            this.menu.push({ meal, neededProducts, price });
            return `Great idea! Now with the ${meal} we have ${this.menu.length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (this.menu.length === 0) {
            console.log('Our menu is not ready yet, please come later...');
        } else {
            return this.menu.map(meal => `${meal.meal} - $ ${meal.price}`).join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = this.menu[meal].products;
        for (let product of neededProducts) {
            let lastSpaceIndex = product.lastIndexOf(' ');
            let quantity = Number(product.slice(lastSpaceIndex + 1));
            let productName = product.slice(0, lastSpaceIndex);

            let productInStock = this.productsInStock.find(x => x.productName === productName);

            if (!productInStock || productInStock.quantity < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (let product of neededProducts) {
            let lastSpaceIndex = product.lastIndexOf(' ');
            let quantity = Number(product.slice(lastSpaceIndex + 1));
            let productName = product.slice(0, lastSpaceIndex);

            let productInStock = this.productsInStock.find(x => x.productName === productName);
            productInStock.quantity -= quantity;

            if (productInStock.quantity === 0) {
                this.productsInStock = this.productsInStock.filter(x => x.productName !== productName);
            }
        }

        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals on the menu, other ideas?

console.log(kitchen.showTheMenu());

// frozenYogurt - $ 9.99
// Pizza - $ 15.55

console.log(kitchen.makeTheOrder('Pizza'));

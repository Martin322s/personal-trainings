class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.allCustomers.push({ ...customer, info: [] });
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.totalMoney ? customer.totalMoney += amount : customer.totalMoney = amount;
            customer.info.push(`${customer.info.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
            return `${customer.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (customer.totalMoney < amount) {
                throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
            } else {
                customer.totalMoney -= amount;
                customer.info.push(`${customer.info.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
                return `${customer.totalMoney}$`;
            }
        }
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.info = customer.info.sort((a, b) => {
                let orderA = Number(a.split('.')[0]);
                let orderB = Number(b.split('.')[0]);

                return orderB - orderA;
            });

            let reuslt = [];
            reuslt.push(this._bankName);
            reuslt.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
            reuslt.push(`Customer ID: ${customer.personalId}`);
            reuslt.push(`Total money: ${customer.totalMoney}$`);
            reuslt.push('Transactions:');
            reuslt.push(customer.info.join('\n'));

            for (let key in customer) {
                console.log(key);
            }
        }
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

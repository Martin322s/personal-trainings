class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.totalMoney ? customer.totalMoney += amount : customer.totalMoney = amount;
            return `${customer.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (customer.totalMoney < amount) {
                throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!”`)
            } else {
                customer.totalMoney -= amount;
                return `${customer.totalMoney}$`;
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

// console.log(bank.customerInfo(6233267));

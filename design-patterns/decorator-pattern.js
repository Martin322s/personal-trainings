function userFactory(name, age) {
    return {
        name,
        age,
        sayHello() {
            console.log(`Hello I'm ${this.name}`);
        }
    }
}

let user = userFactory('Pesho', 22);
user.sayHello();
console.log(user);


function decoratedUser(user, city) {
    return {
        ...user, 
        city,
        sayHello() {
            console.log(`Hello I'm ${this.name} and I'm from ${this.city}`);
        }
    }
}

let decorateUser = decoratedUser(user, 'Sofia');
decorateUser.sayHello();


let person = userFactory('Gosho', 21);
let decoratedPerson = decoratedUser(person, 'Montana');

person.sayHello();
decoratedPerson.sayHello();
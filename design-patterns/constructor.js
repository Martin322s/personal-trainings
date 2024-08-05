// Object creation
let obj = {};

let newObj = Object.create(obj);

console.log(newObj);

// Function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello I'm ${this.name}.`);
    }
}

let person = new Person('Pesho', 22);
person.sayHello();
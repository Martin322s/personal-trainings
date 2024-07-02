function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
}

let person1 = new Person('Pesho', 22);

person1.sayHello();

function newWord(constructor, ...params) {
    // 1. CREATE AN OBJECT
    let obj = {};

    // 2. SET PROPERTIES
    constructor.apply(obj, params);

    // 3. SET PROTOTYPE
    Object.setPrototypeOf(obj, constructor);

    // 4. RETURN OBJECT
    return obj;
}

function Student(name, age, grades) {
    Person.call(this, name, age);
    this.grades = grades;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.getGrades = function () {
    console.log(`My grades are: ${this.grades.join(', ')}`);
}

let person2 = new Person('Goshko', 23);
let student = new Student('Toshko', 23, [2, 5, 6, 4]);

person2.sayHello();
student.sayHello();
student.getGrades();
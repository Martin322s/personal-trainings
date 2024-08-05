// Prototype pattern
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.sayHello = function () {
    console.log(`Hello I'm ${this.name}`);
}

let student = new Student('Gosho', 22);
student.sayHello();
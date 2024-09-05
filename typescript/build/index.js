// Boolean types
let isGood = true;
let isNotGood = false;
// Number type
let integer = 1;
let dobuleFloat = 1.10;
let binaryNumber = 0x1;
let hexaNumber = 0x255;
let bigInteger = 0b001;
// String types
let singleQuotes = 'Pesho';
let doubleQuotes = "Double";
let templateLiteral = `Template`;
let backQuotes = `Back`;
let multiLine = `a`;
// Null and Undefined
let nullVariable = null;
let undefinedVariable1;
let undefinedVariable2 = undefined;
// Void
function printStar() {
    console.log('*');
}
function counter() {
    return 1;
}
class Person {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(username, password) {
        if (username === this.username && password == this.password) {
            return true;
        }
        return false;
    }
}
let person = new Person('admin', 'admin1');
console.log(person.login('admin', 'admin1'));

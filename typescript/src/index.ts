// Boolean types
let isGood: boolean = true;
let isNotGood: boolean = false;

// Number type
let integer: number = 1;
let dobuleFloat: number = 1.10;
let binaryNumber: number = 0x1;
let hexaNumber: number = 0x255;
let bigInteger: number = 0b001;

// String types
let singleQuotes: string = 'Pesho';
let doubleQuotes: string = "Double";
let templateLiteral: string = `Template`;
let backQuotes: string = `Back`;
let multiLine: string = `a`;

// Null and Undefined
let nullVariable: null = null;
let undefinedVariable1: undefined;
let undefinedVariable2: undefined = undefined;

// Void
function printStar(): void {
    console.log('*');
}

function counter(): number {
    return 1;
}

// Interface
interface User {
    username: string;
    password: string;
    login: (username: string, password: string) => boolean;
}

class Person implements User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(username: string, password: string): boolean {
        if (username === this.username && password == this.password) {
            return true;
        }

        return false;
    }
}

let person: Person = new Person('admin', 'admin1');

console.log(person.login('admin', 'admin2'));
class Singelton {
    static instance = null;

    constructor() { }

    static createInstance() {
        if (this.instance == null) {
            this.instance = new Singelton();
        }

        return this.instance;
    }
}

let instance1 = Singelton.createInstance();

let instance2 = Singelton.createInstance();

console.log(instance1 === instance2);
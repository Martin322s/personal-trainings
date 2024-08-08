class Iterator {
    constructor(elements) {
        this.index = 0;
        this.elements = elements;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

let elements = [1, 2, 3, 4, 5];
let iterator = new Iterator(elements);
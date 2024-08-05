const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
};

const personProxy = new Proxy(person, {});

console.log(personProxy.name);
personProxy.name = 'John Coe';
console.log(personProxy.name);
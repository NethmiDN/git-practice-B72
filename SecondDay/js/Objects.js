console.log('Objects.js loaded');

// creating an object

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    hobbies: ['reading', 'swimming', 'running'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function() {
        return 2025 - this.age;
    }
}

console.log(person);

// 1. accessing object properties

// - dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

// - bracket notation
console.log(person['firstName']);

console.log("====================");

// 2. adding properties

person.phone = "555-555-5555";
console.log(person);

console.log("====================");

// 3. modify properties
person.firstName = "Jane";
console.log(person);

// 4. delete properties
delete person.phone;
console.log(person);

let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getDescription: function() {
        return this.brand + '-' + this.model + '-' + this.year;
    }
}
console.log(car.getDescription());

// looping properties

for(let key in person) {
    console.log(key, person[key]);
}

let { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);

//1. object.keys()
console.log(Object.keys(person));

//2. object.values()
console.log(Object.values(person));

//3. object.entries()
console.log(Object.entries(person));

// class definition
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
}
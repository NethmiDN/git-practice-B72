console.log("Function.js is loaded...")

function greet(firstName) {
    if ( firstName === undefined) {
        console.log("Hello, World!");
    } else {
        // console.log("Hello " + firstName);
        console.log(`Hello, ${firstName}...!`);
    }
}
greet();
greet('Nethmi');

//Function Expression
let greet2 = function (firstName) {
    console.log(`Hello, ${firstName}...!`);
}
greet2("Nethmi");

//Arrow Function
let greet3 = (firstName) => { //single parameter there can not use paranthesis, but more than one their should use paranthesis
    console.log(`Hello, ${firstName}...!`);
}
greet3("Nethmi");
let greet4 = firstName => console.log(`Hello, ${firstName}...!`);

let greet5 = (firstName = "neth") => {
    console.log("Hello, World!");
}
greet5();

let sum = (...numbers) => {
    numbers.forEach(number => console.log(number));
}
sum(1, 2, 3, 4, 5);
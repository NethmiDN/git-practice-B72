console.log("data types is loaded");

//1.numeric - represent both integer and floating number
let num1 = 10;
let num2 = 10.5;

console.log(typeof num1);
console.log(typeof num2);

console.log("====================================");

//2. string - represents a sequence of characters

let customerName = "John";
console.log(typeof customerName);

console.log("====================================");

//3. boolean - represents true or false

let isLogged = true;
console.log(typeof isLogged);

console.log("====================================");

// 4. undefined - represents unassigned value

let x;
console.log(x);
console.log(typeof x);

console.log("====================================");

// 5. null - represents no value

let y = null;
console.log(y);
console.log(typeof y);

console.log("====================================");

// 6. bigInt - represents whole numbers larger than 2^53 - 1

let bigIntValue = 1234567890123456789012345678901234567890n;
let number = 1234567890123456789012345678901234567890;

console.log(typeof bigIntValue);
console.log(typeof number);

console.log("====================================");

//7. object - represents collection of key-value pairs

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

console.log(person);
console.log(typeof person);

console.log("====================================");

//8. array - represents a list of elements

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors);

console.log("====================================");

//9. function - represents a function

function greet() {
    console.log("Hello World!");
}
greet();
console.log(typeof greet);

console.log("====================================");


//10. Date - represents a date and time

let today = new Date();
console.log(today);
console.log(typeof today);      
console.log("Arrays.js is loaded...")

// 1. creating an array

//using array literals
let colors = ['red', 'green', 'blue'];
console.log(colors);

//using new keyword and array constructor
let colors2 = new Array('red', 'green', 'blue');
console.log(colors2);

console.log("=====================================");

let myArray = [10, 'kamal', true, undefined, null, { name: 'Nethmi' }, [1, 2, 3]];
console.log(myArray);

// 2. Accessing elements
console.log(colors[0]);

console.log("=====================================");

// 3. Modifying elements
//4. length of the array
colors[0] = 'yellow';
console.log(colors);

console.log("=====================================");

// built in array functions

let fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];

//5.push() - add element to the end of the array

fruits.push('grapes');
console.log(fruits);

console.log("=====================================");

//6.pop() - remove element from the end of the array

fruits.pop();
console.log(fruits);

//7.unshift() - add element to the beginning of the array
fruits.unshift('banana');
console.log(fruits);


//8.shift() - remove element from the beginning of the array

fruits.shift();
console.log(fruits);

//9. concat() - merge two or more arrays
let vegetables = ['potato', 'tomato', 'carrot'];
let items = fruits.concat(vegetables);
console.log(items);

// 10. forEach() - iterate over an array
items.forEach(function (item) {
    console.log(item);
});

// 11. map() - iterate over an array and modify the elements

let upperCaseItems = items.map(item => item.toUpperCase());
console.log(upperCaseItems);

// 12. filter() - filter elements based on a condition
let filterdItems = items.filter(item => item.length > 5);
console.log(filterdItems);
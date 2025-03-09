console.log("DOM Selector is loaded");

console.log(document);

// 1. select using element ID

const heading = document.getElementById("heading");
console.log(heading);

// 2. select elemt by class name

const paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);

// 3. select element by tag name

const tags = document.getElementsByTagName("p");
console.log(tags);

// 4. select the first element that matches a specific CSS selector(s)

const querySelector = document.querySelector("#heading");
console.log(querySelector);

// 5. select the all element that matches a specific CSS selector(s) - return node list

const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll);
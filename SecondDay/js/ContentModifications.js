console.log("loaded");

// 1. text content - gets or sets the text content of an element

const heading = document.getElementById("heading");

console.log(heading);
console.log(heading.textContent);

heading.textContent = "helloooow ";

// 2. innerHTML - gets or sets the html nside of an element

const card = document.querySelector(".card");
//console.log(card.innerHTML);
//card.innerHTML = "<h2>My card</h2><p>this is a card</p>";

// 3.

console.log(card.innerText);
card.innerText = "Just the text";

const input = document.querySelector('input[type="text"]');
console.log(input.value);
input.value = "Hello world!";

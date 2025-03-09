console.log("class manipulation is loaded");

const heading = document.getElementById("heading");
console.log(heading.classList);

//1. classList.add() - adds one or more classes
heading.classList.add("new-class", "rounded", "highlight");
console.log(heading.classList);

//2. classList.remove() - delete pne or more classes 
heading.classList.remove("new-class", "rounded", "highlight");

heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");

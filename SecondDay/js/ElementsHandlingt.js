console.log("Element handling is loaded");

const newDiv = document.createElement("div");
const secondDiv = document.createElement("div");

newDiv.id = "alert success";
newDiv.className = "alert alert success"
newDiv.textContent = "successfuly created";
//console.log(newDiv);

newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";
console.log(newDiv);

const card = document.querySelector(".card");
card.appendChild(newDiv);

secondDiv.className = "warning alert"
secondDiv.textContent = "warning!...........";

secondDiv.style.backgroundColor = "red";
secondDiv.style.color = "black";
secondDiv.style.borderRadius = "12px";
secondDiv.style.padding = "10px";
secondDiv.style.marginTop = "10px";
console.log(secondDiv);

card.appendChild(secondDiv);


const cloneDiv = secondDiv.cloneNode(true);
card.append(cloneDiv);

console.log(card.hasChildNodes());
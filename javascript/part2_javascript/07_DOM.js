/******************************Document object model (DOM)******************************************/
window.console.log("hello");

window.alert("DOM");

console.dir(document.body);

let heading = document.getElementById("subHeading");
console.dir(heading);

console.log(document.body);
console.dir(document.body);
 
console.dir(document.head);

console.dir(document.body.childNodes[1]);  // print first node of body 

document.body.childNodes[3].innerText = "abcdef"; // change the text of 3rd childnode

let mainHeading = document.getElementsByClassName("subHeading");

console.log(mainHeading);
console.dir(mainHeading);

let head2 = document.getElementById("heading");

console.log(head2);
console.dir(head2);

let parahs = document.getElementsByTagName("p");

console.log(parahs);
console.dir(parahs);


// query selector returns only first element 
// querySelectorAll reurns all elements

let firstElement = document.querySelector("h1"); // used for all id , class, tags 
 
console.dir(firstElement );

let pqr = document.querySelector("#heading");

let xyz = document.querySelector(".subHeading");

console.dir(xyz);

let allEl = document.querySelectorAll("p");

console.dir(allEl);

// properties 

head2.innerHTML = "<i> hii <i>";
head2.innerHTML = "<i> hii <i>";

let h4 = document.querySelector("h4");

console.dir(h4.innerText);
h4.innerText = h4.innerText + " from Apna College";

let divs = document.querySelectorAll(".box");

console.dir(divs.innerText);
// divs[0].innerText = " new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

let i = 1;
for ( div of divs){
    div.innerText = `new value inner value ${i}`;
    i++;
}

let divBox = document.querySelectorAll("div");

console.dir(divBox);

div.style.backgroundColor = "pink";
div.style.fontSize = "20px";

// div.style.visibility = "hidden";

let newButton = document.createElement("Button");
newButton.text = "click me";

console.log(newButton);

// divBox.append(newButton); 





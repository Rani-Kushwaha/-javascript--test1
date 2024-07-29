/****************************************Event Handling*********************************************/

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("button was clicked");
//     let x = 12;
//     x++;
//     console.log(x);
// }

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are on mouse");
};

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = (e) =>{
//     console.log(e);
//     console.log("btn was doubleCliked");
// };

btn1.addEventListener("click", (evt) => {
     console.log("button is clicked - handler");
});

const secButton = () =>{
    console.log("hii , you clicked the button");
};
btn2.addEventListener("dblclick", secButton);


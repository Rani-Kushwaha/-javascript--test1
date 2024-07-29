let btn = document.querySelector("#btn");

// const clickBtn = () =>{
//     document.body.style.backgroundColor = "black";
// }

// btn.addEventListener("click" , clickBtn);    // code by own self , i create on click dark-mode

let mode = "light";
btn.addEventListener("click", () => {
    console.log("Mode change on click");

    if(mode === "light"){
        document.querySelector("body").style.backgroundColor = "Black";
        mode = "dark";
    }
    else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});
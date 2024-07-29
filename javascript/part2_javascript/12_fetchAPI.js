const URL = "https://alexwohlbruck.github.io/cat-facts/";

const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// API fetch (data fetch) using async await method

// const getfacts = async() => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response); // give response as JSON formate 
//     let data = await response.json();
//     console.log(data[0].text);
//     factpara.innerHTML =data[0].text;
// }
// getfacts();

// using promise chain method 
function getfacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
    });
}

btn.addEventListener("click" ,getfacts);
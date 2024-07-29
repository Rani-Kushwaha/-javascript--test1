// function hello() {
//     console.log("Hello");
// }
// setTimeout(hello , 3000); // timeout ,   3s = 3000ms

// console.log("one");
// console.log("two");
//  setTimeout(() => {
//     console.log("setTimeout function invoked");
//  },5000)
//  console.log("three"); // here we check the code is syncronous or asynscronous 
// console.log("four");

// function sum(a , b) {
//     console.log("sum = " , a + b);
// }
// function calculator(a , b , sumCallBack) {
//     sumCallBack(a, b);
// }

// calculator(5 , 6, sum); // callBack 

// function getdata(dataId , getNextData){

//     setTimeout(() => {
//         console.log(dataId);
//         if(getNextData){
//         getNextData();
//         }
//     }, 2000);
// } 

// // callBack Hell
// getdata(1 , () => { 
//     console.log("getting data2...");
//     getdata(2, () => {  
//         console.log("getting data3...");
//         getdata(3, () => {  
//             console.log("getting data4...");
//             getdata(4);
//         });
//     });
// });

/***********************************Promises*******************************************/

// let Promises = new Promise((resolve , reject) =>{
//     console.log("it is promises");
//     resolve("successful");
// });

// function getdata(dataId , getNextData){
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(dataId);
//         resolve("success");
//         if(getNextData){
//         getNextData();
//         }
//     }, 5000);
// });
// } 

// const getPromise = () => {
//     return new Promise((resolve, reject)=>{
//         console.log("it is new promise");
//         // resolve("Success");
//         reject("rejected the promise")
//     });
// }

// let promise1 = getPromise();
// promise1.then((res)=>{
//     console.log("promise fulfilled");
// });

// promise1.catch((err)=>{
//     console.log("some error occured")
// })

// function asyncFunc(){
// return new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         console.log("data 1");
//         resolve("success")
//     }, 3000);
// });
// }

// console.log("Fetching data1");

// function asyncFunc2(){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success")
//         }, 5000);
//     });
//     }

// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log("success");
//     });
// });
 /***********************************async await ***************************************/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather data");
            resolve("200");
        }, 1000);
    });
}

async function getWeather() {
    console.log("fetching api...");
    await api();
    console.log("successfully fetched")
}
getWeather();

// console.log("Async Await");






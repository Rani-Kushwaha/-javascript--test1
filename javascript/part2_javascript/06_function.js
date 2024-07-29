// function in js

// function myfunc(){
//     console.log("hello javascript learner");
// }
// myfunc();

// function print(msg){
//     console.log(msg);
// }
// print("learning js");

// const arrowSum = (a , b) => {
//     console.log(a +b);
// };

// arrowSum(3, 56);

// const arrowMul = (a , b) => {
//     console.log(a * b);
// };
// arrowMul(2, 7);

// let count = 0;
// function countVowels(str){
//     for(const char of str){
//         if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
//             count++;
//         }
//     }
//     return count;
// }
// totalCount = countVowels("i love javascript");
// console.log(totalCount);


// // forEach function 
// //   - Here it is a function that execute each element of Array 

// let array = [ "abc", "pqr" ,"xyz" ];

// array.forEach(element => {
//     console.log(element);
// });

// array.forEach(element => {
//     console.log(element.toUpperCase());
// });

// let arrNum = [1, 2, 3, 4, 5];

// arrNum.forEach(element => {
//     console.log(element**2);
// }); 

// console.log(arrNum[0]);
// console.log(arrNum[1]);


// // Map method 

// let map = arrNum.map((val)=>{
//     return 2*val;
// })

// console.log(map[0]);
// console.log(map[1]);
// console.log(map[2]);
// console.log(map[3]);
// console.log(map[4]);

// console.log(arrNum[0]);

// let evenArr = arrNum.filter((val)=>{
//     return val % 2  === 0;
// })

// console.log(evenArr);

// let greaterArr = arrNum.filter((val)=>{
//     return val > 4;
// })

// console.log(greaterArr);

// // Reduce 

// let arr = [1, 2, 3, 4, 5]

// const output = arr.reduce((res , curr) => {
//     return res + curr;
// })
// console.log(output);

// const output2 = arr.reduce((prev, cur)=>{
//     return (prev > cur)? prev : cur ;
// })
// console.log(output2);

// filter

// let marks = [89, 97, 91, 79, 90, 92, 87];

// let filteredMarks = marks.filter((val)=>{
//     return val > 90;
// })
// console.log(filteredMarks);

let n = prompt("Enter a number");

let arr = [];

for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}

for(let i = 0; i <=n; i++){
    console.log(arr[i]);
}

let sum = arr.reduce((res, curr)=>{
    return res+curr;
})
console.log(sum);

let mul = arr.reduce((res , curr)=> {
    return res*curr;
})

console.log(mul);
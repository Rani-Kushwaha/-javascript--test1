// Loops

// for(let i = 1; i <= 10; i++){
//     console.log("Javascript");
// }

// let sum = 0;

// for(let i = 0; i <=5 ; i++){
//     sum = sum + i;
// }

// console.log(sum);

// for(let i = 0; i <=5; i++){
//     console.log(i);
// }

// let i = 1;
// while (i<=5) {
//     console.log("i = ", i);
//     i++;
// }

// let i = 1;
// do {                       // aleast run 1 time is fix in dowhile loop
//     console.log("Rani"); 
//     i++; 
// } while (i <= 5);

// // for-of loop

// let str = "Javascript"
// for (const i of str) {
//     console.log(i);
// }

// // for-in loop 

// let student = {             // student is an object here
//     name : "abcde",
//     age  : 20,
//     cgpa : 9.5,
// }

// for (const i in student) {
//     console.log(i);
// }
// for(let key in student){
//     console.log("key = ", key , ": value = ", student[key]);
// }

// for (let i = 0; i <= 100; i++) {
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

let gameNum = 25;
for(let i = 1;      ; i++){
    let guessNum = prompt("Guess a num between 1 to 50: ");
    if (guessNum == gameNum){
        break; 
    }
}

// let str = "hello world";

// console.log(str[5]);

// // Template Literals 
// // string with backtax 

// let specialString = `this is template literal`;
// console.log(specialString);
// console.log(typeof specialString);

// basically template literal used in string interpolation

// let obj = {
//     name : "pen",
//     price: 10,
// };
// let output = `the cost of ${obj.name} is ${obj.price} rupees.`

console.log(output);

let str = "jdaefhefn";
console.log(str.toUpperCase());

let fullName = prompt("Enter your full name:");

console.log("@"+ fullName + fullName.length);

// Array

const myArray = [10 , 20 , 30 , 40 , 50 , true ,"rani"] // JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[7]);

let marvelHeros = ["ironman" , "thor" , "hulk" , "captainAmerica"];
// console.log(marvelHeros[1])

const language = [ "C+" , "C", "Python", "java"];
// console.log(language)
 
const myArr2 = new Array(1,2,3,4,5,6,7);
// console.log(myArr2);

// Arrays Methods 

myArr2.push(8); // .push is used to add last elements into the array
console.log(myArr2);

myArr2.pop(); // .pop() is used to remove last element from an array
console.log(myArr2);


myArr2.shift(); // .shift() is used to remove first element of an array
console.log(myArr2);
// myArr2.unshift("zero"); // .unshift() is used to add element at beginning of an array
// console.log(myArr2);

// console.log(myArr2.includes(7));


// const newArr = myArr2.join(); // join() method is used to change the value of array into string
// console.log(newArr);
// console.log(typeof newArr);

// const arrString = myArr2.toString();
// console.log(arrString);
// console.log(typeof arrString);

// slice and splice 

console.log("A" , myArr2);
const slicedArr = myArr2.slice(0, 3); // it will take all the elements from index 0 to 3 (but not include 3 index)
console.log(slicedArr);
console.log("B" , myArr2);

const splicedArr = myArr2.splice(1 , 4); //  it will take all the elements from the index 1 to 4 including 4th index also , the major difference between slice and splice i.e splice manipulate the original array but slice don't.
console.log(splicedArr);
console.log("C" , myArr2);


//***********************************Array part-2******************************************************//
const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['patato','tomato','bringle'];
// fruits.push(vegetables);
console.log(fruits);

const all = fruits.concat(vegetables); // concat() is a method that joins two or more arrays
console.log(all);

const all_fruitsAndvegetables= [...fruits , ...vegetables]; // spread operator
console.log(all_fruitsAndvegetables);

const numArray = [1, 2, 3, 4, [2, 3, 4], 5, 6, 7,[6, 7, [1, 2, 3]]];
console.log(numArray);

console.log(numArray.flat(1));
console.log(numArray.flat(Infinity));

console.log (Array.isArray("Hitesh") )
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




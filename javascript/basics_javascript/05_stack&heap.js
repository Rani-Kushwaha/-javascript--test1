// Stack (primitive) 
// Heap ( Non-primitive)

// Stack memory is used for primitive type whereas heap memory is used for non - primitive type..

// Stack - there is changes in copy of variables.
// Heap - there is changes in refrence of variables (change in original value).

let myname = "rani";
let anothername = "aabbaabb";
anothername = "abc"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi:  "user@ybl"
}
let userTwo =  userOne

userTwo.email = "rani@gmail.com" 

console.log(userOne);
console.log(userTwo);




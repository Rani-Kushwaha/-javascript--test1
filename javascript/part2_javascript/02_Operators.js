/* Arithmetic Operations :-
 use to perform some operation on data.

 + , - , * , /

   Modulus  % 
   Exponentiation ^
   Increment  ++
   Decrement  --

*/ 
let a = 10;
let b = 5;
console.log("a = ",a ,"b = ",b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b); // means 10^5 or 10 raise to power 5.

// unary Operator

console.log(a++); // increment after the excution of this line
console.log(b--); // decrement after the excution of this line 
console.log(a);
console.log(b);

/******************************************Assignment Operator*************************************************/

// = , += ,-= , /= , *= , %= , **= 

console.log("a = a + 4 : ", a+=4);
console.log("a = a - 4 : ", a-=4);
console.log("a = a * 4 : ", a*=4);
console.log("a = a / 4 : ", a/=4);
console.log("a = a ** 4 : ",  a**=4);

/*************************************comparision Operator****************************************************/

// == , =! (check only value), === , ==! (check value with datatype )   -> return boolean value 

// === equal to & also type check
// === Not equal to & type check 

let x = 5;
let y = "5"
console.log("a == b", a==b); // ans is false
console.log("x === y ",x===y ); // here datatype is not similar
console.log("a !== b ", a!==b);
console.log("x!==y", x!==y);

// <= , >= , < , > 

console.log("a < b = ", a<b);

/*******************************************logical operators***********************************************/

// AND &&
// OR  ||
// NOT !

console.log("change the real ans,(ans should be false but it gives) a < b = ", !(a<b));

/*******************************************Ternary Operator************************************************/

let age = 20;

let result = age > 18? "Adult" : "Not Adult";
console.log(result);
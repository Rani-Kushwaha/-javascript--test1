let score = 20 

//const {scrore} = req.body  // in line no. of 1 , its fixed that score is number but there in line 4
                     // there is no grantee that score is number or string or some other datatype.

console.log(typeof score);
console.log(typeof (score));  

let level = "25abc" //behave as string because of doublequotes 
let valueInNumber = Number(level) // due to this line , the line no.9 again behave as number
console.log(typeof valueInNumber);  
console.log(valueInNumber);

let num = null
console.log(num)
let valueInNum = Number(num)
console.log(valueInNum)
 
let value = 40
console.log(value)
let a = Number(value)
let b = String(value)
let c = Boolean(value)

console.log(a);
console.log(b);
console.log(c);

let check = true
console.log(check)


// let answer = Boolean(check)
// console.log(answer);


// let check_2 = false
// console.log(check_2);







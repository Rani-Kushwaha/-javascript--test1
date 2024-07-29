const name = "rani"
const repoCount = 30

console.log(name + " and count is " + repoCount ); // but is old method, we should avoid this.. (out dated)

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); // (Modern way to write string)

const gameName = new String("templeRun")
console.log(gameName[5]);
console.log(gameName.sup);
console.log(gameName.length);
//
console. log (gameName. length);
// console. log (gameName. toUpperCase());
// console. log (gameName. charAt (2));
// console. log (gameName. index0f('t'));

const newString = gameName.substring(0 , 6);
console.log(newString);

const str = "   foo  ";
console.log(str);
// trim() is used to remove whitespce from the text.
console.log(str.trim()); // 'foo'

const newStringOne = "  ranikushwaha " 
console. log (newStringOne); 
console. log (newStringOne. trim());
const url = "https://rani.com/rani&20kushwaha"
console. log (url. replace('&20', '-'))
console. log (url. includes('rani'))


// use javascript mdn for documentation 
 

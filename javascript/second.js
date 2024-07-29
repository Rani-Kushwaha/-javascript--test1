// let num = prompt("Enter a number: ");

// if(num%5 === 0){
//     console.log("yes , num is multiple of 5");
// }
// else{
//     console.log("No , num is not multiple of 5");
// }

let Score = prompt("Enter Score:");

switch(Score){
    case(Score >= 90 && Score <= 100): 
    console.log("A");
    break;
    case(Score >= 70 && Score <= 89): 
    console.log("B");
    break;
    case(Score >= 60 && Score <= 69): 
    console.log("C");
    break;
    case(Score >= 50 && Score <= 59): 
    console.log("D");
    break;
    case(Score >= 0 && Score <= 49): 
    console.log("E");
    break;
    default:
    console.log("Invaild Score");
}
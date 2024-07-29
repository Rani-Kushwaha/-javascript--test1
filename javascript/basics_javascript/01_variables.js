const accountId = 123450
let accountEmail = "rani@gmail.com"
var accountPassword = "12345" 
 accountCity = "chandigarh" 
//  you can also reserve the memory for variable without use var but its not a good way for a prgrammer

let accountState; // semicolon can be used and not , its all upto you
console.log(accountId);

// prefer not use var 
// because of issue in block scope and functional scope

accountEmail = "queen@gmail.com"
accountPassword = "54321"
accountCity = "Bihar"

console.table([accountEmail, accountPassword, accountCity, accountState]);
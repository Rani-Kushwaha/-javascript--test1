// Array in js 

// let heroes = ["iron man" , "hulk", "thor", "captainAmerica"];

// // for(let i = 0; i < heroes.length; i++){
// //     console.log(heroes[i]);
// // }

// for (const hero of heroes) {
//     console.log(hero);
// }

//  let marks = [ 85 , 67, 98, 45, 76 ];
//  let sum = 0;
//  for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
//  }
//  let avg = sum / marks.length;
//  console.log(avg);

//  let itemPrice = [250, 645, 300, 900, 50];
//  let newPrice = [];
//  for (let index = 0; index < itemPrice.length; index++) {
//       newPrice = itemPrice[index] - (itemPrice[index]/10);
//  }
 
//  for (let index = 0; index < newPrice.length; index++) {
//    console.log(newPrice[index]);
//  } // this ques not give ans , do it again within some days 

// //  for (const i of itemPrice) {
   
// //  }

// let foodItem = ["Apple", "Mango", "litchi", "Grapes", "Papaya"];

// foodItem.push("Orange");

// for(let i = 0; i < foodItem.length; i++){
//    console.log(foodItem[i]);
// }

// let deleteItem = foodItem.pop();
// console.log(deleteItem);

// for(let i = 0; i < foodItem.length; i++){
//    console.log(foodItem[i]);
// }

// let drinkItem = ["coca cola" , "Fanta", "sprite"];

// console.log(drinkItem.concat(foodItem));



// foodItem.unshift("Daal Bhaat"); 

// for(let i = 0; i < foodItem.length; i++){
//    console.log(foodItem[i]);
// }

let elements = [ 1, 2, 3, 4, 5, 6];

elements.splice(2 , 3 , 30, 40, 50);

for(let i = 0; i < elements.length; i++){
   console.log(elements[i]);
}

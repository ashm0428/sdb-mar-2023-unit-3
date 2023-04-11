/* 
.forEach()
- Loops through an array
- Provide a function and the function will not return anything

*/

let foodItems = ["hamburger", "buns", "hotdogs", "turkey"];

let phrases = [];
foodItems.forEach((foodItem)=> {
   phrases.push(`I stole ${foodItem} from the store.`);
})

console.log(phrases);
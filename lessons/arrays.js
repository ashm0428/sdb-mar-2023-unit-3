/* 
ARRAYS

Arrays are objects that have characteristics
- Arrays are resizable and can have a mix of different data types
- Arrays are indexed at zero
- Example of Datatypes: string, boolean, number, objects, arrays, functions, undefined, null

- What makes arrays powerful is they are loopable
*/

// ? How do we create an array?
// Arrays consist of an opening and closing of the square brackets []
const names = ["George", "Tom", "Beth", "JoAnn"]

//Option 2, but NOT usually used:
const namesArrayConstructor = new Array("George", "Tom", "Beth", "JoAnn")


// ? What does it mean to have indexes?
//                  0        1         2
let cityArr = ["Houston", "Tampa", "Atlanta"]

// ? How do I access Houston?
console.log(cityArr[0]);
// ? How do I access Atlanta?
console.log(cityArr[2]);

// ? How do I get the size of the array?
console.log("cityArr Length", cityArr.length)

//! Array Loop:
// ? How do I loop through an array
// for(let i = 0; i< cityArr.length; i++) {
//     console.log(cityArr[i]);
// }

// ! Arrays can have mixed datatypes

// Level 1 :            0     1     2       3
// Level 2:                               0   1   2
let mixedDataArr = ["Spider", 65, true, [23, 55, 10]];

// ? How do I access Spider?
console.log(mixedDataArr[0]);

// ? How do I access the 55?
console.log(mixedDataArr[3][1]);

// ? HOw do I know the size of the array [23, 55, 10] ?
console.log("mixedDataArr Level 2 Array Size: ", mixedDataArr[3].length);

// ? How do we replace a value in the array

let studentNames = ["Trevor", "John"]
// Replace John with Simon
studentNames[1] = "Simon";

// ? How do we add on to the array
// Add Ashlee to the end of the array
studentNames.push("Ashlee");
console.log(studentNames);


// Create a loop that will go through the array of groceryItemPrices
// Inside that loop add on to the array of groceryItemPricesWithTax = itemPrice * 1.06

let groceryItemPrices = [29.99, 1.50, 8.59, 45.89];
let groceryItemPricesWithTax = [];

for (let i=0; i <groceryItemPrices.length; i++) {
    let itemPriceWithTax = groceryItemPrices[i] * 1.06;
    groceryItemPricesWithTax.push(itemPriceWithTax.toFixed(2));
}
console.log(groceryItemPricesWithTax);

//! For Of Loop can be done with Arrays
/* 
1. a variable that will be used as reference to which it is currently on.
    Typically it is the singular version of the array (ex: restaurantNames would be restaurantName)
2. Keyword of - it's needed to complete the For-Of Loop
3. Array that you will be looping over
*/
let groceryItemPricesWithTax2 = []
//          1         2         3
for(groceryItemPrice of groceryItemPrices) {
    let itemPriceWithTax = groceryItemPrice * 1.06;
    groceryItemPricesWithTax2.push(itemPriceWithTax)
}
console.log(groceryItemPricesWithTax2);



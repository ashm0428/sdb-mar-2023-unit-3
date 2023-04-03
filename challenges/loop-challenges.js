/* 
Write a JS function that will take a positive integer and returns the sum of all the digits.

Use a loop to interate through the digits and add them up.

Create a function called sumDigits that takes one argument

EX: console.log(sumDigits(123))  // Expected Output: 6
EX: console.log(sumDigits9876))  // Expected Output: 30

*/


// let myName = "Seth";
// console.log(myName.length);

let newNumber = 4567;

// console.log(newNumber.length);
// ? How do I convert a number to a string?

// const newNumberString = newNumber.toString(); 
// console.log(newNumberString.length);
// let stringLength = newNumberString.length;

// console.log(newNumberString.charAt(0))  // because it's a string I can use charAt

// ? What if I wanted to add the first digit to the second digit?

// let addingNumbers =
//   +newNumberString.charAt(0) +
//   parseInt(newNumberString.charAt(1)) +
//   Number(newNumberString.charAt(2)); // add a + to the variable or parseInt or Number to make it a number instead of a string.
// console.log(addingNumbers);



function sumDigits(newNumber) {
    const newNumberString = newNumber.toString();
    let stringLength = newNumberString.length;
    let addingNumbers = 0;
        for(let i = 0; i < stringLength; i++) {
        addingNumbers = addingNumbers + +newNumberString.charAt(i);
        }
    return addingNumbers;
}

console.log(sumDigits(4567));

// Convert strings to arrays based of a space.

let words = "I really have been enjoying this coding camp!";
let wordArr = words.split(" ");
console.log(wordArr);


//  Opposite of a split is a join

let wordJoin = wordArr.join("");
console.log(wordJoin);


// The push method adds an element to the ending of the array

let studentNames = ["Trevor", "John"];
studentNames.push("Ashlee");
console.log(studentNames);


// .pop() will remove the last item in the array
let poppedStudent = studentNames.pop();
console.log(studentNames);
console.log(poppedStudent);
studentNames.push("Simon");

// .slice() returns selected elements in an array and returns a new array.
// you can give it a start and stop point or omit the stop point
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

// .splice() it will add or remove tot he array element

fruits.splice(1, 2);
fruits.splice(2, 0, "Strawberry", "Grape");
console.log(fruits)

// .reverse() reverses the order of the array
let numberArr = [1, 2, 3, 4, 5, "winner"]
console.log(numberArr.reverse());

// .includes() method checks if the array includes certain values
// returns true or false

const nums = [1, 2, 3, 4, 5];
const includesThree = nums.includes(3);
console.log(includesThree);

// .indexOf() - it will search the array for a specific element and returns the index of that element's first occurence only. If it doesn't find anything it returns a (-1).

console.log(nums.indexOf(4));


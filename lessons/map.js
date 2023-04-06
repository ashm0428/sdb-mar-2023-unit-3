/* 
.map(

- Does NOT destroy the original array
- If you have a blank index (array bucket) it will not run on it
- Takes another function that returns some value

)

*/


let numbers = [4,10,5,15];
let doubleNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubleNumbers);

/*
let numbers = [4, 10, 5, 15];
let doubleNumbers = numbers.map((number) => number * 2);
let doubleNumbers2 = numbers.map(doubleNumberFunc);
function doubleNumberFunc(number) {
  return number * 2;
}
console.log(numbers);
console.log(doubleNumbers2);
*/

let library = [
    {
      title: "A Game of Thrones",
      tags: ["fantasy", "george r.r. martin"],
    },
    {
      title: "Eloquent JavaScript",
      tags: ["technology", "programming", "marijn haverbeke"],
    },
    {
      title: "The Fellowship of the Ring",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Return of the King",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Anthropocene Reviewed",
      tags: ["nonfiction", "john green"],
    },
    {
      title: "The Left Hand of Darkness",
      tags: ["sci-fi", "ursula le guin "],
    },
    // add more books if you would like
  ];

  const bookTitles = library.map((book) => book.title);
  console.log(bookTitles);

  const bookTitles2 = library.map((book) => {
    return book.title
  });
  console.log(bookTitles2);

  const bookTitles3 = library.map((book) => {
    return {
      title: book.title,
    };
  });
  console.log(bookTitles3);


// ? Using the students array create a new array that has the names combined using a .map()
// result1: ["Mike Franks", "Brenda Banks"]
// result2: [{fullName: "Mike Franks"}, {fullName: "Brenda Banks"}]

let students = [
    {firstName: "Mike", lastName: "Franks"}, 
    {firstName: "Brenda", lastName: "Banks"},
    {firstName: "Cora", lastName: "Smith"},
];

const combinedNames = students.map((student) => student.firstName + " " + student.lastName)
console.log(combinedNames);


const combinedNames2 = students.map((student) => {
    return {
      fullName: student.firstName + " " + student.lastName,
    };
  });
console.log(combinedNames2);



// ?  Create a function called getStringLengths(arrayOfStrings)
// ? The function will return an array with the length of the strings that are inside the given array
// Example: ["apple", "orange", "blackberry", "blueberry"]
// Expected Output: [5, 6, 10, 9]

function getStringLength(arrayOfStrings) {
    const fruitLengths = arrayOfStrings.map((string) => string.length);
    return fruitLengths;
}

const string1 = ["apple", "orange", "blackberry", "blueberry"]

console.log(getStringLength(string1));
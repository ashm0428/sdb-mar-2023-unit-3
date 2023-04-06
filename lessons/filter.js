/* 
Filter Method for Arrays
- Filter does NOT destroy the original array
- You must  store the new filtered array in a new variable
*/

let fruits = ["apple", "banana", "mango", "orange", "pineapple", "blueberry", "strawberry", "cranberry", "blackberry"]
console.log("apple" !== "mango");
console.log(fruits.filter(fruit=> fruit !=="mango"));
console.log(fruits);

let noBanana = fruits.filter((fruit) => fruit !== "banana");
console.log(noBanana);

let onlyBerry = fruits.filter((fruit) => fruit.includes("berry"));
console.log(onlyBerry);


let numArr = [];
for(let i=1; i<=50; i++) {
    numArr.push(i);
}
console.log(numArr);

let evenNumbers = numArr.filter((num) => num % 2 == 0);
console.log(evenNumbers);

let threeOrFive = numArr.filter((num) => num % 3 == 0 || num % 5 == 0);
console.log(threeOrFive);


let movies = [
    {
        name: "Star Wars",
        category: "Sci-fi",
    },
    {
        name: "Lord of the Rings",
        category: "fantasy",
    },
    {
        name: "Dune",
        category: "Sci-fi",
    },
];

movies.push({name: "Alien", category: "Sci-fi"});
movies.push({name: "Harry Potter", category: "fantasy"});

console.log(movies);

let sciFiMovies = movies.filter((movie) => movie.category === "Sci-fi");
console.log(sciFiMovies);


/* 
OBJECTS
- Objects contain properties 
- They are set up in KEY & VALUE pairs
- KEYS will ALWAYS be strings and it CAN be multiple words but most of the time it will be one word. If you're using multiple words and you don't want a space you can use Camel Casing as a convention.
- VALUES: string, numbers, boolean, undefined, null, arrays, objects

*/


let lily = {
    name: "lily",
    age: 15,
    breed: "mini poodle",
    color: "gray",
    spayed: true,
    weight: 8,
    favoriteActivity: ["play with food", "bite owner"],
    "household owners": ["father", "mother", "Simon"],
};

let minnie = {
    name: "minnie",
    age: 2,
    breed: "coton de tulear",
    color: "white",
    spayed: true,
    weight: 5,
    favoriteActivity: ["running in yard", "playing with duck", "belly rubs"],
    "household owners": ["john", "scarlem"],
};

let lola = {
    name: "lola",
    age: 1.75,
    breed: "mini schnauzer mix",
    color: "gray",
    spayed: true,
    weight: 14,
    favoriteActivity: ["running fast", "chewing", "chasing bugs"],
    "household owners": ["grant", "ashlee"],
};




// ? How do we access data within the object?
// ! Dot Notation
console.log(lily.age);
// ? How do I access the color?
console.log(lily.color);
// ?  HOw do I access "play with her food"
console.log(lily.favoriteActivity[0]);

// ! Square  Bracket Notation
// ? How do I access "household owners"
console.log(lily["household owners"][2])

// ! Altering values in an object
lily.weight = 9;
console.log(lily.weight);

// ! Adding a new key and value to an existing object
lily.gender = "female";
console.log(lily);

// ! Combining Objects into an array
let studentPetArray1 = [lily, minnie, lola];
console.log("studentArray1: ", studentPetArray1);

let studentPetArray2 = [];
studentPetArray2.push(lily);
studentPetArray2.push(minnie);
studentPetArray2.push(lola);

console.log("studentPetArray2: ", studentPetArray2);



/* 
Create a loop that will go through studentPetArray1 and it will console log the following:

"[pet name] is [age] years old who weighs [weight] lbs."

BONUS: "[pet name] is [age] years old who weighs [weight] lbs. And [pet name]'s favorite activities are the following: [favoriteActivity(with commas)]."

*/

for (let i = 0; i < studentPetArray1.length; i++) {
    console.log(`${studentPetArray1[i].name} is ${studentPetArray1[i].age} years old and weighs ${studentPetArray1[i].weight} lbs. ${studentPetArray1[i].name}'s favorite activities are the following: ${studentPetArray1[i].favoriteActivity.join(', ')}.`)
}


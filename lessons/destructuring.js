// import { describe } from "node:test";

let person1 = ["Rob", 42, "indianapolis", "indiana"];
let name1 = person1[0];
let age1 = person1[1];

let person2 = ["Bobur", 19, "denver", "colorado"];

let [name2, age2, city2, state2] = ["Bobur", 19, "denver", "colorado"];

console.log(age2);

let terminalEntry1 = "look note"; // ex: ["look", "note"]
let terminalEntry1Arr = terminalEntry1.split(" ");
console.log(terminalEntry1Arr);

let command = terminalEntry1Arr[0];
let noun = terminalEntry1Arr[1];

let [command1, noun1] = terminalEntry1Arr;

console.log(command);
console.log(noun);

// Example

function areaAndVolume(length) {
  return [length ** 2, length ** 3];
}

let cube1 = areaAndVolume(5);
console.log(cube1);
console.log(cube1[0]);

let [cube1Area, cube1Volume] = areaAndVolume(5);

console.log(cube1Volume);

// ! Objects Destructuring

let student1 = {
  name: "hans",
  age: 34,
  grades: [100, 75, 68],
};

console.log(student1.name);

// let { name, age } = student1;

console.log(name1, age1);

let student2 = {
  nameOfStudent: "Luke",
  age: 24,
  grades: [65, 25, 140],
};

// relabeling the nameOfStudent to name
let { nameOfStudent: name, age } = student2;

console.log(name, age);


function printThings({greeting, name}) {
console.log(`${greeting}, ${name}.`);
}

printThings({greeting: "Good Morning", name: "Billy"})


class Room {

  constructor({name, description, doorLock, inventory}){
    this.name = name;
    this.description = description;
    this.inventory = inventory;
  }

  displayInventory() {
    return `You have the following items in this room: ` + this.inventory
  }
}


let foyer = new Room({
  name: "foyer",
  doorLock: false,
  inventory: ["hammer", "note"],
  description: "You have entered the foyer....",
})

let bedroom = new Room({
  name: "bedroom",
  doorLock: false,
  inventory: ["pillow", "sheets"],
  description: "You have entered the bedroom....",
})

let state = {
  foyer: foyer,
  bedroom: bedroom,
}

let currentState = "foyer"

console.log(state[currentState].displayInventory())

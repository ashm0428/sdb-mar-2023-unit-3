const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

function computerResponse(string) {
  let white = "\033[0;39m";
  let yellow = "\033[0;33m";
  console.log(yellow + string + white);
}

// ! Don't change anything above this line!!!


/* 

We will have a lookup table that maps the state of the traffic light to the possible next valid states of the traffic light.

We will also have a function that changes the current valid state to the next valid state, and prints output to show us what state the system is in. If there is an attempt to put the system in an invalid state, the function will prevent the transition and print some output to tell us that an error occured.

Variables
[ ] Create a lightCurrent variable and set it equal to redLight.
[ ] Create a lightLookUp lookup table that maps the Strings of the color and state of our objects to their Object.
LightStates
[ ] Create a lightStates state machine that maps the states of our objects to their possible next states.
[ ] Create a console log that informs the user of the state of the traffic light.
[ ] Create a changeLight function that accepts the parameter of newLight.
[ ] Inside of changeLight, set up an if statement that checks if lightStates[lightCurrent] includes newLight.
[ ] Inside of this if statement, set lightCurrent to newLight.
[ ] Inside of this if statement, console log the color and state of lightCurrent by checking it in lightLookUp using bracket notation.
[ ] Outside of this if, else console log a message informing the user they cannot go from lightCurrent to newLight.

*/


let lightStates = {
    "red": ["green", "blinking yellow"],
    "yellow": ["red"],
    "green": ["yellow"],
    "blinking yellow": ["yellow", "green"],
  };
  
  // Initialize our current state that we want to start off at.
  let lightCurrent = "red";
  
  async function start() {
    let newLight = "";
  
    while (newLight !== "exit") {
      newLight = await ask(
        `Your current light is ${lightCurrent}. \nWhat light state would you like to go to next?  \n> `
      );
      changeLight(newLight);
    }
    process.exit();
  }
  
  start();
  
  function changeLight(newLight) {
    let possibleOptionsToUpdateLightState = lightStates[lightCurrent];
    if (possibleOptionsToUpdateLightState.includes(newLight)===true) {
        lightCurrent = newLight
        computerResponse("The light has changed!")
    } else{
        computerResponse("That is an invalid entry." + `Valid entries are the following: ${possibleOptionsToUpdateLightState}`);
    };
  };
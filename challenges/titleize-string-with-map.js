const { title } = require("process");
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
  //! DONT TOUCH ^^^


function correctCasing(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1); 
  }

// Example string you can start with
// let myString = 'the rain in spain falls MAINLY in the PLAIN';
let myString = ""
function titleize(myString) {
    return myString.split(" ").map((word) => correctCasing(word)).join(" ");
  }

choosePhrase();

async function choosePhrase() {
    myString = await ask(`Please enter your phrase: \n>`)
    console.log(titleize(myString));
    process.exit();
}

// Your Code Goes Here




// Should print: 'The Rain In Spain Falls Mainly In The Plain'


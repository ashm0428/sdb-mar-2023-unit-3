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
// ! Don't change anything above this line!!!

let guestName = greeting();
let enemyList = ['darthvader', 'voldemort', 'palpatine', 'lexluthor', 'joker', 'invaderzimm', 'thanos','megatron', 'sauron', 'shredder', 'ritarepulsa', 'ganon', 'bowser', 'jafar', 'scar', 'gaston', 'innerturmoil'];




async function greeting() {
    let name = await ask(`\nHello there, stranger...\nWhat is your name?\n`);
    console.log(`Let me check to see if you, ${name}, are on the list...\n\n`);
    respond(name);
}

function respond(givenName) {
    let smallName = givenName.toLowerCase().replaceAll(" ","");
      if (true === enemyList.includes(smallName)) {
        snark(smallName, givenName)
        console.log(`Go away ${givenName}!\n\nYou are not wanted here!\nGo back under the rock you crawled out of.\n`)
      } else {
        console.log(`Welcome ${givenName}!\n\nCome warm yourself by the fire,\nand help keep a lookout for the unwanted riff-raff that are trying to sneak in.\n\n`)
      }
    }

    function snark(smallName, givenName){
        if(smallName === "thanos"){
            console.log(`Nice try, ${givenName}\n but you don't have enough stones yet!`);
            process.exit();
        }else if(smallName === "darthvader"){
            console.log(`You were the chosen one, ${givenName}! You were meant to destroy the Sith, not join them!\n\n`);
            process.exit();
        }else if(smallName === "megatron"){
            console.log(`Transform and roll out of here, ${givenName}!`);
            process.exit();
        }else if(smallName === "voldemort"){
            console.log(`${givenName}!\n This is a 'no nose, no entry' kind of party!`);
            process.exit();
        }else if(smallName === "innerturmoil"){
        console.log(`Go away ${givenName}!\n You're just a voice in my head!`);
        process.exit();
        }else{}
    }
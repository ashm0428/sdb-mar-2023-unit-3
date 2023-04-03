/* 
Write out a function that takes one parameter called phrase

Inside the function you should be able to return true if the reversed phrase is the same as the supplied phrase.

ex: racecar /true
ex: taco cat /true
ex: apple /false
ex: madam im adam /true

*/


function isPalindrome(phrase) {
phrase = phrase.replaceAll(" ", "").toLowerCase();
console.log(phrase);
let reversedPhrase = phrase.split("").reverse().join("");
console.log(reversedPhrase);
let foundMatch = phrase === reversedPhrase
return foundMatch;
}

console.log(isPalindrome("madam im adam"))

//Cleaner Version option

function isPalindrome2(phrase) {
  return (
    phrase.replaceAll(" ", "").toLowerCase() ===
    phrase.replaceAll(" ", "").toLowerCase().split("").reverse().join("")
  );
}


// Also an option:

const isPalindrome3 = (phrase) =>
  phrase.replaceAll(" ", "").toLowerCase() ===
  phrase.replaceAll(" ", "").toLowerCase().split("").reverse().join("");

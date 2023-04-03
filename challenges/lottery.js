/* 
Write a function called drawingNumbers that will return an array of 6 numbers (random)

- NO duplicate numbers
- Validate that number doesn't exist in the array before we push it


*/

function getRandomNumber(min, max) {
    let range = max - min + 1;
  
    return Math.floor(Math.random() * range) + min;
  }

function drawingNumbers() {
    let lottoNumbers = [];

    while(lottoNumbers.length < 6) {
    let randomNum = getRandomNumber(1,6)
     if(validateNumber(randomNum, lottoNumbers) === false) {
     lottoNumbers.push(randomNum);
     }
    }

    return lottoNumbers;
}

function validateNumber(randomNumberToCheck, currentLottoPicks) {
    return currentLottoPicks.includes(randomNumberToCheck)
}

const winningNumbers = drawingNumbers()

console.log(winningNumbers);
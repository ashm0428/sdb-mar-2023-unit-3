/* 
- Create a function called bowlingAverage
- the function shall accept a single parameter (which will be an array)
- the function should return the average score based on the size of the array that gets supplied to the function.

Special Notes: use a FOR OF Loop

example: let bowler1 = bowlingAverage([150,212,153])
        console.log(bowler1)
*/


function bowlingAverage(scores) {
    let total = 0
    for (score of scores) {
        total = total + score;
    } 
    let average = total / scores.length;
    return Math.floor(average);
}
console.log("Bowler 1's average: ", bowlingAverage([150,212,153]))

/* 
let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]

write a function that will take two different arrays as parameters.
inside the function have for loop that will combine the two bowlers scores into a combined array

example output: [400, 444, 351 ]

*/

function combineScores(bowler1Scores, bowler2Scores){
    let combinedScores = []
    for (let i = 0; i < bowler1Scores.length; i++) {
        combinedScores.push(bowler1Scores[i] + bowler2Scores[i])        
    }
    return combinedScores
}
let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]
let combinedScores = combineScores(bowler1Scores,bowler2Scores)
console.log("Bowler 1 and Bowler 2's combined scores: ", combinedScores)

/*

let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]

create a function takes two arrays as parameters it should return the combined bowlers scores as the following.

teamGrouping: [[150, 250], [212,232] [153,198]]

*/

function bowlerScorePairings(bowler1Scores, bowler2Scores){
    let teamGrouping = []
    for (let i = 0; i < bowler1Scores.length; i++) {
        teamGrouping.push([bowler1Scores[i], bowler2Scores[i]]);        
    }
    return teamGrouping;
}
let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]
let teamGrouping = bowlerScorePairings(bowler1Scores,bowler2Scores)

console.log("Bowler 1 and Bowler 2's Score Comparisons: ", teamGrouping)

// function bowlerScorePairs(bowler1Scores, bowler2Scores) {
//     let game1 = [bowler1Scores[0], bowler2Scores[0]];
//     let game2 = [bowler1Scores[1], bowler2Scores[1]];
//     let game3 = [bowler1Scores[2], bowler2Scores[2]];
//     let bowlerScorePairings = [game1, game2, game3];
//     return bowlerScorePairings;
// }


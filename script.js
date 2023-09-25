const rbtn = document.querySelector('.rbtn');
const pbtn = document.querySelector('.pbtn');
const sbtn = document.querySelector('.sbtn');

const lastResult = document.querySelector('.lastResult');
const currentScore = document.querySelector('.currentScore');
const instructions = document.querySelector('.instructions');

let pScore = 0;
let cScore = 0;

function rockSelect() {
    if (pScore < 3 && cScore < 3) {
        updateGame (round (computerMove(), "R"));
    }
}
function paperSelect() {
    if (pScore < 3 && cScore < 3) {
        updateGame (round (computerMove(), "P"));
    }
}
function scissorsSelect() {
    if (pScore < 3 && cScore < 3) {
        updateGame (round (computerMove(), "S"));
    }
}

rbtn.addEventListener('click', rockSelect);
pbtn.addEventListener('click', paperSelect);
sbtn.addEventListener('click', scissorsSelect);




function computerMove() {
    let x = Math.floor((Math.random() * 3) + 1);
    switch (x) {
        case 1:
            return "R";
            break;
        case 2:
            return "P";
            break;
        case 3: 
            return "S";
            break;
    }
}
/* //Playerinput (old)
function getPlayerinput () {


    let pMove;
    let validinput = false;
    while (!validinput) {
        pMove = prompt("R for Rock, P for paper, S for scissors");
        pMove = pMove.toUpperCase();
        if (pMove === "R" || pMove === "P" || pMove === "S") {
            validinput = true;
        }   else {alert("Invalid input");}
    }
    return pMove;
}
*/

function round (cMove, pMove) {


    
    if (pMove === "R") {
        if (cMove ==="R") {
            return "Draw! Two Rocks";
        } else if (cMove ==="P") {
            return "Lose! Paper beats Rock";
        } else {
            return "Win! Rock beats Scissors";
        }
    } else if (pMove === "P") {
        if (cMove ==="R") {
            return "Win! Paper beats Rock";
        } else if (cMove ==="P") {
            return "Draw! Two Papers";
        } else {
            return "Lose! Scissors beats Paper";
        }
    } else {
        if (cMove ==="R") {
            return "Lose! Rock beats Scissors";
        } else if (cMove ==="P") {
            return "Win! Scissors beats Paper";
        } else {
            return "Draw! Two pairs of Scissors";
        }
    }
}
 
function updateGame(roundOutput) {
    let result = roundOutput.charAt(0);
    if (result ==="W") ++pScore;
    else if (result ==="L") ++cScore;

    lastResult.textContent = roundOutput;
    currentScore.textContent = `Player: ${pScore}, Computer: ${cScore}`;

    if (pScore >= 3 ) {
        instructions.textContent = "You Win! refresh to start a new game";
    } else if (cScore >= 3) {
        instructions.textContent = "You Lose! refresh to start a new game";
    }
}

function game() {

    let pScore = 0;
    let cScore = 0;

    while (pScore < 3 && cScore < 3) {

        let resultStatement = round();
        let result = resultStatement.charAt(0);
        alert(resultStatement);
        if (result ==="W") {++pScore;}
        else if (result ==="L") {++cScore;} 

        if (pScore >= 3) {
            alert("You Win!");
        } else if (cScore >=3) {
            alert("You Lose!");
        } else {
            alert("Player score is " + pScore +
             ", Computer score is " + cScore);
        }
    }

}


//game();


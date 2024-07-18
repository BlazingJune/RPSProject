
function getComputerChoice() {

let computerSelects = Math.random();
    if (computerSelects <= .3333) {
        console.log("computer chooses ... rock");
        return 'rock';
        
    }
    else if (computerSelects <= .6666) {
        console.log("computer chooses ... paper");
        return 'paper';
    }
    else if (computerSelects >= .6667) {
        console.log("computer chooses ... scissors");
        return 'scissors';
    } 
}

function getHumanChoice() {
    let userChoice = prompt("Rock ... Paper ... or Scissors ...");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice; }
            else  { console.log ("choose again");
            return getHumanChoice()
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Trying again");
        return playRound(humanChoice, computerChoice)
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("Human Wins!");
        humanScore++    
    }else {
        console.log("Computer Wins.");
        computerScore++
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log("you win :)");
    } else {
        console.log("computer .... wins ....");
    }
}
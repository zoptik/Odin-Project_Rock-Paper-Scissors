humanScore = 0;
computerScore = 0;
humanChoice = "";
humanChoiceLower = "";

function getComputerChoice() {
    computerChoice = Math.random();

    if (computerChoice <= 0.33333) {
        return "rock";
    }
    else if (computerChoice <= 0.66666 & computerChoice > 0.33333) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Choose your weapon: rock, paper, or scissors");
    humanChoiceLower = humanChoice.toLowerCase();
    while (humanChoiceLower !== "rock" && humanChoiceLower !== "paper" && humanChoiceLower !== "scissors") {
        humanChoice = prompt("Please choose either rock, paper, or scissors");
        humanChoiceLower = humanChoice.toLowerCase();
    }
    return humanChoiceLower;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore = humanScore + 1;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore = humanScore + 1;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore = humanScore + 1;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else if (humanChoice == computerChoice) {
        return console.log("Tie! Try again!");
    }
    else {
        computerScore = computerScore + 1;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
}




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





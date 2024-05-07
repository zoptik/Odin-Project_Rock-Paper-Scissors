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

function getHumanChoice(humanChoice = prompt("Choose your weapon: rock, paper, sciccors")) {
    return humanChoice;
}

// Rock paper scissors

// Vs Computer

// Computer selects rock, paper or scissors

let getComputerChoice = () => {
    let randomNumber = Math.random()*3
    return randomNumber < 1 ? "rock" : randomNumber >= 1 && randomNumber < 2 ? "paper" : "scissors"
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

// Human selects rock, paper or scissors 

let getHumanChoice = () => prompt("Please choose rock, paper or scissors").toLowerCase();

let humanChoice = getHumanChoice();

while (!(["rock", "paper", "scissors"].includes(humanChoice))) {
    getHumanChoice()
}

// Winner is decided

let playRound = (computerChoice, humanChoice) => {
    // Create game conditions:

    // if array contains rock and paper
        // if humanChoice paper, human wins else computer wins
    // if array contains paper and scissors
        // if humanChoice scissors, human wins else computer wins
    // if array contains scissors and rock
        // if humanChoice rock, human wins else computer wins

    let gameArray = [humanChoice, computerChoice];
    
    let outcome;
    let gameCondition;

    if (humanChoice === computerChoice) {
        outcome = "Draw!";
        gameCondition = `${humanChoice} matches ${computerChoice}`;

    } else if (gameArray.includes("rock") && gameArray.includes("paper")) {
        outcome = humanChoice === "paper" ? "You win!" : "You lose!";
        gameCondition = "Paper beats rock";

    } else if (gameArray.includes("paper") && gameArray.includes("scissors")) {
        outcome = humanChoice === "scissors" ? "You win!" : "You lose!"
        gameCondition = "Scissors beats paper";

    } else if (gameArray.includes("scissors") && gameArray.includes("rock")) {
        outcome = humanChoice === "rock" ? "You win!" : "You lose!"
        gameCondition = "Rock beats scissors";
    }
    
    return `${outcome} ${gameCondition}`
}

console.log(playRound(computerChoice, humanChoice));

// Game is restarted
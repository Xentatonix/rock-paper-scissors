// Computer
let getComputerChoice = () => {
    let randomNumber = Math.random()*3
    return randomNumber < 1 ? "rock" : randomNumber >= 1 && randomNumber < 2 ? "paper" : "scissors"
}

// Human
let getHumanChoice = () => {
    let humanChoice;
    while (!(["rock", "paper", "scissors"].includes(humanChoice))) {
        humanChoice = prompt("Please choose rock, paper or scissors").toLowerCase();
    }
    return humanChoice
}

// playRound
let playRound = (humanChoice) => {

    //let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

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
    
    return [outcome, gameCondition, computerChoice]
}

let playerSelection = (e) => {
    let humanChoice = e.target.classList.value;
    document.querySelector(".results").textContent = playRound(humanChoice);
    
    
}

let gameButtons = document.querySelectorAll("button");
gameButtons.forEach(btn => addEventListener("click", playerSelection));
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
let playRound = () => {

    let humanChoice = getHumanChoice();
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

// playGame
let playGame = () => {
    let gameCounter = 0;
    let humanWins = 0;
    let computerWins = 0;

    while (!(humanWins === 3 || computerWins === 3) && gameCounter < 5) {
        let round  = playRound();
        
        let outcome = round[0];
        let gameCondition = round[1];
        let computerChoice = round[2];

        if (outcome === "You win!") {
            humanWins++;
            gameCounter++;
        } else if (outcome === "You lose!") {
            computerWins++;
            gameCounter++ 
        } else {
            gameCounter++;
        }
        
        alert(`${outcome} Computer chose ${computerChoice} ${gameCondition}`);
    }

    alert(
        humanWins === 3 ? "You Won" : 
        computerWins === 3 ? "Computer Wins" :
        "Draw"
    )
}

playGame();
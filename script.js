// Rock paper scissors

// Vs Computer

// Computer selects rock, paper or scissors

let getComputerChoice = () => {
    let randomNumber = Math.random()*3

/*     if (randomNumber < 1) {
        return "rock"
    } else if (randomNumber >= 1 && randomNumber < 2) {
        return "paper"
    } else if (randomNumber >= 2 && randomNumber < 3) {
        return "scissors"
    } */

    return randomNumber < 1 ? "rock" : 
        randomNumber >= 1 && randomNumber < 2 ? "paper" : 
            "scissors"

}

console.log(getComputerChoice())

// Human selects rock, paper or scissors 
// Winner is decided
// Game is restarted
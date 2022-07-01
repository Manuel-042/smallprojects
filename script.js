const gameButtons = document.querySelectorAll('.game-buttons')
const result = document.querySelector('.result')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')

let player = 0
let computer = 0

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.innerText
        displayChoice(playerChoice)

        const computerChoice = computerSelection()
        document.querySelector('.computer-select').innerText = computerChoice


        result.textContent = isWinner(playerChoice, computerChoice)
        increaseScore()
        getWinner()
        //restart the game over again
        if (getWinner()) {
            player = computer = 0;
            increaseScore();
        }
        

    })
})

function displayChoice(selection1) {
    document.querySelector('.player-select').innerText = selection1 
}

//computer option generation
function computerSelection() {
    const computerOptions = ["Rock", "Paper", "Scissors"]
    const optionGeneration = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[optionGeneration]

}



function isWinner(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        player++
        return "player Wins"
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        player++
        return "player Wins" 
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        player++
        return "player Wins" 
    } else if (playerChoice === computerChoice) {
        return "It's a tie"
    } else {
        computer++
        return "computer wins" 
    }
}

function increaseScore() {
    playerScore.textContent = player
    computerScore.textContent = computer    
}

function getWinner() {
    if (player === 5 || computer === 5) {
        const winner =
          player === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true 
    }
    return false
}






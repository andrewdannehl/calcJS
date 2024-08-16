let humanScore = 0;
let computerScore = 0;
let tieCount = 0;
let choice = "";

const output = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        choice = button.innerText.toLowerCase();
        playGame();
    });
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else if (computerChoice === 3) {
        computerChoice = "sissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = choice;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        tieCount++;
        output.innerHTML = "It's a Tie!  Your Score:" + humanScore + " Computer Score: " + computerScore;
    } else if (humanChoice === "rock" && computerChoice === "sissors") {
        humanScore++;
        output.innerHTML = "You win! " + humanChoice + " beats " + computerChoice + "Your Score:" + humanScore + " Computer Score: " + computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        output.innerHTML = "You win! " + humanChoice + " beats " + computerChoice + "Your Score:" + humanScore + " Computer Score: " + computerScore;
    } else if (humanChoice === "sissors" && computerChoice === "paper") {
        humanScore++;
        output.innerHTML = "You win! " + humanChoice + " beats " + computerChoice + "Your Score:" + humanScore + " Computer Score: " + computerScore;
    } else {
        computerScore++;
        output.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice + "Your Score:" + humanScore + " Computer Score: " + computerScore;
    }

}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
const choices = document.querySelectorAll(".weapon");
const computerChoice = document.querySelector(".computer-choice");
const gameResult = document.querySelector(".result");
const playAgain = document.querySelector(".play-again");
const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    gameResult.textContent = "You Tied! Choose weapon again";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    computerScore++;
    gameResult.textContent = `You Lose! ${playerSelection} beats ${computerSelection}`;
    computerResult.textContent = `Computer Score: ${computerScore}`;
  } else {
    playerScore++;
    gameResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerResult.textContent = `Player Score: ${playerScore}`;
  }

  if (playerScore === 5) {
    gameResult.textContent = "Game Over! You Win the game.";
    disabledWeapon();
  }

  if (computerScore === 5) {
    gameResult.textContent = "Game Over! Computer Wins the game.";
    disabledWeapon();
  }
}

function selectWeapon() {
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log("User: " + playerSelection);
  console.log("Computer: " + computerSelection);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerResult.textContent = "Player Score: 0";
  computerResult.textContent = "Computer Score: 0";
  gameResult.textContent = "Choose your weapon!";
  EnabledWeapon();
}

function disabledWeapon() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
}

function EnabledWeapon() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = "auto";
  });
}

//Event Listeners
choices.forEach((choice) => choice.addEventListener("click", selectWeapon));
playAgain.addEventListener("click", resetGame);

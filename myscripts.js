const choices = document.querySelectorAll(".weapon");
const computerChoice = document.querySelector("#computer-output-choice");
const playerChoice = document.querySelector("#player-output-choice");
const gameResult = document.querySelector(".result");
const playAgain = document.querySelector(".play-again");
/*const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");*/
const scoreResult = document.querySelector(".scores");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    playerChoice.className = "fa-solid fa-hand-rock fa-10x";
  } else if (playerSelection === "paper") {
    playerChoice.className = "fa-solid fa-hand fa-10x";
  } else if (playerSelection === "scissors") {
    playerChoice.className = "fa-solid fa-hand-scissors fa-10x";
  }

  if (computerSelection === "rock") {
    computerChoice.className = "fa-solid fa-hand-rock fa-10x";
  } else if (computerSelection === "paper") {
    computerChoice.className = "fa-solid fa-hand fa-10x";
  } else if (computerSelection === "scissors") {
    computerChoice.className = "fa-solid fa-hand-scissors fa-10x";
  }

  if (playerSelection == computerSelection) {
    gameResult.textContent = "You Tied! Choose weapon again";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    gameResult.textContent = `You Lose! ${playerSelection} beats ${computerSelection}`;
    scoreResult.textContent = `${playerScore} : ${computerScore}`;
  } else {
    playerScore++;
    gameResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    scoreResult.textContent = `${playerScore} : ${computerScore}`;
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
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  /*playerResult.textContent = "Player Score: 0";
  computerResult.textContent = "Computer Score: 0";*/
  scoreResult.textContent = "0 : 0";
  gameResult.textContent = "Choose your weapon!";
  computerChoice.className = "fa-solid fa-hand fa-10x";
  playerChoice.className = "fa-solid fa-hand fa-10x";
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

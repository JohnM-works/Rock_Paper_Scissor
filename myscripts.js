const choices = document.querySelectorAll(".weapon");
const computerChoice = document.querySelector("#computer-output-choice");
const playerChoice = document.querySelector("#player-output-choice");
const gameResult = document.querySelector(".result");
const playAgain = document.querySelector(".play-again");
/*const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");*/
const scoreResult = document.querySelector(".scores");
const modalDisplay = document.querySelector(".modal");
const textResult = document.querySelector(".text-result");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    playerChoice.className = "fa-solid fa-hand-rock fa-10x";
  } else if (playerSelection === "Paper") {
    playerChoice.className = "fa-solid fa-hand fa-10x";
  } else if (playerSelection === "Scissors") {
    playerChoice.className = "fa-solid fa-hand-scissors fa-10x";
  }

  if (computerSelection === "Rock") {
    computerChoice.className = "fa-solid fa-hand-rock fa-10x";
  } else if (computerSelection === "Paper") {
    computerChoice.className = "fa-solid fa-hand fa-10x";
  } else if (computerSelection === "Scissors") {
    computerChoice.className = "fa-solid fa-hand-scissors fa-10x";
  }

  if (playerSelection == computerSelection) {
    gameResult.textContent = "You Tied! Choose weapon again";
    gameResult.style.color = "white";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    gameResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    gameResult.style.color = "red";
    scoreResult.textContent = `${playerScore} : ${computerScore}`;
  } else {
    playerScore++;
    gameResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    gameResult.style.color = "blue";
    scoreResult.textContent = `${playerScore} : ${computerScore}`;
  }

  if (playerScore === 5) {
    textResult.textContent = "Congratulations! You Win the game.";
    textResult.style.color = "white";
    modalDisplay.style.display = "block";
    disabledWeapon();
  }
  if (computerScore === 5) {
    textResult.textContent = "Game Over! You lose the game.";
    textResult.style.color = "red";
    modalDisplay.style.display = "block";
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
  scoreResult.textContent = "0 : 0";
  gameResult.textContent = "Choose your weapon!";
  computerChoice.className = "fa-solid fa-hand fa-10x";
  playerChoice.className = "fa-solid fa-hand fa-10x";
  gameResult.style.color = "white";
  modalDisplay.style.display = "none";
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

function getComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  return choice[Math.floor(Math.random() * choice.length)];
}

/* if (lowerCase == computerSelection) {
    return console.log("You Tied!, try again");
  } else if (lowerCase == "rock" && computerSelection == "paper") {
    return console.log("You Lose! Paper beats Rock");
  } else if (lowerCase == "rock" && computerSelection === "scissor") {
    return console.log("You Win! Rock beats Scissor");
  } else if (lowerCase == "paper" && computerSelection === "rock") {
    return console.log("You Win! Paper beats Rock");
  } else if (lowerCase == "paper" && computerSelection === "scissor") {
    return console.log("You Lose! Scissor beats Paper");
  } else if (lowerCase == "scissor" && computerSelection === "paper") {
    return console.log("You Win! Scissor beats Paper");
  } else if (lowerCase == "scissor" && computerSelection === "rock") {
    return console.log("You Lose! Rock beats Scissor");
  } else {
    return console.log("Please enter Rock, Paper, or Scissor");
  }
} --> */

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You Tied!, try again";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    computerScore += 1;
    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Please enter Rock, Paper, or Scissor";
  }
}

function winner() {
  if (playerScore > computerScore) {
    return console.log("Congratulations! You Win the game");
  } else if (computerScore > playerScore) {
    return console.log("Game Over! You Lose the game");
  } else {
    return console.log("You Tied the game");
  }
}

function game(round) {
  for (let i = 1; i <= round; i++) {
    let select = prompt("Enter Rock, Paper, or Scissor");
    let playerSelection = select.toLocaleLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game(5);
winner();

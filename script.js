const ROUND_RESULT_VICTORY = "victory";
const ROUND_RESULT_DEFEAT = "defat";
const ROUND_RESULT_DRAW = "draw";

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);

  return options[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
  switch (playerChoice.toLowerCase() + computerChoice.toLowerCase()) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      return ROUND_RESULT_VICTORY;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      return ROUND_RESULT_DEFEAT;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      return ROUND_RESULT_DRAW;
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = determineWinner(playerSelection, computerSelection);

  let resultMessage = "";
  if (roundResult == "draw") {
    resultMessage = `It's a draw! ${playerSelection} against ${computerSelection}`;
  } else if (roundResult == "victory") {
    resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (roundResult == "defeat") {
    resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  applyRoundResult(resultMessage, roundResult);

  checkForWinners();
}
function checkForWinners() {
  if (playerScore == "5") {
    winnerText.textContent = "Game Over!\n The player won!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerScore == "5") {
    winnerText.textContent = "Game Over! The computer won!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function applyRoundResult(resultMessage, roundResult) {
  winnerText.textContent = resultMessage;
  if (roundResult == ROUND_RESULT_DRAW) {
    return;
  } else if (roundResult == ROUND_RESULT_VICTORY) {
    playerScore++;
    playerScoreOutput.textContent = playerScore;
  } else if (roundResult == ROUND_RESULT_DEFEAT) {
    computerScore++;
    computerScoreOutput.textContent = computerScore;
  }
}

const buttons = document.querySelectorAll("button");
const winnerText = document.querySelector(".round-winner");
const playerScoreOutput = document.querySelector(".player-score .score-value");
const computerScoreOutput = document.querySelector(
  ".computer-score .score-value"
);

let playerScore = 0;
let computerScore = 0;

playerScoreOutput.textContent = playerScore;
computerScoreOutput.textContent = computerScore;

buttons.forEach((button) => {
  button.addEventListener("click", playRound.bind(this, button.id));
});

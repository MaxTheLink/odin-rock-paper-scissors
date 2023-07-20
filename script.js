const ROUND_RESULT_VICTORY = "victory";
const ROUND_RESULT_DEFEAT = "defat";
const ROUND_RESULT_DRAW = "draw";

let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll(".game-button");
const restartButton = document.querySelector("#restart-button");
gameButtons.forEach((button) => {
  button.addEventListener("click", playRound.bind(this, button.id));
});
restartButton.addEventListener("click", resetGame.bind(this, restartButton.id));

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);

  return options[randomChoice];
}

function determineWinner(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase() + computerSelection.toLowerCase()) {
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

  const playerChoice = document.querySelector(".player-choice");
  const computerChoice = document.querySelector(".computer-choice");

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  let resultMessage = "";
  if (roundResult == ROUND_RESULT_DRAW) {
    resultMessage = `It's a draw! ${playerSelection} against ${computerSelection}`;
  } else if (roundResult == ROUND_RESULT_VICTORY) {
    resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (roundResult == ROUND_RESULT_DEFEAT) {
    resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  applyRoundResult(resultMessage, roundResult);

  checkForWinners();
}
function checkForWinners() {
  const winnerText = document.querySelector(".round-winner");
  if (playerScore == "5" || computerScore == "5") {
    gameButtons.forEach((button) => {
      button.disabled = true;
    });
    restartButton.disabled = false;
    if (playerScore == "5") {
      winnerText.textContent = "Game Over!\n The player won!";
    } else if (computerScore == "5") {
      winnerText.textContent = "Game Over! The computer won!";
    }
  }
}

function applyRoundResult(resultMessage, roundResult) {
  const winnerText = document.querySelector(".round-winner");
  const playerScoreOutput = document.querySelector(
    ".player-score .score-value"
  );
  const computerScoreOutput = document.querySelector(
    ".computer-score .score-value"
  );

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

function resetGame() {
  document.querySelector(".player-choice").textContent = "Player";
  document.querySelector(".computer-choice").textContent = "Computer";
  document.querySelector(".player-score .score-value").textContent = "0";
  document.querySelector(".computer-score .score-value").textContent = "0";
  document.querySelector(".round-winner").textContent =
    "Press a button to start the game";

  gameButtons.forEach((button) => {
    button.disabled = false;
  });
  restartButton.disabled = true;

  playerScore = 0;
  computerScore = 0;
}

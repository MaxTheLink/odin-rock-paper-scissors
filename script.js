function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);

  return options[randomChoice];
}

function determineWinner(choice1, choice2) {
  let result = null;

  switch (choice1.toLowerCase() + choice2.toLowerCase()) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      result = choice1;
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      result = choice2;
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      result = null;
      break;
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  let winningSelection = determineWinner(playerSelection, computerSelection);

  if (!winningSelection) {
    return {
      result: "draw",
      message: `It's a draw! ${playerSelection} against ${computerSelection}`,
    };
  } else if (winningSelection == playerSelection) {
    return {
      result: "victory",
      message: `You Win! ${playerSelection} beats ${computerSelection}`,
    };
  } else if (winningSelection == computerSelection) {
    return {
      result: "defeat",
      message: `You Lose! ${computerSelection} beats ${playerSelection}`,
    };
  } else {
    return {
      result: "error",
      message: "Something went catastrophically wrong",
    };
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let rounds = 5;
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt(
      "Rock, paper or scissors, which will it be?"
    );
    const computerSelection = getComputerChoice();
    const playRoundResult = playRound(playerSelection, computerSelection);
    if (playRoundResult.includes("Win")) {
      playerWins++;
    } else if (playRoundResult.includes("Lose")) {
      computerWins++;
    }
    console.log(playRoundResult);
  }
  console.log(`Total score: Computer: ${computerWins}, Player: ${playerWins}`);
}

const buttons = document.querySelectorAll("button");
const winnerText = document.querySelector(".round-winner");
const playerScore = document.querySelector(".player-score .score-value");
const computerScore = document.querySelector(".computer-score .score-value");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const round = playRound(button.id, getComputerChoice());
    winnerText.textContent = round.message;
    if (round.result == "victory") {
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (round.result == "defeat") {
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    if (playerScore.textContent == "5") {
      winnerText.textContent = "Game Over!\n The player won!";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    } else if (computerScore.textContent == "5") {
      winnerText.textContent = "Game Over!\n The computer won!";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});

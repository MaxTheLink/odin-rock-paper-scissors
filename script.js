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
    return `It's a draw! ${playerSelection} against ${computerSelection}`;
  } else if (winningSelection == playerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (winningSelection == computerSelection) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "Something went catastrophically wrong";
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

game();

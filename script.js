function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let choice;
  let valid_coices = ["Rock", "Paper", "Scissors"];
  choice = prompt("Playing Rock, Paper, Scissors.\nEnter your choice:");
  if (!valid_coices.includes(choice)) {
    alert(
      'Invalid input, you must enter either "Rock", "Paper", or "Scissors". Try again.'
    );
    choice = getPlayerChoice();
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let match_result = "";
  const win_map = new Map();
  win_map.set("Rock", "Scissors");
  win_map.set("Scissors", "Paper");
  win_map.set("Paper", "Rock");

  if (playerSelection === computerSelection) {
    match_result = "You tied!";
  }
  // check if the computers selection maps to the losing match with the player
  else if (win_map.get(playerSelection) === computerSelection) {
    match_result = "Player won!";
  } else {
    match_result = "Computer won!";
  }
  console.log(
    "Human: " +
      playerSelection +
      "\nComputer: " +
      computerSelection +
      "\n" +
      match_result
  );
  return match_result;
}

function playGame() {
  let score = [0, 0]; // [player, computer]
  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1) + ":");
    let round_result = playRound(getPlayerChoice(), getComputerChoice());
    if (round_result === "Player won!") {
      score[0]++;
    } else if (round_result === "Computer won!") {
      score[1]++;
    } else if (round_result === "You tied!") {
      score[0]++;
      score[1]++;
    } else {
      // Throw error
      throw new Error("Invalid result from playRound().");
    }
    console.log(
      "Score: Player - " + score[0] + "    -    " + score[1] + " - computer."
    );
  }
}

// playGame();

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

const buttonContainer = document.getElementById("button-container");
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => {playRound("Rock", getComputerChoice())});
paperBtn.addEventListener('click', () => {playRound("Paper", getComputerChoice())});
scissorsBtn.addEventListener('click', () => {playRound("Scissors", getComputerChoice())});


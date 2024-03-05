function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let score = [0, 0]; // [player, computer]

function playRound(playerSelection, computerSelection) {
  let match_result = "";
  const win_map = new Map();
  win_map.set("Rock", "Scissors");
  win_map.set("Scissors", "Paper");
  win_map.set("Paper", "Rock");

  if (playerSelection === computerSelection) {
    match_result = "You tied!";
    score[0]++;
    score[1]++;
  }
  // check if the computers selection maps to the losing match with the player
  else if (win_map.get(playerSelection) === computerSelection) {
    match_result = "Player won!";
    score[0]++;
  } else {
    match_result = "Computer won!";
    score[1]++;
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


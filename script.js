function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
    const choice = "Rock";
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let match_result = "";
    const win_map = new Map();
    win_map.set("Rock","Scissors");
    win_map.set("Scissors","Paper");
    win_map.set("Paper","Rock");

    if (playerSelection === computerSelection) {
        match_result = "You tied!";
    }
    // check if the computers selection maps to the losing match with the player
    else if (win_map.get(playerSelection) === computerSelection) {
        match_result = "Player won!";
    }
    else {
        match_result = "Computer won!";
    }
    return match_result;
  }

let human = getPlayerChoice();
let comput = getComputerChoice();
console.log("Human: "+human+"\nComputer: "+comput);
console.log(playRound(human,comput));
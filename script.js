let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 100) // Generate random number between 0 and less than 1 then multiply by 100 to get an integer value then use Math.floor to return the value without decimal values
    if (rand <= 33){
        computerChoice = "Rock";
    } else if( rand <= 66){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}

function getHumanChoice(){
    humanChoice = prompt("Type Rock, Paper, Scissors");
    humanChoice.toLowerCase();
    if(humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors") {
        alert("Invalid answer");
    }
}

function playRound(humanChoice, computerChoice){
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
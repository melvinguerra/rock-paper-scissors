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
    if(humanChoice !== "Rock" || humanChoice !== "Paper" || humanChoice !== "Scissors") {
        alert("Invalid answer");
    }
}
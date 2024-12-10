let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 100) // Generate random number between 0 and less than 1 then multiply by 100 to get an integer value then use Math.floor to return the value without decimal values
    return rand;
}

function getHumanChoice(){
    let humanChoice = prompt("Type Rock, Paper, Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        alert("Invalid answer");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
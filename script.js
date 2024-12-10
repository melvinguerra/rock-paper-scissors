let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 100) // Generate random number between 0 and less than 1 then multiply by 100 to get an integer value then use Math.floor to return the value without decimal values
// <= 33 = rock (0-33)
// <= 66 = paper (34-66)
// < 100 = scissors ( 67-100)
    return rand;
}

function getHumanChoice(){
    let humanChoice = prompt("Type Rock, Paper, Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice <= 33){
        computerChoice = "rock";
    } else if( computerChoice <= 66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        alert("Invalid answer");
    } else if(humanChoice === "rock" && computerChoice == "rock") {
        alert(`It's a tie! You both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice == "rock") {
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice == "paper") {
        alert(`It's a tie! You both chose ${humanChoice}`);
    } else if(humanChoice === "paper" && computerChoice == "scissors") {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if(humanChoice === "scissors" && computerChoice == "rock") {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if(humanChoice === "scissors" && computerChoice == "paper") {
        alert(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice == "scissors") {
        alert(`It's a tie! You both chose ${humanChoice}`);
    }
}

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

}


while(humanScore < 5 && computerScore < 5) {
    playGame();
}

if(humanScore = 5){
    alert("You won against the computer!");
} else  if (computerScore = 5){
    alert("You lost against the computer!");
}



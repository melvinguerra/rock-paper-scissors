# A game of Rock Paper Scissors
A simple Rock Paper Scissors game
Plays until 5 rounds

## Pseudocode
```
Get option from human(rock/paper/scissors)
Get option from computer(rock/paper/scissors)
Evaluate answer and output winner
Add 1 count to the winner
```

## Computer logic
Using Math library, Math.random generates a number between 0 and 1
Mutiply result by 100 then use Math.floor to get a whole number
If result is <= 33, computerChoice is Rock
If result is <= 66, computerChoice is Paper
If result is <=100, computerChoice is Scissors

## Player input
Player's input can accept Rock, Paper or Scissors regardless if it's 
in lowercase, uppercase or a mix of both.



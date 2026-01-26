const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playerChoice){

const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";
if(playerChoice === computerChoice){
    result = "IT'S A TIE!"
}
else{
    switch(playerChoice)
    {
        case "rock":
            result = (computerChoice === "scissor")? "You Win":"you lose";
        case "paper":
            result = (computerChoice === "rock")? "You Win!":"You Lose";
        case "scissor":
            result = (computerChoice === "paper")? "You Win": "You Lose";
    }
}
playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;
}
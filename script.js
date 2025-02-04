const ROCK     = "rock";
const PAPER    = "paper";
const SCISSORS = "scissors";

let computerScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    let random = Math.trunc(Math.random() * 3);

    switch (random) {
        case 0:  return ROCK;
        case 1:  return PAPER;
        default: return SCISSORS;
    }
}

function getHumanChoice()
{
    let choice = prompt("What's your choice (rock, paper, scissors)?");

    if (!choice) {
        return '';
    }

    choice = choice.trim().toLowerCase();

    if (choice != ROCK && choice != PAPER && choice != SCISSORS) {
        return '';
    }

    return choice;
}

function playRound(humanChoice, computerChoice)
{
    let div = document.querySelector("#results");

    // Human choice validation and normalization (case-insensitive) is already done in
    // the function "getHumanChoice".
    switch (humanChoice) {
        case ROCK:
            switch (computerChoice)
            {
                case ROCK:                      addResult("Tie!"); break;
                case PAPER:    computerScore++; addResult("You lose! Paper beats Rock!"); break;
                case SCISSORS: humanScore++;    addResult("You win! Rock beats Scissors!"); break;
            }
            break;
        case PAPER:
            switch (computerChoice)
            {
                case ROCK:     humanScore++;    addResult("You win! Paper beats Rock!"); break;
                case PAPER:                     addResult("Tie!"); break;
                case SCISSORS: computerScore++; addResult("You lose! Scissors beats Paper!"); break;
            }
            break;
        case SCISSORS:
            switch (computerChoice)
            {
                case ROCK:     computerScore++; addResult("You lose! Rock beats Scissors!"); break;
                case PAPER:    humanScore++;    addResult("You win! Scissors beats Paper!"); break;
                case SCISSORS:                  addResult("Tie!");
            }
            break;
    }
}

function addResult(text)
{
    let score  = document.querySelector("#score");
    let result = document.querySelector("#results");
    
    score.textContent  = `Score: Human ${humanScore}, Computer ${computerScore}`;
    result.textContent = text;
}

function setup() {
    document.querySelector("#rock").addEventListener('click', e =>  {
        playRound(ROCK, getComputerChoice());
    });

    document.querySelector("#paper").addEventListener('click', e => {
        playRound(PAPER, getComputerChoice());
    })

    document.querySelector('#scissors').addEventListener('click', e => {
        playRound(SCISSORS, getComputerChoice());
    })
}

setup();
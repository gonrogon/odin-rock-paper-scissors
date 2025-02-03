const ROCK     = "rock";
const PAPER    = "paper";
const SCISSORS = "scissors";

let computerScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    let random = Math.trunc(Math.random() * 3);

    switch (random)
    {
        case 0:  return ROCK;
        case 1:  return PAPER;
        default: return SCISSORS;
    }
}

function getHumanChoice()
{
    let choice = prompt("What's your choice (rock, paper, scissors)?");

    if (!choice)
    {
        return '';
    }

    choice = choice.trim().toLowerCase();

    if (choice != ROCK && choice != PAPER && choice != SCISSORS)
    {
        return '';
    }

    return choice;
}

function playRound(humanChoice, computerChoice)
{
    // Human choice validation and normalization (case-insensitive) is already done in
    // the function "getHumanChoice".
    switch (humanChoice)
    {
        case ROCK:
            switch (computerChoice)
            {
                case ROCK:                      console.log("Tie!"); break;
                case PAPER:    computerScore++; console.log("You lose! Paper beats Rock!"); break;
                case SCISSORS: humanScore++;    console.log("You win! Rock beats Scissors!"); break;
            }
            break;
        case PAPER:
            switch (computerChoice)
            {
                case ROCK:     humanScore++;    console.log("You win! Paper beats Rock!"); break;
                case PAPER:                     console.log("Tie!"); break;
                case SCISSORS: computerScore++; console.log("You lose! Scissors beats Paper!"); break;
            }
            break;
        case SCISSORS:
            switch (computerChoice)
            {
                case ROCK:     computerScore++; console.log("You lose! Rock beats Scissors!"); break;
                case PAPER:    humanScore++;    console.log("You win! Scissors beats Paper!"); break;
                case SCISSORS:                  console.log("Tie!");
            }
            break;
    }
}

const humanChoice     = getHumanChoice();
const compueterChoice = getComputerChoice();

playRound(humanChoice, compueterChoice);

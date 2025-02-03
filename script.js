const ROCK     = "rock";
const PAPER    = "paper";
const SCISSORS = "scissors";

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
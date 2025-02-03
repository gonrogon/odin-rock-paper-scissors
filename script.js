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
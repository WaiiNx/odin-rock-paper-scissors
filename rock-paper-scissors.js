function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33){
        computerChoice = "rock";
    } else if(randomNumber > 33 && randomNumber <= 66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Type in \"rock\", \"paper\", or \"scissors\"").toLowerCase();
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors")
        {
            return humanChoice;
        }
        else {
            console.log("Wrong Input!");
            getHumanChoice();
        }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "rock" && humanChoice == "paper"){
            humanScore += 1;
            console.log("You Win! Paper beats Rock!")
        }
        else if (computerChoice == "paper" && humanChoice == "scissors"){
            humanScore += 1;
            console.log("You Win! Scissors beats Paper!")
        }
        else if (computerChoice == "scissors" && humanChoice == "rock"){
            humanScore += 1;
            console.log("You Win! Rock beats Scissors!")
        }
        else if (computerChoice == "rock" && humanChoice == "scissors"){
            computerScore += 1;
            console.log("You Lose! Rock beats Scissors!")
        }
        else if (computerChoice == "paper" && humanChoice == "rock"){
            computerScore += 1;
            console.log("You Lose! Paper beats Rock!")
        }
        else if (computerChoice == "scissors" && humanChoice == "paper"){
            computerScore += 1;
            console.log("You Lose! Scissors beats Paper!")
        }
        else if (computerChoice == "rock" && humanChoice == "rock"){
            console.log("Tie!")
        }
        else if (computerChoice == "paper" && humanChoice == "paper"){
            console.log("Tie!")
        }
        else if (computerChoice == "scissors" && humanChoice == "scissors"){
            console.log("Tie!")
        }
    }

    while (humanScore<5 && computerScore<5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
        console.log("Current Score: \nHuman: " + humanScore + "\nComputer: " + computerScore)
    }
    if (humanScore == 5){
        console.log("Congratulations! You won the Game!")
        return;
    }
    else if (computerScore == 5){
        console.log("Game Over! You lost!")
        return
    }
}

playGame();
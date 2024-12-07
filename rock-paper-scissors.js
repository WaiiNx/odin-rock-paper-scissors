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
    const mainBody = document.querySelector('body');

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    
    mainBody.appendChild(rockButton);
    mainBody.appendChild(paperButton);
    mainBody.appendChild(scissorsButton);
    
    rockButton.textContent = 'rock';
    paperButton.textContent = 'paper';
    scissorsButton.textContent = 'scissor';

    const resultDiv = document.createElement('div');
    mainBody.appendChild(resultDiv);

    const score = document.createElement('p');
    resultDiv.appendChild(score);

    const resultText = document.createElement('p');
    resultDiv.appendChild(resultText);

    const winnerText = document.createElement('p');
    resultDiv.appendChild(winnerText);
    winnerText.textContent = "";

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "rock" && humanChoice == "paper"){
            humanScore += 1;
            resultText.textContent = "You Win! Paper beats Rock!";
        }
        else if (computerChoice == "paper" && humanChoice == "scissors"){
            humanScore += 1;
            resultText.textContent = "You Win! Scissors beats Paper!"
        }
        else if (computerChoice == "scissors" && humanChoice == "rock"){
            humanScore += 1;
            resultText.textContent = "You Win! Rock beats Scissors!"
        }
        else if (computerChoice == "rock" && humanChoice == "scissors"){
            computerScore += 1;
            resultText.textContent =  "You Lose! Rock beats Scissors!"
        }
        else if (computerChoice == "paper" && humanChoice == "rock"){
            computerScore += 1;
            resultText.textContent =  "You Lose! Paper beats Rock!"
        }
        else if (computerChoice == "scissors" && humanChoice == "paper"){
            computerScore += 1;
            resultText.textContent =  "You Lose! Scissors beats Paper!"
        }
        else if (computerChoice == humanChoice){
            resultText.textContent =  "Tie!"
        }
    }
    
    rockButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
        changeScoreText();
        checkScore();  
    });
    paperButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
        changeScoreText();  
        checkScore();  
    });
    scissorsButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
        changeScoreText();
        checkScore();  
    });

    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    function checkScore() {
        if (humanScore == 5){
            winnerText.textContent = "You Win The Game!";
            disableButtons();
        }else if (computerScore == 5){
            winnerText.textContent = "You Lose The Game!";
            disableButtons();
        }
    }

    function changeScoreText(){
        score.textContent = "Current Score: " + "Player: " + String(humanScore) + " Computer: " + String(computerScore);
    }
}

playGame();
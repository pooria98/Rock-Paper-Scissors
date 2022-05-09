const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const userScoreElement = document.querySelector('.user-score');
const computerScoreElement = document.querySelector('.computer-score');

const gameAlertBox = document.querySelector('.game-alert');
const playerChoiceElement = document.getElementById('playerChoiceElement');
const computerChoiceElement = document.getElementById('computerChoiceElement');
const result = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

function computerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function game(playerMove) {
    let computerMove = computerChoice();
    switch (playerMove + computerMove) {
        case 'rockrock':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✊';
            computerChoiceElement.innerText = '✊';
            result.innerText = 'DRAW';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            break;
        case 'rockpaper':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✊';
            computerChoiceElement.innerText = '🖐';
            result.innerText = 'YOU LOSE';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            computerScore++;
            break;
        case 'rockscissors':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✊';
            computerChoiceElement.innerText = '✌';
            result.innerText = 'YOU WIN';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            userScore++;
            break;
        case 'scissorsrock':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✌';
            computerChoiceElement.innerText = '✊';
            result.innerText = 'YOU LOSE';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            computerScore++;
            break;
        case 'scissorspaper':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✌';
            computerChoiceElement.innerText = '🖐';
            result.innerText = 'YOU WIN';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            userScore++;
            break;
        case 'scissorsscissors':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '✌';
            computerChoiceElement.innerText = '✌';
            result.innerText = 'DRAW';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            break;
        case 'paperrock':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '🖐';
            computerChoiceElement.innerText = '✊';
            result.innerText = 'YOU WIN';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            userScore++;
            break;
        case 'paperscissors':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '🖐';
            computerChoiceElement.innerText = '✌';
            result.innerText = 'YOU LOSE';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            computerScore++;
            break;
        case 'paperpaper':
            console.log('player: ' + playerMove);
            console.log('computer: ' + computerMove);
            gameAlertBox.classList.add('show');
            playerChoiceElement.innerText = '🖐';
            computerChoiceElement.innerText = '🖐';
            result.innerText = 'DRAW';
            setTimeout(function () {
                gameAlertBox.classList.remove('show');
            }, 1500);
            break;
    }
}


rock.addEventListener("click", function () {
    game(this.className);
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
});

paper.addEventListener("click", function () {
    game(this.className);
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
});

scissors.addEventListener("click", function () {
    game(this.className);
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
});


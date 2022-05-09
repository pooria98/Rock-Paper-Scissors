const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const userScoreElement = document.querySelector('.user-score');
const computerScoreElement = document.querySelector('.computer-score');

const gameAlertBox = document.querySelector('.game-alert');
const playerChoiceElement = document.getElementById('playerChoiceElement');
const computerChoiceElement = document.getElementById('computerChoiceElement');
const result = document.getElementById('result');

const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');

let userScore = JSON.parse(localStorage.getItem('user score'));
let computerScore = JSON.parse(localStorage.getItem('pc score'));

if (userScore == null) {
    userScore = 0;
} else {
    userScoreElement.innerText = userScore;
}

if (computerScore == null) {
    computerScore = 0;
} else {
    computerScoreElement.innerText = computerScore;
}

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

saveBtn.addEventListener("click", function(){
    localStorage.setItem('user score', JSON.stringify(userScore));
    localStorage.setItem('pc score', JSON.stringify(computerScore));
    alert('scores saved');
});

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    alert('scores reset');
    computerScore = 0;
    userScore = 0;
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
});
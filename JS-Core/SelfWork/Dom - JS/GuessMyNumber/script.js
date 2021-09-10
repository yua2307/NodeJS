'use strict';

let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

console.log(number);


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
function againHandle() {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    console.log(number)
    displayMessage('Start guessing ....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

function clickHandle() {

    document.querySelector('body').style.backgroundColor = '#222'
    var predictNumber = Number(document.querySelector('.guess')
        .value);
    if (!predictNumber) {
        document.querySelector('.message').textContent =
            'Not a number or empty';
    }
    else if (predictNumber !== number) {
        if (score > 1) {
            displayMessage(predictNumber < number ? 'Too Low' : 'Too High');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (predictNumber === number) {
        displayMessage('Correct number');
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
}

var buttonCheck = document.querySelector('.check');
var buttonAgain = document.querySelector('.again');

buttonCheck.addEventListener('click', clickHandle);
buttonAgain.addEventListener('click', againHandle);
'use strict';

const txtMsg = document.querySelector('.message');
const chkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');
const sScore = document.querySelector('.score');
const shownNumber = document.querySelector('.number');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');

console.log(again);
let score = 20;
const scores = [];

let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

const inptNumber = function () {
  const guessedNumber = Number(guess.value);
  //empty inpt
  if (!guessedNumber) {
    txtMsg.textContent = 'Please enter a number.🎃';
    // winner winner GG GG
  } else if (guessedNumber === secretNumber) {
    shownNumber.textContent = guessedNumber;
    shownNumber.style.width = '30rem';
    txtMsg.textContent = 'Congratulations! 🎉🎉';
    body.style.backgroundColor = '#32CD32';
    // High score handling
    scores.push(score);
    showngHighScore(scores);
    // handling score when wrong guessing
  } else {
    if (score > 1) {
      score--;
      sScore.textContent = score;

      txtMsg.textContent =
        guessedNumber < secretNumber
          ? 'Too low! Try higher.📈'
          : 'Too high! Try lower.📉';
    } else {
      txtMsg.textContent = 'Game Over! You lost. 🧨';
      body.style.backgroundColor = '#FF0000';
      sScore.textContent = 0;
    }
  }
};

const reset = function () {
  score = 20;
  sScore.textContent = score;
  txtMsg.textContent = '';
  shownNumber.textContent = '?';
  shownNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
  guess.value = '';
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);
};
const rePlay = function () {
  scores.push(score);
  showngHighScore(scores);
  reset();
};

const showngHighScore = function (arr) {
  if (arr.length > 0) {
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    highScore.textContent = max;
    return max;
  } else {
    highScore.textContent = 0;
  }
};

chkBtn.addEventListener('click', inptNumber);
again.addEventListener('click', rePlay);

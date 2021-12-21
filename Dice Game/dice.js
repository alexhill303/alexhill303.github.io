"use strict";
//Global Variables

const diceImage = document.getElementById("diceImage");
const button = document.getElementById("rollBtn");
const highScore = document.getElementById("highScore");
const score = document.getElementById("userScore");
let randomNumber = 0;
//Get Random Dice
function createRandomNumber() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  //   console.log(randomNumber);
  return randomNumber;
}
createRandomNumber();

diceImage.classList.add("hidden");
//Roll Dice Functionality
let newHighScore = 0;
highScore.textContent = newHighScore;
let userScore = 0;
score.textContent = 0;
//Roll Dice Fun
function rollDice() {
  diceImage.classList.remove("hidden");
  if (randomNumber === 1) {
    diceImage.src = "Dice-1-b.svg.png";
    alert("Game Over");
    score.textContent = 0;
    if (userScore > newHighScore) {
      highScore.textContent = userScore;
      newHighScore = userScore;
    }
    newHighScore = userScore;
    userScore = 0;
  } else if (randomNumber === 2) {
    diceImage.src = "Dice-2a-b.svg.png";
    userScore = userScore + 2;
    score.textContent = userScore;
  } else if (randomNumber === 3) {
    diceImage.src = "Dice-3a-b.svg.png";
    userScore = userScore + 3;
    score.textContent = userScore;
  } else if (randomNumber === 4) {
    diceImage.src = "Dice-4-b.svg.png";
    userScore = userScore + 4;
    score.textContent = userScore;
  } else if (randomNumber === 5) {
    diceImage.src = "Dice-5-b.svg.png";
    userScore = userScore + 5;
    score.textContent = userScore;
  } else if (randomNumber === 6) {
    diceImage.src = "Dice-6a-b.svg.png";
    userScore = userScore + 6;
    score.textContent = userScore;
  }
  return userScore;
}

button.addEventListener("click", function () {
  rollDice();
  createRandomNumber();
});
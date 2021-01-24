"use strict";
//Variables
const rock1 = document
  .getElementById("rockImg")
  .addEventListener("click", function () {
    document.getElementById("userGuess").value = "rock";
  });
const paper1 = document
  .getElementById("paperImg")
  .addEventListener("click", function () {
    document.getElementById("userGuess").value = "paper";
  });
const scissors1 = document
  .getElementById("scissorsImg")
  .addEventListener("click", function () {
    document.getElementById("userGuess").value = "scissors";
  });

const background = document.querySelector("body");

let playing = false;

//Getting user Input
//const userGuess = document.getElementById("userGuess").value;
//User should be able to choose between rock, paper, scissors

const getUserChoice = function (userInput) {
  userInput = document.getElementById("userGuess").value.toLowerCase();
  //userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "invalid";
  }
};

//Get computer choice
const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

//console.log(getComputerChoice());

//Determine a winner
const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won! 😥 ";
    }
    if (computerChoice === "scissors") {
      return "You Won! 👍";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You Won! 👍";
    }
    if (computerChoice === "scissors") {
      return "Computer Won! 😥 ";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won! 😥 ";
    }
    if (computerChoice === "paper") {
      return "You Won! 👍";
    }
  } else if (userChoice === "bomb") {
    return "You Won! 👍";
  }
};

//console.log(determineWinner("rock", "paper"));

const playGame = function () {
  if (playing) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    document.getElementById("playerGuess").innerHTML = userChoice;
    document.getElementById("computerGuess").innerHTML = computerChoice;
    document.getElementById("winner").innerHTML = determineWinner(
      userChoice,
      computerChoice
    );
    document.getElementById("userGuess").value = "";
  }
};

playGame();

document.getElementById("button").addEventListener("click", function () {
  playing = true;
  playGame();
});

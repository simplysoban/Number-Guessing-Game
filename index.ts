#! /usr/bin/env node

// Simple Number Guesseing Game -->

import inquirer from "inquirer";

let randomNumber = Math.round(Math.random() * 10);
let score = 8;
let tries = 0;

while (tries < score) {
  
  const guess = await inquirer.prompt([
    {
      message: "Guess a number, 0 - 10 : ",
      type: "number",
      name: "userGuess",
    },
  ]);
  
  if (guess.userGuess !== randomNumber) {
    console.log("\nWrong! Try Again.");
  }

  
  else if (guess.userGuess === randomNumber) {
    console.log(
      `Congratulations! You Guessed it right. \nYour Score: ${score - tries}/8`
      );
      break;
    }
    tries++;
}
if (tries === score){
  console.log("\nYou Lost! \nYou had 8 chances! Try Again.");
}
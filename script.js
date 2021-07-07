'use strict';

/**
 * DOM Basic --> it's in API WEB, and js can interactive with DOM so DOM is not javaScript 😁
 * // What is The DOM (Document Object Model) --> represent for HTML Document, allows
  // javaScript access HTML element and manipulate them 
  console.log(document.querySelector('.message'));
 * // text content --> show the text of tag HTML,you can read or edit it.
  document.querySelector('.message').textContent = 'Change it with text Content'; 
  console.log(document.querySelector('.message').textContent);
 * 
  //but with an input field it has the big different, when you access input field
  // you will use value property to get actual value and set value also
  document.querySelector('.guess').value = '5'; // yup it works
  console.log(document.querySelector('.guess').value);

  // Use Value for input field 💀💀💀 and It will receive a value
  //  with String type so you need to Cast to Number, it will help you code better 🤣

  // ** When you cast to Number --> if the value you receive is empty
  // so it convert to Zero(0) if the value you receive not Number
  // so it will convert to NaN so it make you validate better right?
 */

let numberRandom = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let win = false;
const printMessageClassCSS = (classCss, message) => {
  document.querySelector(`${classCss}`).textContent = message;
};
const printMessageInputField = (classCss, message) => {
  document.querySelector(`${classCss}`).value = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const numberInput = Number(document.querySelector('.guess').value);
  if (!numberInput) {
    printMessageClassCSS('.message', 'No Number⛔');
  } else {
    if (score > 0 && !win) {
      if (numberInput === numberRandom) {
        win = true;
        printMessageClassCSS('.message', 'Winner. Congratulation🎉');
        printMessageClassCSS('.number', numberRandom);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
          highScore = score;
          printMessageClassCSS('.highscore', highScore);
        }
      } else {
        printMessageClassCSS(
          '.message',
          numberInput > numberRandom ? 'Too High📈' : 'Too Low📉'
        );
        score--;
        printMessageClassCSS('.score', score);
      }
    } else {
      printMessageClassCSS(
        '.message',
        win
          ? 'Click Again! to play again🙌'
          : `You Lose😭😭. Let's try again💪💪`
      );
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  win = false;
  printMessageClassCSS('.score', score);
  printMessageClassCSS('.message', 'Start guessing...');
  printMessageClassCSS('.number', '?');
  printMessageInputField('.guess', '');
  printMessageClassCSS('.highscore', highScore);
  numberRandom = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

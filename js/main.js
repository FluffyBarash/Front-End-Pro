// ##########_HomeWork_1_####################################################

const counterOne = document.querySelector("#counter_one");
const counterTwo = document.querySelector("#counter_two");
const counterThree = document.querySelector("#counter_three");
const counterFour = document.querySelector("#counter_four");
const counterFive = document.querySelector("#counter_five");

const smileyOne = document.querySelector("#smiley_one");
const smileyTwo = document.querySelector("#smiley_two");
const smileyThree = document.querySelector("#smiley_three");
const smileyFour = document.querySelector("#smiley_four");
const smileyFive = document.querySelector("#smiley_five");

const button = document.querySelector(".reaction_window__button");

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;

smileyOne.addEventListener("click", () => {
  number1 = number1 + 1;
  counterOne.innerText = number1;
});

smileyTwo.addEventListener("click", () => {
  number2 = number2 + 1;
  counterTwo.innerText = number2;
});

smileyThree.addEventListener("click", () => {
  number3 = number3 + 1;
  counterThree.innerText = number3;
});

smileyFour.addEventListener("click", () => {
  number4 = number4 + 1;
  counterFour.innerText = number4;
});

smileyFive.addEventListener("click", () => {
  number5 = number5 + 1;
  counterFive.innerText = number5;
});

button.addEventListener("click", () => {
  number1 = 0;
  number2 = 0;
  number3 = 0;
  number4 = 0;
  number5 = 0;
  counterOne.innerText = number1;
  counterTwo.innerText = number2;
  counterThree.innerText = number3;
  counterFour.innerText = number4;
  counterFive.innerText = number5;
});

// ##########_HomeWork_1_####################################################

// 1.

// let array = ["Bob", 12, "Bill", 2, "Bob"];

// let sum = 0;
// let quantity = 0;
// let answer = 0;

// array.forEach((element) => {
//   let id = array.indexOf(element);
//   if (typeof element === "number") {
//     sum += element;
//     quantity++;
//   } else {
//     delete array[id];
//   }
// });

// answer = sum / quantity;

// console.log(`Среднее арифметическое данных чисел - ${Math.round(answer)}.`);
// console.log(array);

// 2.

// let x = Number(prompt(`Ведите первое число:`));
// let y = Number(prompt(`Ведите второе число:`));
// let znak = prompt(`Ведите знак (пример: : +, -, *, /, %, ^):`);

// let answer = 0;

// function doMath(x, znak, y) {
//   switch (true) {
//     case typeof x !== "number":
//       console.log("Error!");
//       break;
//     case znak == "+":
//       answer = x + y;
//       console.log(`${x} + ${y} = ${answer}`);
//       break;
//     case znak == "-":
//       answer = x - y;
//       console.log(`${x} - ${y} = ${answer}`);
//       break;
//     case znak == "*":
//       answer = x * y;
//       console.log(`${x} * ${y} = ${answer}`);
//       break;
//     case znak == "/":
//       answer = x / y;
//       console.log(`${x} / ${y} = ${answer}`);
//       break;
//     case znak == "^":
//       answer = Math.pow(x, y);
//       console.log(`${x}^${y} = ${answer}`);
//       break;
//   }
// }

// doMath(x, znak, y);

// 3.

// function createArray() {
//   const numRows = +prompt("Введите количество строк в двумерном массиве:");
//   const numCols = +prompt("Введите количество столбцов в каждой строке:");

//   const Array = [];

//   for (let i = 0; i < numRows; i++) {
//     const row = [];
//     for (let j = 0; j < numCols; j++) {
//       const value = prompt(`Введите значение для элемента [${i}][${j}]:`);
//       row.push(value);
//     }
//     Array.push(row);
//   }

//   return customArray;
// }

// const myArray = createArray();
// console.log(myArray);

// 4.

// let phrase = prompt(`Ведите любую фразу:`);
// let symbolOne = prompt(`Ведите первый символ:`);
// let symbolTwo = prompt(`Ведите второй символ:`);

// function washingMachine(text, symbols) {
//   let result = "";
//   for (let element of text) {
//     if (!symbols.includes(element)) {
//       result += element;
//     }
//   }
//   alert(`Останется - ${result}.`);
//   console.log(result);
// }

// washingMachine(phrase, [symbolOne, symbolTwo]);

// ##########_HomeWork_2_####################################################

// const input = document.querySelector(".field__input");
// const div = document.querySelector(".opacity");

// input.addEventListener("focus", () => {
//   div.classList.toggle("div_text");
// });

// input.addEventListener("blur", () => {
//   div.classList.toggle("div_text");
// });

// ##########_HomeWork_1_####################################################

// 1.

// let answer = "";

// for (let i = 20; i <= 30; i += 0.5) {
//   answer += i + " ";
// }

// console.log(answer);

// 2.

// const $ = 27;
// let answer = "";

// for (let i = 10; i <= 100; i += 10) {
//   answer = i * $;
//   console.log(`${i} Доллоров - ${answer} гривен.`);
// }

// 3.

// function washingMachine(number) {
//   if (number < 2) {
//     return "Число должно быть больше одного.";
//   } else if (number === 2) {
//     return "Простое число";
//   }

//   let i = 2;
//   const limit = Math.sqrt(number);

//   while (i <= limit) {
//     if (number % i === 0) {
//       return "Составное число";
//     }
//     i += 1;
//   }

//   return "Простое число";
// }

// console.log(washingMachine(4));

// 4.

// function washingMachine(number) {
//   if (number < 3) {
//     return "Ошибка! Число должно быть больше или равно трём.";
//   } else {
//     let i = 3;
//     while (i <= number) {
//       if (i == number) {
//         return "Yes";
//       }
//       if (i != number) {
//         i = i * 3;
//       }
//     }
//   }
// }

// console.log(washingMachine(9));

// ##########_HomeWork_2_####################################################

// const table = document.querySelector("#table");

// let number = 1;
// for (let i = 0; i < 10; i++) {
//   const tr = document.createElement("tr");
//   for (let j = 0; j < 10; j++) {
//     const td = document.createElement("td");
//     td.innerText = number;
//     tr.append(td);
//     number++;
//   }
//   table.append(tr);
// }

// ##########HomeWork_1####################################################

// const sign = prompt("Ведите число: (+ - * /)");
// const number_1 = Number(prompt("Ведите число №1"));
// const number_2 = Number(prompt("Ведите число №2"));

// switch (sign) {
//   case "+":
//     answer = number_1 + number_2;
//     console.log(answer);
//     alert(answer);
//     break;
//   case "-":
//     answer = number_1 - number_2;
//     console.log(answer);
//     alert(answer);
//     break;
//   case "*":
//     answer = number_1 * number_2;
//     console.log(answer);
//     alert(answer);
//     break;
//   case "/":
//     answer = number_1 / number_2;
//     console.log(answer);
//     alert(answer);
//     break;
//   default:
//     console.log("ОШИБКА!");
//     alert("ОШИБКА!");
// }

// ##########HomeWork_2####################################################

const number_1 = Number(prompt("Ведите число №1"));
const number_2 = Number(prompt("Ведите число №2"));

const addition = number_1 + number_2;
const subtraction = number_1 - number_2;
const multiplication = number_1 * number_2;
const division = number_1 / number_2;

console.log(
  `Користувач ввів ${number_1} і ${number_2}: \n ${number_1} + ${number_2} = ${addition} \n ${number_1} - ${number_2} = ${subtraction} \n ${number_1} * ${number_2} = ${multiplication} \n ${number_1} / ${number_2} = ${division}`
);

alert(
  `Користувач ввів ${number_1} і ${number_2}: \n ${number_1} + ${number_2} = ${addition} \n ${number_1} - ${number_2} = ${subtraction} \n ${number_1} * ${number_2} = ${multiplication} \n ${number_1} / ${number_2} = ${division}`
);

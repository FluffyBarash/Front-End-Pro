// ##########HomeWork-1####################################################

// const hour = prompt("Ведите количество часов:");

// switch (true) {
//   case isNaN(hour):
//     alert("ОЩИБКА! Вы вели не час!");
//     break;
//   default:
//     washingMachine();
// }

// function washingMachine() {
//   const answer = hour * 3600;
//   alert(`В ${hour} часах -  ${answer} секунд.`);
// }

// ##########HomeWork-2####################################################

// const autoBrands = ["Audi", "BMW", "Item", "Toyota"];

// autoBrands.splice(2, 1);
// console.log(autoBrands);

// ##########HomeWork-3####################################################

// const array = [
//   16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
//   76, -4, 12, -35, 4, 47,
// ];

// 1.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0;
//   });
//   const howMany = positive.length;
//   console.log(`Количество элементов: ${howMany}.`);
//   const sum = positive.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   console.log(`Сума элементов: ${sum}.`);
// }

// washingMachine();

// 2.

// const minElement = Math.min(...array);
// const indexElement = array.indexOf(minElement);

// console.log(
//   `Минимальный элемент - ${minElement}, его порядковый номер - ${indexElement}.`
// );

// 3.

// const maxElement = Math.max(...array);
// const indexElement = array.indexOf(maxElement);

// console.log(
//   `Максимальный элемент - ${maxElement}, его порядковый номер - ${indexElement}.`
// );

// 4.

// function washingMachine() {
//   const negativeElement = array.filter((element) => {
//     return element <= 0;
//   });
//   const quantity = negativeElement.length;
//   console.log(`Всего негативных элементов: ${quantity}.`);
// }

// washingMachine();

// 5.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0 && element % 2 !== 0;
//   });

//   const unpaired = positive.length;
//   console.log(`Количество нечетных положительных элементов: ${unpaired}.`);
// }

// washingMachine();

// 6.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0 && element % 2 == 0;
//   });

//   const paired = positive.length;
//   console.log(`Количество парных положительных элементов: ${paired}.`);
// }

// washingMachine();

// 7.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0 && element % 2 == 0;
//   });

//   const sum = positive.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });

//   console.log(sum);
// }

// washingMachine();

// 8.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0 && element % 2 !== 0;
//   });
//   const sum = positive.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });

//   console.log(sum);
// }

// washingMachine();

// 9.

// function washingMachine() {
//   const positive = array.filter((element) => {
//     return element > 0;
//   });

//   const work = positive.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
//   }, 1);
//   console.log(work);
// }

// washingMachine();

// 10.

// function washingMachine() {
//   const biggest = Math.max(...array);
//   const array_2 = array.map((element) => {
//     return element == biggest ? element : 0;
//   });

//   console.log(array_2);
// }
// washingMachine();

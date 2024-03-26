// // ####################_HomeWork_1_####################

// const header = document.querySelector(".header");
// const array = [1, 2, [1.1, 1.2, 1.3], 3];

// function generateList(array) {
//   let ul = document.createElement("ul");
//   array.forEach((element) => {
//     if (Array.isArray(element)) {
//       let ulx2 = document.createElement("ul");
//       ul.append(ulx2);
//       element.forEach((item) => {
//         let li = document.createElement("li");
//         li.innerText = item;
//         ulx2.append(li);
//       });
//     } else {
//       let li = document.createElement("li");
//       li.innerText = element;
//       ul.append(li);
//     }
//     header.append(ul);
//   });
// }

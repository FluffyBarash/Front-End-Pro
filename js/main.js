// // ####################_HomeWork_1_####################

const buy = document.querySelector("#buttonBuy");
const form = document.querySelector(".header__form");
const inputName = document.querySelector("#inputName");
const inputSurname = document.querySelector("#inputSurname");
const spisokCity = document.querySelector("#spisokCity");
const spisokOffice = document.querySelector("#spisokOffice");
const comments = document.querySelector("#comments");
const cardNumber = document.querySelector("#cardNumber");
const monthYear = document.querySelector("#monthYear");
const cardCVV = document.querySelector("#cardCVV");
const quantityOfGoods = document.querySelector("#quantityOfGoods");
const send = document.querySelector("#send");
const state = document.querySelector("#state");
const informationAboutOrder = document.querySelector(".informationAboutOrder");
const informationAboutOrderSectionTwo = document.querySelector(
  ".informationAboutOrder__section-two"
);
const overload = document.querySelector("#overload");

buy.addEventListener("click", () => {
  form.style.display = "flex";
});

send.addEventListener("click", () => {
  if (inputName.value == "") {
    console.error("Error!");
    inputName.placeholder = "This is a required line.";
    inputName.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    inputName.style.border = "1px solid red";
  }

  if (inputSurname.value == "") {
    console.error("Error!");
    inputSurname.placeholder = "This is a required line.";
    inputSurname.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    inputSurname.style.border = "1px solid red";
  }

  if (comments.value == "") {
    console.error("Error!");
    comments.placeholder = "This is a required line.";
    comments.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    comments.style.border = "1px solid red";
  }

  if (cardNumber.value == "") {
    console.error("Error!");
    cardNumber.placeholder = "This is a required line.";
    cardNumber.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    cardNumber.style.border = "1px solid red";
  }

  if (monthYear.value == "") {
    console.error("Error!");
    monthYear.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    monthYear.style.border = "1px solid red";
  }

  if (cardCVV.value == "") {
    console.error("Error!");
    cardCVV.classList.add("placeholderRed");
    state.style.color = "red";
    state.innerText = "Error!";
    cardCVV.style.border = "1px solid red";
  }
});

cardCVV.oninput = function () {
  this.value = this.value.substr(0, 3);
};

monthYear.oninput = function () {
  this.value = this.value.substr(0, 5);
};

cardNumber.oninput = function () {
  this.value = this.value.substr(0, 19);
};

inputName.oninput = function () {
  this.value = this.value.substr(0, 20);
};
quantityOfGoods.oninput = function () {
  this.value = this.value.substr(0, 3);
};

inputSurname.oninput = function () {
  this.value = this.value.substr(0, 20);
};

if ((inputName.length = 1)) {
}

inputName.addEventListener("input", () => {
  inputName.placeholder = "Name";
  inputName.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  inputName.style.border = "1px solid gray";
});

inputSurname.addEventListener("input", () => {
  inputSurname.placeholder = "Surname";
  inputSurname.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  inputSurname.style.border = "1px solid gray";
});

comments.addEventListener("input", () => {
  comments.placeholder = "Comments";
  comments.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  comments.style.border = "1px solid gray";
});

monthYear.addEventListener("input", () => {
  monthYear.placeholder = "ММ/ГГ";
  monthYear.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  monthYear.style.border = "1px solid gray";
});

cardCVV.addEventListener("input", () => {
  cardCVV.placeholder = "CVV";
  cardCVV.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  cardCVV.style.border = "1px solid gray";
});

cardNumber.addEventListener("input", () => {
  cardNumber.placeholder = "Card number";
  cardNumber.classList.remove("placeholderRed");
  state.style.color = "dodgerblue";
  state.innerText = "Loading...";
  cardNumber.style.border = "1px solid gray";
});

monthYear.addEventListener("input", () => {
  let g = monthYear.value;
  if (monthYear.value.length == 2) {
    monthYear.value = `${g}/`;
  }
});

cardNumber.addEventListener("input", () => {
  let l = cardNumber.value;

  let f = cardNumber.value.length;
  if (f == 4) {
    cardNumber.value = `${l} `;
  } else if (f == 9) {
    cardNumber.value = `${l} `;
  } else if (f == 14) {
    cardNumber.value = `${l} `;
  }
});

const promise = new Promise((resolve, reject) => {
  send.addEventListener("click", () => {
    if (
      inputName.value.length >= 1 &&
      inputSurname.value.length >= 1 &&
      comments.value.length >= 1 &&
      monthYear.value.length >= 5 &&
      cardCVV.value.length >= 3 &&
      cardNumber.value.length >= 19
    ) {
      return resolve();
    }
  });
});

promise.then(() => {
  informationAboutOrder.style.display = "inline";
  informationAboutOrder.style.zIndex = "100";

  const informationName = document.createElement("p");
  informationName.innerText = `Name: ${inputName.value}`;
  informationAboutOrderSectionTwo.append(informationName);

  const informationSurname = document.createElement("p");
  informationSurname.innerText = `Surname: ${inputSurname.value}`;
  informationAboutOrderSectionTwo.append(informationSurname);

  const informationComments = document.createElement("p");
  informationComments.innerText = `Comments: ${comments.value}`;
  informationAboutOrderSectionTwo.append(informationComments);

  const informationCardNumber = document.createElement("p");
  informationCardNumber.innerText = `Card number: ${cardNumber.value}`;
  informationAboutOrderSectionTwo.append(informationCardNumber);

  const informationMonthYear = document.createElement("p");
  informationMonthYear.innerText = `Card expiry date: ${monthYear.value}`;
  informationAboutOrderSectionTwo.append(informationMonthYear);

  const informationCVV = document.createElement("p");
  informationCVV.innerText = `CVV: ${cardCVV.value}`;
  informationAboutOrderSectionTwo.append(informationMonthYear);

  const informationQuantityOfGoods = document.createElement("p");
  informationQuantityOfGoods.innerText = `Quantity of goods: ${quantityOfGoods.value}`;
  informationAboutOrderSectionTwo.append(informationQuantityOfGoods);
});

overload.addEventListener("click", () => {
  location.reload();
});

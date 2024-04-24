// // ####################_HomeWork_1_####################

const nameInput = document.querySelector("#nameInput");
const surname = document.querySelector("#surnameInput");
const date = document.querySelector("#dateInput");
const addressTextarea = document.querySelector("#addressTextarea");
const manRadio = document.querySelector("#manRadioInput");
const womanRadio = document.querySelector("#womanRadioInput");
const select = document.querySelector("#select");
const engInput = document.querySelector("#engCkeckboxInput");
const ukrInput = document.querySelector("#ukrCkeckboxInput");
const rusInput = document.querySelector("#rusCkeckboxInput");
const tyuInput = document.querySelector("#tyuCkeckboxInput");
const button = document.querySelector("#button");
const table = document.querySelector(".table");
// ------------------------------------------------------------
const nameTable = document.querySelector("#nameTable");
const surnameTable = document.querySelector("#surnameTable");
const dateOfBirth = document.querySelector("#dateOfBirth");
const floor = document.querySelector("#floor");
const city = document.querySelector("#city");
const address = document.querySelector("#address");
const languages = document.querySelector("#languages");

button.addEventListener("click", () => {
  table.style.zIndex = "2";
  nameTable.innerText = `${nameInput.value}`;
  surnameTable.innerText = `${surname.value}`;
  dateOfBirth.innerText = `${date.value}`;
  city.innerText = `${select.value}`;
  address.innerText = `${addressTextarea.value}`;
  if (manRadio.checked) {
    floor.innerText = "man";
  } else if (womanRadio.checked) {
    floor.innerText = "woman";
  }
  let activatedLanguages = "";
  if (engInput.checked) {
    activatedLanguages += "English ";
  }
  if (ukrInput.checked) {
    activatedLanguages += "Ukrainian ";
  }
  if (rusInput.checked) {
    activatedLanguages += "Russian ";
  }
  if (tyuInput.checked) {
    activatedLanguages += "Tyutursky ";
  }
  languages.innerText = activatedLanguages;
});

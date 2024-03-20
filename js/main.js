// // ####################_HomeWork_1_####################
const windowInfo = document.querySelector(".windowInfo");

const year = prompt("Ваш год рождения?");
const city = prompt("Ваш город?");
const sport = prompt(
  "Выберите ващ любимый вид спорта(Футбол, Баскетбол, Хокей)"
);

if (sport == "футбол") {
  alert("Хочешь стать Криштианом Роналдом?");
} else if (sport == "баскетбол") {
  alert("Хочешь стать Майклом Джордоном?");
} else if (sport == "хокей") {
  alert("Хочешь стать Александром Овечкиным?");
}

if (year == "") {
  const yearText = document.createElement("p");
  yearText.innerText = `Ваш возраст - вы не ввели свой возраст.`;
  windowInfo.append(yearText);
} else if (isNaN(year)) {
  const yearText = document.createElement("p");
  yearText.innerText = `Ваш возраст - вы не ввели свой возраст.`;
  windowInfo.append(yearText);
} else {
  const yearText = document.createElement("p");
  yearText.innerText = `Ваш возраст - ${2024 - year} лет/года.`;
  windowInfo.append(yearText);
}

if (city == "") {
  const cityText = document.createElement("p");
  cityText.innerText = `Ваш город - вы не ввели свой город.`;
  windowInfo.append(cityText);
} else if (city.search(/\d/) != -1) {
  const cityText = document.createElement("p");
  cityText.innerText = `Ваш город - вы не ввели свой город .`;
  windowInfo.append(cityText);
} else {
  cityFun();
}

function cityFun() {
  if (city == "Киев") {
    const cityText = document.createElement("p");
    cityText.innerText = `Ты живешь в столице Украины.`;
    windowInfo.append(cityText);
  } else if (city == "Париж") {
    const cityText = document.createElement("p");
    cityText.innerText = `Ты живешь в столице Франции.`;
    windowInfo.append(cityText);
  } else if (city == "Лондон") {
    const cityText = document.createElement("p");
    cityText.innerText = `Ты живешь в столице Великобритании.`;
    windowInfo.append(cityText);
  } else if (city == "Вашингтон") {
    const cityText = document.createElement("p");
    cityText.innerText = `Ты живешь в столице США.`;
    windowInfo.append(cityText);
  } else {
    const cityText = document.createElement("p");
    cityText.innerText = `Ты живёшь в городе - ${city}.`;
    windowInfo.append(cityText);
  }
}

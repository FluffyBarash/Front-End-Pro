// // ####################_HomeWork_1_####################

const blockPost = document.querySelector("#block-post");

const city = prompt("Enter your city (example: LVIV):");

async function washingMachine() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  const response = await fetch(url);
  const data = await response.json();

  const title = document.createElement("h2");
  title.innerText = city;
  blockPost.append(title);

  const weather = document.createElement("p");
  weather.innerText = `Weather ${data.weather[0].main}`;
  blockPost.append(weather);

  const temp = document.createElement("p");
  temp.innerText = `Temperature: ${data.main.temp}`;
  blockPost.append(temp);

  const pressure = document.createElement("p");
  pressure.innerText = `Pressure: ${data.main.pressure}`;
  blockPost.append(pressure);

  const deg = document.createElement("p");
  deg.innerText = `Direction in degrees: ${data.wind.deg}`;
  blockPost.append(deg);

  const speed = document.createElement("p");
  speed.innerText = `Speed: ${data.wind.speed}`;
  blockPost.append(speed);

  const country = document.createElement("p");
  country.innerText = `Country: ${data.sys.country}`;
  blockPost.append(country);

  const images = document.createElement("img");
  images.setAttribute("src", "https://openweathermap.org/img/w/10d.png");
  blockPost.append(images);
}

washingMachine();

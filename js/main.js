// ####################_HomeWork_1_####################

const blockPost = document.querySelector("#block-post");
const idRequest = prompt("Ведите id поста от 1 до 100:") - 1;

if (isNaN(idRequest)) {
  console.error("Error! You wrote the letters.");
  alert("Error! You wrote the letters.");
} else if (idRequest > 99 || idRequest <= -1) {
  alert("Error! Non-compliance with the rules.");
  console.error("Error! Non-compliance with the rules.");
}

async function washingMachine() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();
  const post = data[idRequest];

  const h2 = document.createElement("h2");
  h2.innerText = post.title;
  blockPost.append(h2);

  const p = document.createElement("p");
  p.innerText = post.body;
  blockPost.append(p);

  const span = document.createElement("span");
  span.innerText = post.id;
  blockPost.append(span);

  const button = document.createElement("button");
  button.innerText = "Comments";
  blockPost.append(button);
}

washingMachine();

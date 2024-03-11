// ####################_HomeWork_1_####################

const categoriesBoxBread = document.querySelector(".categories-box__one");
const categoriesBoxMilk = document.querySelector(".categories-box__two");
const categoriesBoxSauces = document.querySelector(".categories-box__three");
const scrollOne = document.querySelector("#scrollOne");
const scrollTwo = document.querySelector("#scrollTwo");
const scrollThree = document.querySelector("#scrollThree");
const productInformation = document.querySelector("#productInformation");
const button = document.querySelector("#button");

categoriesBoxBread.addEventListener("click", () => {
  scrollOne.innerText = "Bread";
  scrollTwo.innerText = "Bagel";
  scrollThree.innerText = "Crackers";
  productInformation.innerText = "";
  button.style.display = "none";
});

categoriesBoxMilk.addEventListener("click", () => {
  scrollOne.innerText = "Milk";
  scrollTwo.innerText = "Yogurt";
  scrollThree.innerText = "Sour cream";
  productInformation.innerText = "";
  button.style.display = "none";
});

categoriesBoxSauces.addEventListener("click", () => {
  scrollOne.innerText = "Mayonnaise";
  scrollTwo.innerText = "Ketchup";
  scrollThree.innerText = "Mustard";
  productInformation.innerText = "";
  button.style.display = "none";
});

scrollOne.addEventListener("click", () => {
  if (scrollOne.innerText == "Bread") {
    productInformation.innerText =
      "a bakery product obtained by baking dough leavened with yeast or sourdough.";
    button.style.display = "block";
  } else if (scrollOne.innerText == "Milk") {
    productInformation.innerText =
      "a nutritious fluid produced by the mammary glands of female mammals during lactation.";
    button.style.display = "block";
  } else if (scrollOne.innerText == "Mayonnaise") {
    productInformation.innerText =
      "sauce made from vegetable oil, egg yolk, mustard, vinegar, salt and sugar.";
    button.style.display = "block";
  }
});

scrollTwo.addEventListener("click", () => {
  if (scrollTwo.innerText == "Bagel") {
    productInformation.innerText =
      "street product. Unlike a croissant, bagels are curved and cannot be made with puff pastry.";
    button.style.display = "block";
  }
  if (scrollTwo.innerText == "Yogurt") {
    productInformation.innerText =
      "A thick, moderately viscous, fermented milk drink obtained from cow's milk using an airless and yeast-free method by fermenting certain lactic acid bacteria.";
    button.style.display = "block";
  }
  if (scrollTwo.innerText == "Ketchup") {
    productInformation.innerText =
      "sauce, the main ingredients of which are tomatoes, vinegar, sugar and spices.";
    button.style.display = "block";
  }
});
scrollThree.addEventListener("click", () => {
  if (scrollThree.innerText == "Crackers") {
    productInformation.innerText =
      "cut and dried baked goods with a moisture content of 8-12%. Rusks are divided into simple crackers and butter crackers.";
    button.style.display = "block";
  }

  if (scrollThree.innerText == "Sour cream") {
    productInformation.innerText =
      "a liquid fermented milk product of white color with a thick consistency, obtained from cream and sourdough.";
    button.style.display = "block";
  }

  if (scrollThree.innerText == "Mustard") {
    productInformation.innerText =
      "seasoning made from seeds of plants of the Brassica family. To prepare the seasoning, whole, ground, crushed or crushed mustard seeds are mixed into a paste with water, vinegar, lemon or apple juice, wine or other liquid, with the addition of salt and other flavorings.";
    button.style.display = "block";
  }
});

button.addEventListener("click", () => {
  alert("Product purchased");
  productInformation.innerText = "";
  scrollOne.innerText = "";
  scrollTwo.innerText = "";
  scrollThree.innerText = "";
  button.style.display = "none";
});

// // ####################_HomeWork_1_####################

const ext = document.querySelector("#ext");
const myOrders = document.querySelector("#myOrders");
const myOrdersWindow = document.querySelector(".myOrdersWindow");
const addBasket = document.querySelectorAll(".addBasket");
const card = document.querySelectorAll(".card");
const empty = document.querySelector("#empty");
const myOrdersLine = document.querySelector(".myOrdersLine");
let quantityGoodsInCart = 0;

myOrders.addEventListener("click", () => {
  myOrdersWindow.classList.toggle("myOrdersWindowDelete");
});

ext.addEventListener("click", () => {
  myOrdersWindow.classList.toggle("myOrdersWindowDelete");
});

for (let i = 0; i < addBasket.length; i++) {
  addBasket[i].addEventListener("click", () => {
    if (addBasket[i].innerText == "Add to Basket") {
      addBasket[i].innerText = "remove";
      addBasket[i].classList.toggle("addBasketClassic");
      addBasket[i].classList.toggle("addBasketRemove");
      let clone = card[i].cloneNode(true);
      clone.classList.add(`card-${quantityGoodsInCart}`);
      myOrdersLine.appendChild(clone);
      quantityGoodsInCart = quantityGoodsInCart - 1;
    } else if (addBasket[i].innerText == "remove") {
      addBasket[i].innerText = "Add to Basket";
      addBasket[i].classList.toggle("addBasketClassic");
      addBasket[i].classList.toggle("addBasketRemove");
      empty.style.display = "inline";
      quantityGoodsInCart++;
      let card0 = document.querySelector(".card-0");
      // let card1 = document.querySelector(".card-1");
      // let card2 = document.querySelector(".card-2");
      // let card3 = document.querySelector(".card-3");
      myOrdersLine.remove(card0);
      // myOrdersLine.remove(card1);
      // myOrdersLine.remove(card2);
      // myOrdersLine.remove(card3);
    }

    if (quantityGoodsInCart == 0) {
      empty.style.display = "inline";
    } else {
      empty.style.display = "none";
    }
  });
}

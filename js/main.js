// ##########_HomeWork_1_####################################################

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let img = document.querySelector("#img");
let counter = document.querySelector(".counter");
let offset = 5;

prev.addEventListener("click", () => {
  offset -= 1;
  console.log(offset);
  if (offset == 1) {
    counter.innerText = "1";
    prev.style.opacity = 0;
    prev.style.transform = "translateX(-2000px)";
    img.setAttribute("src", "images/jpg.1.jpg");
  } else if (offset == 2) {
    counter.innerText = "2";
    prev.style.opacity = 1;
    prev.style.transform = "translateX(0px)";
    img.setAttribute("src", "images/jpg.2.jpg");
  } else if (offset == 3) {
    counter.innerText = "3";
    img.setAttribute("src", "images/jpg.3.jpg");
  } else if (offset == 4) {
    counter.innerText = "4";
    img.setAttribute("src", "images/jpg.4.jpg");
  } else if (offset == 5) {
    counter.innerText = "5";
    img.setAttribute("src", "images/jpg.5.jpg");
  } else if (offset == 6) {
    counter.innerText = "6";
    img.setAttribute("src", "images/jpg.6.jpg");
  } else if (offset == 7) {
    counter.innerText = "7";
    img.setAttribute("src", "images/jpg.7.jpg");
  } else if (offset == 8) {
    counter.innerText = "8";
    img.setAttribute("src", "images/jpg.8.jpg");
  } else if (offset == 9) {
    counter.innerText = "9";
    img.setAttribute("src", "images/jpg.9.jpg");
  } else if (offset == 10) {
    counter.innerText = "10";
    next.style.opacity = 1;
    next.style.transform = "translateX(0px)";
    img.setAttribute("src", "images/jpg.10.jpg");
  } else if (offset == 11) {
    counter.innerText = "11";
    next.style.opacity = 0;
    next.style.transform = "translateX(2000px)";
    img.setAttribute("src", "images/jpg.11.jpg");
  }
});

next.addEventListener("click", () => {
  offset += 1;
  console.log(offset);
  if (offset == 1) {
    counter.innerText = "1";
    prev.style.opacity = 0;
    prev.style.transform = "translateX(-2000px)";
    img.setAttribute("src", "images/jpg.1.jpg");
  } else if (offset == 2) {
    counter.innerText = "2";
    prev.style.opacity = 1;
    prev.style.transform = "translateX(0px)";
    img.setAttribute("src", "images/jpg.2.jpg");
  } else if (offset == 3) {
    counter.innerText = "3";
    img.setAttribute("src", "images/jpg.3.jpg");
  } else if (offset == 4) {
    counter.innerText = "4";
    img.setAttribute("src", "images/jpg.4.jpg");
  } else if (offset == 5) {
    counter.innerText = "5";
    img.setAttribute("src", "images/jpg.5.jpg");
  } else if (offset == 6) {
    counter.innerText = "6";
    img.setAttribute("src", "images/jpg.6.jpg");
  } else if (offset == 7) {
    counter.innerText = "7";
    img.setAttribute("src", "images/jpg.7.jpg");
  } else if (offset == 8) {
    counter.innerText = "8";
    img.setAttribute("src", "images/jpg.8.jpg");
  } else if (offset == 9) {
    counter.innerText = "9";
    img.setAttribute("src", "images/jpg.9.jpg");
  } else if (offset == 10) {
    counter.innerText = "10";
    next.style.opacity = 1;
    next.style.transform = "translateX(0px)";
    img.setAttribute("src", "images/jpg.10.jpg");
  } else if (offset == 11) {
    counter.innerText = "11";
    next.style.opacity = 0;
    next.style.transform = "translateX(2000px)";
    img.setAttribute("src", "images/jpg.11.jpg");
  }
});

if (offset == 5) {
  img.setAttribute("src", "images/jpg.5.jpg");
}

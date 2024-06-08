const box = document.querySelector(".moving-box");
const box2 = document.querySelector(".container");
const secondEye = document.querySelector(".moving-box2");
const secondEye2 = document.querySelector(".container2");
const innerContainer1 = document.querySelector(".inner-container");
const innerContainer2 = document.querySelector(".inner-container2");
const body = document.querySelector(".body");

let x_es = 0;
let y_es = 0;

document.addEventListener("mousemove", (e) => {
  x_es = e.clientX;
  y_es = e.clientY;

  moveElement(e, box, 35, 35);
  moveElement(e, box2, 60, 100);
  moveElement(e, secondEye, 35, 35);
  moveElement(e, secondEye2, 60, 100);
  moveElement(e, innerContainer1, 10, 10);
  moveElement(e, innerContainer2, 10, 10);
  moveElement(e, body, 15, 2);
});

// let previousX = x_es;
// let previousY = y_es;

// setInterval(() => {
//   if (x_es === previousX && y_es === previousY) {
//     body.classList.add("breath");
//   } else {
//     body.classList.remove("breath");
//   }
//   previousX = x_es;
//   previousY = y_es;
// }, 1400);

const randomValue = Math.floor(Math.random() * (10000 - 5000) + 4000);
setInterval(() => {
  box.classList.add("opacity");
  box2.classList.add("opacity");
  secondEye.classList.add("opacity");
  secondEye2.classList.add("opacity");
  innerContainer1.classList.add("blink");
  innerContainer2.classList.add("blink");

  setTimeout(() => {
    box.classList.remove("opacity");
    box2.classList.remove("opacity");
    secondEye.classList.remove("opacity");
    secondEye2.classList.remove("opacity");
    innerContainer1.classList.remove("blink");
    innerContainer2.classList.remove("blink");
  }, 100);
}, randomValue);

// setInterval(() => {
//   if (x_es !== previousX && y_es !== previousY) {
//     body.classList.remove("breath");
//   }
//   previousX = x_es;
//   previousY = y_es;
// }, 300);

// function notMoving(e) {}

// 35 35
// 60 100

function moveElement(event, element, prop1, prop2) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * prop1;
  const offsetY = ((y - middleY) / middleY) * prop2;

  element.style.setProperty("--moveX", offsetX + "px");
  element.style.setProperty("--moveY", offsetY + "px");
}

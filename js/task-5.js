const spanElem = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");

changeColorBtn.addEventListener("click", onChangeColor)

function onChangeColor() {
  const currentColor = getRandomHexColor();

  spanElem.textContent = currentColor;
  bodyElem.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
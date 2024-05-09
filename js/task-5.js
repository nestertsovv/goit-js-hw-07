const spanElem = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyElem = document.body;

changeColorBtn.addEventListener("click", (e) => {
  spanElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
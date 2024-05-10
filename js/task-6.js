const containerElem = document.querySelector("#boxes");
const controlsElem = document.querySelector("#controls");
const inputElem = controlsElem.querySelector("input");
const createBtn = controlsElem.querySelector("button[data-create]");
const destroyBtn = controlsElem.querySelector("button[data-destroy]");
const fragment = document.createDocumentFragment();

createBtn.addEventListener("click", (e) => {
  let input = inputElem.value;

  if (input >= 1 && input <= 100) createBoxes(input); inputElem.value = "";
})

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  containerElem.innerHTML = "";

  let widthElem = 30;
  let heightElem = 30;

  for (let i = 1; i <= amount; i++) {
    const elem = document.createElement("div");
    
    elem.style.width = `${widthElem}px`;
    elem.style.height = `${heightElem}px`;
    elem.style.backgroundColor = getRandomHexColor();

    widthElem += 10; 
    heightElem += 10;

    fragment.appendChild(elem);
  }
  
  containerElem.appendChild(fragment)
}

function destroyBoxes() {
  containerElem.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
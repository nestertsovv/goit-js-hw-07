const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", handleInput);

function handleInput(e) {
    const inputValue = e.target.value.trim();
    
    spanElem.textContent = inputValue || "Anonymous";
}
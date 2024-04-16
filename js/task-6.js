const numberInput = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
    const amount = numberInput.value;
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        numberInput.value = "";
    }
});

function createBoxes(amount) {
    let markup = "";
    let size = 30;
    let bgColor;
    boxes.innerHTML = "";

    for (let i = 1; i <= amount; i++) {
        bgColor = getRandomHexColor();
        markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${bgColor}"></div>`;
        size += 10;
    }

    boxes.insertAdjacentHTML("afterbegin", markup);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    boxes.innerHTML = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
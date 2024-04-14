function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const spanCurrentColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
    const getColor = getRandomHexColor();

    spanCurrentColor.textContent = getColor;
    body.style.backgroundColor = getColor;
}
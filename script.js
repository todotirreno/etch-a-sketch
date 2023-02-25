"use strict";
const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
buildGrid(16);

function changeColor(e) {
  let r, g, b;
  if (!e.target.style.background) {
    r = getRandomRGB();
    g = getRandomRGB();
    b = getRandomRGB();
  } else {
    const rgb = e.target.style.background.match(
      /\((\d\d?\d?), (\d\d?\d?), (\d\d?\d?)/
    );
    r = (+rgb[1] * 100) / 255 - 10;
    g = (+rgb[2] * 100) / 255 - 10;
    b = (+rgb[3] * 100) / 255 - 10;
  }
  e.target.style.background = `rgb(${r}%,${g}%,${b}%)`;
}

function getRandomRGB() {
  return Math.round(Math.random() * 100);
}

document.getElementById("new").addEventListener("click", getSize);

function getSize(e) {
  const squares = +prompt("How many squares per side");
  container.replaceChildren();
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  buildGrid(squares);
}

function buildGrid(squares) {
  for (let i = 1; i <= squares ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("pointerover", changeColor);
    container.append(square);
  }
}

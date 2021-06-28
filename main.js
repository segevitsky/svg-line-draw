import styles from "./style.css";

const line = document.getElementById("eFSHKMcZUvr2");
const button = document.querySelector(".button");
line.classList.remove(".path");

function drawLine() {
	line.classList.add("path-moving");
}

button.addEventListener("click", drawLine);
window.addEventListener("scroll", drawLine);

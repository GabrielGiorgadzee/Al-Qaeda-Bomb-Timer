"use strict";

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const timeInput = document.getElementById("timeInput");
const timerEl = document.getElementById("timer");
const body = document.getElementById("body");

let interval;
let countdown;
let blinkInterval;
let explosionAudio = new Audio(
  "https://www.myinstants.com/media/sounds/allahu-akbar.mp3"
);

startBtn.addEventListener("click", () => {
  let seconds = parseInt(timeInput.value);
  if (isNaN(seconds) || seconds <= 0) return;

  clearInterval(interval);
  clearInterval(blinkInterval);

  countdown = seconds;
  timerEl.textContent = countdown + "s";

  interval = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown + "s";
    if (countdown <= 0) {
      clearInterval(interval);
      body.classList.add("animate-blink");
      explosionAudio.play();
      startBlink();
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearInterval(blinkInterval);
  body.classList.remove("bg-red-600", "bg-white");
  body.classList.remove("animate-blink");
  body.style.backgroundColor = "";
  timerEl.textContent = "";
  timeInput.value = "";
});

function startBlink() {
  let isRed = true;
  blinkInterval = setInterval(() => {
    body.style.backgroundColor = isRed ? "red" : "white";
    isRed = !isRed;
  }, 300);
}

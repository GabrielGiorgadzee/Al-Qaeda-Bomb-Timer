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
      explosionAudio.play();
      startBlink();
      timerEl.innerHTML = `<img src="https://cdn.britannica.com/89/151689-050-990703FF/Osama-bin-Laden-Al-Qaeda-government-exhibit-trial-2006.jpg" alt="Osama" class="w-20 h-20 rounded-full border-4 border-red-500 shadow-lg mx-auto" />`;
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  clearInterval(blinkInterval);
  body.style.animation = "";
  body.style.backgroundColor = "";
  timerEl.textContent = "";
  timeInput.value = "";
});

function startBlink() {
  body.style.animation = "blinkBg 0.6s infinite";
}

let timer;
let isRunning = false;
let time = 0;
let laps = [];

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("display").style.color = "#555";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStopBtn").textContent = "Stop";
    document.getElementById("display").style.color = "#ff5e62";
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  time += 10;
  const formattedTime = formatTime(time);
  document.getElementById("display").textContent = formattedTime;
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
  document.getElementById("display").style.color = "#555";
  isRunning = false;
  time = 0;
  laps = [];
  displayLaps();
}

function lap() {
  laps.push(time);
  displayLaps();

  
  const lapItem = document.querySelector("#laps li:first-child");
  lapItem.style.opacity = 1;
  lapItem.style.transform = "translateY(0)";
  setTimeout(() => {
    lapItem.style.opacity = 0;
    lapItem.style.transform = "translateY(-10px)";
  }, 1500);
}

function displayLaps() {
  const lapsList = document.getElementById("laps");
  lapsList.innerHTML = "";
  laps.forEach((lapTime, index) => {
    const li = document.createElement("li");
    li.textContent = Lap ${index + 1}: ${formatTime(lapTime)};

    lapsList.appendChild(li);

    
    setTimeout(() => {
      li.style.opacity = 1;
      li.style.transform = "translateY(0)";
    }, index * 100);
  });
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  return date.toISOString().substr(11, 8);
}

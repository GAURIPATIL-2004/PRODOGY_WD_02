// script.js

let timer;
let isRunning = false;
let time = 0; // time in milliseconds

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        time += 100; // increment time by 100ms
        document.getElementById('display').textContent = formatTime(time);
    }, 100);
}

function pauseStopwatch() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    time = 0;
    document.getElementById('display').textContent = formatTime(time);
    document.getElementById('laps').innerHTML = ''; // clear lap times
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${formatTime(time)}`;
    document.getElementById('laps').appendChild(lapTime);
}

// Event listeners for buttons
document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);

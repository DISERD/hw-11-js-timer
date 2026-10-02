let seconds = 15;

let timerElement = document.getElementById('timer');
let messageElement = document.getElementById('message');

let timerId = setInterval(function() {
    seconds--;
    
    timerElement.textContent = seconds;

    if (seconds === 7) {
        messageElement.textContent = "Less than half the time is left!";
    }

    if (seconds <= 0) {
        clearInterval(timerId);
        messageElement.textContent = "Time's up!";
    }
}, 1000);
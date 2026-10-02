let msLeft = 30000;
let timerId = null;

let timerElement = document.getElementById('timer');
let messageElement = document.getElementById('message');
let restartBtn = document.getElementById('restartBtn');

function startTimer() {
    msLeft = 30000;
    restartBtn.disabled = true;
    messageElement.textContent = "";
    timerElement.classList.remove('warning');

    timerId = setInterval(function() {
        msLeft -= 10;
        timerElement.textContent = (msLeft / 1000).toFixed(3);

        if (msLeft <= 0) {
            clearInterval(timerId);
            timerElement.textContent = "0.000";
            timerElement.classList.remove('warning');
            messageElement.textContent = "Time's up!";
            restartBtn.disabled = false;
        } 

        else if (msLeft <= 10000) {
            timerElement.classList.add('warning');
            messageElement.textContent = "Time's running out!";
        }
    }, 10);
}

startTimer();

restartBtn.addEventListener('click', startTimer);
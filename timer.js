const timerText = document.getElementById("timer-text");
const timerCircle = document.getElementById("timer-circle");
timerCircleProperties = window.getComputedStyle(timerCircle);
const maxStrokeDash = parseInt(timerCircleProperties.getPropertyValue("stroke-dasharray"));

const totalTime = 10; // 10 minutes
let timer = null;

let timeLeft = totalTime;

function updateTimer() {
	timerText.innerText = timeLeft;
	const timeCompletedPercent = (timeLeft / totalTime) * 100;
	const strokeDash = (timeCompletedPercent / 100) * maxStrokeDash;
	timerCircle.style.strokeDashoffset = maxStrokeDash - strokeDash;
}

function startTimer() {
	timer = setInterval(() => {
		if (timeLeft === 0) {
			stopTimer();
			return;
		}
		timeLeft--;
		updateTimer();
	}, 1000);
}

function stopTimer() {
	clearInterval(timer);
	timerCircle.style.strokeDashoffset = 0;
	resetTimer();
}

function resetTimer() {
	timeLeft = totalTime;
	startTimer();
}

startTimer();

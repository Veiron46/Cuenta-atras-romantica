let seconds = 10;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  const messageElement = document.getElementById('message');
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerElement.textContent = `${mins}:${secs}`;

  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timerInterval);
    messageElement.classList.add('visible');
    document.getElementById('love-audio').play();
    startHearts();
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

function startHearts() {
  setInterval(createHeart, 300);
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
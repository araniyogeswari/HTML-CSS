const gameArea = document.getElementById("gameArea");
const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let ballSpeed = 3;
let ballX = 200;
let ballY = 0;
let paddleX = 170;
let animationId = null;
let isRunning = false;
function updatePaddle() {
  paddle.style.left = paddleX + "px";
}

function updateBall() {
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

updateBall();

paddleX = parseInt(window.getComputedStyle(paddle).left, 10) || paddleX;
updatePaddle();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    if (e.key === "ArrowLeft") {
      paddleX = Math.max(0, paddleX - 20);
    } else {
      const maxX = gameArea.clientWidth - paddle.clientWidth;
      paddleX = Math.min(maxX, paddleX + 20);
    }
    updatePaddle();
    return;
  }
  if (!isRunning && (e.code === 'Space' || e.key === ' ')) {
    startGame();
  }
});

function dropBall() {
  if (!isRunning) return;
  ballY += ballSpeed;
  updateBall();

  const paddleTop = gameArea.clientHeight - paddle.clientHeight - 10; // bottom offset
  if (ballY + ball.clientHeight >= paddleTop && ballX + ball.clientWidth/2 > paddleX && ballX + ball.clientWidth/2 < paddleX + paddle.clientWidth) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    resetBall();
  }

  if (ballY > gameArea.clientHeight) {
    resetBall();
  }

  animationId = requestAnimationFrame(dropBall);
}

function resetBall() {
  ballY = 0;
  ballX = Math.floor(Math.random() * (gameArea.clientWidth - ball.clientWidth));
  updateBall();
}

function startGame() {
  if (isRunning) return;
  isRunning = true;
  score = 0;
  scoreDisplay.textContent = "Score: " + score;
  resetBall();
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  restartBtn.disabled = false;
  animationId = requestAnimationFrame(dropBall);
}

startBtn.addEventListener('click', startGame);


function pauseGame() {
  if (!isRunning) return;
  isRunning = false;
  if (animationId) cancelAnimationFrame(animationId);
  animationId = null;
  pauseBtn.disabled = true;
  startBtn.disabled = false;
}

function restartGame() {
  score = 0;
  scoreDisplay.textContent = "Score: " + score;
  resetBall();
  if (!isRunning) startGame();
}

pauseBtn.addEventListener('click', pauseGame);
restartBtn.addEventListener('click', restartGame);

pauseBtn.disabled = true;
restartBtn.disabled = false;

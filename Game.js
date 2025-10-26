const gameArea = document.getElementById('gameArea');
const car = document.getElementById('car');
let carPosition = 180;
let score = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && carPosition > 0) {
    carPosition -= 20;
  } else if (e.key === 'ArrowRight' && carPosition < 360) {
    carPosition += 20;
  }
  car.style.left = carPosition + 'px';
});

function createObstacle() {
  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.left = Math.floor(Math.random() * 360) + 'px';
  obstacle.style.top = '0px';
  gameArea.appendChild(obstacle);

  let obstacleInterval = setInterval(() => {
    let top = parseInt(obstacle.style.top);
    if (top > 600) {
      clearInterval(obstacleInterval);
      gameArea.removeChild(obstacle);
      score++;
    } else {
      obstacle.style.top = top + 5 + 'px';

      // Collision detection
      if (
        top > 520 &&
        parseInt(obstacle.style.left) < carPosition + 40 &&
        parseInt(obstacle.style.left) + 40 > carPosition
      ) {
        alert('💥 Game Over! Your score: ' + score);
        location.reload();
      }
    }
  }, 30);
}

setInterval(createObstacle, 1500);
document.addEventListener('DOMContentLoaded', () => {
    const fox = document.querySelector('.fox');
    const obstacle = document.querySelector('.obstacle');
    const scoreElement = document.querySelector('.score');
  
    let isJumping = false;
    let isGameOver = false;
    let score = 0;
  
    // Jump function
    function jump() {
      if (isJumping) return;
      isJumping = true;
      fox.classList.add('jump');
      setTimeout(() => {
        fox.classList.remove('jump');
        isJumping = false;
      }, 500);
    }
  
    // Check for collision
    function checkCollision() {
      const foxBottom = parseInt(window.getComputedStyle(fox).getPropertyValue('bottom'));
      const foxLeft = fox.offsetLeft;
      const obstacleLeft = obstacle.offsetLeft;
  
      if (obstacleLeft > 0 && obstacleLeft < 120 && foxBottom < 60) {
        isGameOver = true;
        alert('Game Over! Your score: ' + score);
        resetGame();
      }
    }
  
    // Reset the game
    function resetGame() {
      score = 0;
      scoreElement.textContent = 'Score: 0';
      isGameOver = false;
    }
  
    // Increase score
    function increaseScore() {
      if (!isGameOver) {
        score++;
        scoreElement.textContent = 'Score: ' + score;
      }
    }
  
    // Game loop
    setInterval(() => {
      if (!isGameOver) {
        checkCollision();
        increaseScore();
      }
    }, 100);
  
    // Event listeners
    document.addEventListener('keydown', jump);
    document.addEventListener('click', jump);
  });
  
document.addEventListener('DOMContentLoaded', () => {
  // Create rain effect
  const canvas = document.getElementById('rain-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const raindrops = [];

  function createRaindrop() {
    raindrops.push({
      x: Math.random() * canvas.width,
      y: -10,
      length: Math.random() * 20 + 10,
      velocityY: Math.random() * 4 + 4,
    });
  }

  function updateRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach((drop, index) => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      drop.y += drop.velocityY;

      // Remove drops that fall off the screen
      if (drop.y > canvas.height) {
        raindrops.splice(index, 1);
      }
    });
  }

  function animateRain() {
    createRaindrop();
    updateRaindrops();
    requestAnimationFrame(animateRain);
  }

  animateRain();

  // Adjust canvas size on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

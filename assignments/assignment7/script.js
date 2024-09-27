// Function to draw a star
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  return new Promise((resolve) => {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "yellow";
      ctx.fill();
      resolve(); // Resolve the Promise when drawing is done
  });
}

// Main drawing function
async function drawStars() {
  const starCount = parseInt(document.getElementById('starCount').value);
  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');
  const errorMessage = document.getElementById('errorMessage');

  // Clear previous drawings
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  errorMessage.textContent = '';

  // Validate the input
  if (isNaN(starCount) || starCount <= 0) {
      errorMessage.textContent = "Please enter a valid number greater than 0.";
      return;
  }

  // Create an array of promises to draw stars concurrently
  const starPromises = [];
  for (let i = 0; i < starCount; i++) {
      const x = Math.random() * (canvas.width - 50) + 25; // Random x position within canvas
      const y = Math.random() * (canvas.height - 50) + 25; // Random y position within canvas
      starPromises.push(drawStar(ctx, x, y, 5, 15, 7));
  }

  // Await all star drawing promises to complete
  await Promise.all(starPromises);
  console.log("All stars drawn.");
}

// Event listener to trigger star drawing
document.getElementById('drawBtn').addEventListener('click', drawStars);

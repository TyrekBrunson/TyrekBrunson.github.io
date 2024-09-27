document.getElementById('drawBtn').addEventListener('click', function() {
  const starCount = parseInt(document.getElementById('starCount').value);
  const starContainer = document.getElementById('starContainer');
  const errorMessage = document.getElementById('errorMessage');
  const starMessage = document.getElementById('starMessage');

  // Clear any previous stars and messages
  starContainer.innerHTML = '';
  starMessage.textContent = '';
  errorMessage.style.display = 'none';

  // Validate the input
  if (isNaN(starCount) || starCount <= 0) {
      errorMessage.textContent = "Please enter a valid number greater than 0.";
      errorMessage.style.display = 'block';
      return;
  }

  // Draw stars
  for (let i = 1; i <= starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * (starContainer.clientHeight - 20) + 'px';
      star.style.left = Math.random() * (starContainer.clientWidth - 20) + 'px';
      star.dataset.starNumber = i;

      // Event listener for clicking on a star
      star.addEventListener('click', function() {
          starMessage.textContent = `You clicked on star number ${this.dataset.starNumber}`;
      });

      starContainer.appendChild(star);
  }
});

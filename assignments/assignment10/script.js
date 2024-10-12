document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
  const iceCreams = await response.json();
  const container = document.querySelector('.ice-cream-container');

  iceCreams.forEach(iceCream => {
      const iceCreamDiv = document.createElement('div');
      iceCreamDiv.classList.add('ice-cream');

      const img = document.createElement('img');
      img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
      img.alt = iceCream.name;

      const overlay = document.createElement('div');
      overlay.classList.add('ice-cream-overlay');
      overlay.innerText = iceCream.name;

      iceCreamDiv.appendChild(img);
      iceCreamDiv.appendChild(overlay);
      container.appendChild(iceCreamDiv);
  });
});

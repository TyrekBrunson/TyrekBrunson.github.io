// Bird class
class Bird {
  constructor(name, image, size, lifespan, food, habitat, fact) {
      this.name = name;
      this.image = image;
      this.size = size;
      this.lifespan = lifespan;
      this.food = food;
      this.habitat = habitat;
      this.fact = fact;
  }

  // Method to return only the title and image for the bird
  getSection() {
      return `
      <div class="bird-box" onclick="showModal('${this.name}')">
          <h3>${this.name}</h3>
          <img src="${this.image}" alt="${this.name}">
      </div>`;
  }

  // Method to return the expanded information for the bird
  getExpandedSection() {
      return `
      <h2>${this.name}</h2>
      <img src="${this.image}" alt="${this.name}">
      <p>Size: ${this.size}</p>
      <p>Lifespan: ${this.lifespan}</p>
      <p>Food: ${this.food}</p>
      <p>Habitat: ${this.habitat}</p>
      <p>Interesting Fact: ${this.fact}</p>`;
  }
}

// Create an array of Bird objects
const birds = [
  new Bird('Hummingbird', 'images/Hummingbird.png', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', 'They’re nicknamed "Hummers"'),
  new Bird('Blue Jay', 'images/BlueJay.png', '10-12 inches', '7 years', 'Insects, seeds', 'Forests', 'They can mimic the calls of hawks'),
  new Bird('Cardinal', 'images/Cardinal.png', '9 inches', '3 years', 'Seeds, insects', 'Woodlands', 'They are known for their bright red color'),
  new Bird('Robin', 'images/Robin.png', '10 inches', '2 years', 'Worms, insects', 'Gardens', 'They have a distinctive red breast')
];

// Function to display birds in the DOM
function displayBirds() {
  const birdContainer = document.getElementById('birdContainer');
  birds.forEach(bird => {
      birdContainer.innerHTML += bird.getSection();
  });
}

// Function to show modal dialog with bird details
function showModal(birdName) {
  const bird = birds.find(b => b.name === birdName);
  document.getElementById('birdTitle').innerText = bird.name;
  document.getElementById('birdImage').src = bird.image;
  document.getElementById('birdSize').innerText = bird.size;
  document.getElementById('birdLifespan').innerText = bird.lifespan;
  document.getElementById('birdFood').innerText = bird.food;
  document.getElementById('birdHabitat').innerText = bird.habitat;
  document.getElementById('birdFact').innerText = bird.fact;
  document.getElementById('birdModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('birdModal').style.display = 'none';
}

// Initialize the page by displaying birds
displayBirds();

// Event listener to close the modal
document.querySelector('.close').addEventListener('click', closeModal);

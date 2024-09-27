// Array of images and their descriptions
const images = {
  "birthday.jpg": { title: "Party Time", description: "A cute figure with a party hat" },
  "clown.jpg": { title: "Formal Event", description: "Stickman dressed for a formal occasion" },
  "rain.jpg": { title: "Rainy Day", description: "Holding an umbrella for a rainy day" },
  "read.jpg": { title: "Studying", description: "A figure holding a book, ready to study" },
  "shovel.jpg": { title: "Gardening", description: "Enjoying gardening with a shovel" },
  "work.jpg": { title: "Relaxing", description: "Relaxing while using a laptop" }
};

// Function to load images dynamically
function loadImages() {
  const gallery = document.getElementById('image-gallery');

  for (const [filename, details] of Object.entries(images)) {
      const imgElement = document.createElement('img');
      // Correct relative path for loading images
      imgElement.src = 'images/' + filename;
      imgElement.alt = details.title;
      imgElement.addEventListener('click', () => displayDescription(details.title, details.description));
      gallery.appendChild(imgElement);
  }
}

// Function to display description on click
function displayDescription(title, description) {
  document.getElementById('image-description-title').innerText = title;
  document.getElementById('image-description').innerText = description;
}

// Load the images on page load
window.onload = loadImages;

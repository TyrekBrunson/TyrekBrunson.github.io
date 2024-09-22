// Handle exercise switching
const colorSliderSection = document.getElementById("color-slider");
const pictureChooserSection = document.getElementById("picture-chooser");

// Initially show Color Slider and hide Picture Chooser
colorSliderSection.classList.remove("hidden");
pictureChooserSection.classList.add("hidden");

document.getElementById("exercise-1").onclick = (event) => {
  event.preventDefault();
  colorSliderSection.classList.remove("hidden"); // Show Color Slider
  pictureChooserSection.classList.add("hidden"); // Hide Picture Chooser
};

document.getElementById("exercise-2").onclick = (event) => {
  event.preventDefault();
  pictureChooserSection.classList.remove("hidden"); // Show Picture Chooser
  colorSliderSection.classList.add("hidden"); // Hide Color Slider
};

// Get the slider and slider message elements
const slider = document.getElementById("slider");
const sliderMessage = document.getElementById("slider-message");

// Slider input event to change the background color of the color-slider container
slider.oninput = () => {
  const redValue = slider.value;
  
  // Update the background color of the color-slider container
  colorSliderSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

  // Update the message based on the slider value
  if (redValue < 85) {
    sliderMessage.textContent = "Chill";
  } else if (redValue < 170) {
    sliderMessage.textContent = "Getting Warm";
  } else {
    sliderMessage.textContent = "Red Hot!";
  }
};

// Picture Chooser functionality
const buttons = document.querySelectorAll("#picture-chooser button");
const image = document.getElementById("chosen-image");

buttons.forEach(button => {
  button.onclick = (event) => {
    const size = event.target.getAttribute("data-size");
    image.src = `https://picsum.photos/${size}`;
  };
});

// Toggle Navigation Menu for mobile
const toggleNav = document.getElementById("toggle-nav");
const navItems = document.getElementById("nav-items");
const arrow = document.getElementById("arrow");

toggleNav.onclick = () => {
  navItems.classList.toggle("active");

  // Update the arrow direction based on the visibility of the nav items
  if (navItems.classList.contains("active")) {
    arrow.textContent = "▲"; // Arrow points up when exercises are visible
  } else {
    arrow.textContent = "▼"; // Arrow points down when exercises are hidden
  }
};
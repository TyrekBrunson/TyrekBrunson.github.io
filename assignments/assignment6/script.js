// Toggle Navigation Menu
const toggleNav = document.getElementById("toggle-nav");
const navItems = document.getElementById("nav-items");
const arrow = document.getElementById("arrow");

// Handle exercise switching
const colorSliderSection = document.getElementById("color-slider");
const pictureChooserSection = document.getElementById("picture-chooser");

document.getElementById("exercise-1").onclick = (event) => {
  event.preventDefault();
  colorSliderSection.classList.remove("hidden");
  pictureChooserSection.classList.add("hidden");
};

document.getElementById("exercise-2").onclick = (event) => {
  event.preventDefault();
  pictureChooserSection.classList.remove("hidden");
  colorSliderSection.classList.add("hidden");
};

// Color Slider functionality
const slider = document.getElementById("slider");
const sliderMessage = document.getElementById("slider-message");

slider.oninput = () => {
  const redValue = slider.value;
  document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
  
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

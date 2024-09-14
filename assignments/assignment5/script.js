let count = 0;

function increaseCount() {
    count++;
    document.getElementById("counter").innerText = count;
}

function refreshImage() {
    location.reload();  // This refreshes the entire page to get a new image
}

function moveSquare() {
    let sliderValue = document.getElementById("slider").value;
    let square = document.getElementById("square");
    square.style.left = `${sliderValue}%`;
}

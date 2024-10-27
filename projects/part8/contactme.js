// Function to handle the form submission asynchronously
const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form element and feedback message elements
    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    // Prepare form data for submission
    const formData = new FormData(form);
    formData.append("access_key", "b6c18ec8-be9d-42a5-8e6e-316045dabb4e");

    // Display loading animation
    startLoadingAnimation();

    try {
        // Send the form data to Web3Forms using fetch
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        // Stop loading animation and handle the response
        stopLoadingAnimation();
        
        if (response.ok) {
            displayFeedback("Thank you! Your message has been sent.", "success");
            form.reset(); // Reset form fields after successful submission
            toggleOtherInput(true); // Hide "Other" input if it was visible
        } else {
            throw new Error("Form submission failed");
        }
    } catch (error) {
        stopLoadingAnimation();
        displayFeedback("There was an error submitting your form. Please try again.", "error");
    }
};

// Variables for controlling the loading animation interval
let loadingInterval;
let loadingTextIndex = 0;
const loadingMessages = ["Loading.", "Loading..", "Loading..."];

// Function to start the loading animation
const startLoadingAnimation = () => {
    const result = document.getElementById("result");
    result.style.color = "black"; // Default color for loading message

    // Set interval to update loading message
    loadingInterval = setInterval(() => {
        result.innerHTML = loadingMessages[loadingTextIndex];
        loadingTextIndex = (loadingTextIndex + 1) % loadingMessages.length;
    }, 500); // Update every 500ms
};

// Function to stop the loading animation
const stopLoadingAnimation = () => {
    clearInterval(loadingInterval);
    loadingTextIndex = 0; // Reset index for next use
};

// Function to display feedback messages
const displayFeedback = (message, type) => {
    const result = document.getElementById("result");
    result.innerHTML = message;
    result.style.color = type === "success" ? "green" : type === "error" ? "red" : "black";
};

// Function to toggle "Other" input field visibility
const toggleOtherInput = (hide = false) => {
    const otherInput = document.getElementById("otherSource");
    otherInput.style.display = hide ? "none" : "block";
    otherInput.required = !hide;
};

// Attach event listener to the form submission
document.getElementById("contactForm").onsubmit = handleFormSubmit;

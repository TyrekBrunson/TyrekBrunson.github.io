// Function to handle the form submission asynchronously
const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form element and feedback message elements
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Prepare form data for submission
    const formData = new FormData(form);
    formData.append("access_key", "b6c18ec8-be9d-42a5-8e6e-316045dabb4e");

    try {
        // Display loading message
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
        const result = document.getElementById("result");
        result.innerHTML = "Sending...";

        // Send the form data to Web3Forms using fetch
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        // Handle the response based on success or failure
        if (response.ok) {
            result.innerHTML = ""; // Clear the loading message
            successMessage.style.display = "block";
            form.reset(); // Reset form fields after successful submission
            toggleOtherInput(true); // Hide "Other" input if it was visible
        } else {
            throw new Error("Form submission failed");
        }
    } catch (error) {
        result.innerHTML = ""; // Clear the loading message
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }
};

// Function to toggle "Other" input field visibility
const toggleOtherInput = (hide = false) => {
    const otherInput = document.getElementById("otherSource");
    if (hide) {
        otherInput.style.display = "none";
        otherInput.required = false;
    } else {
        otherInput.style.display = otherInput.style.display === "none" ? "block" : "none";
        otherInput.required = otherInput.style.display === "block";
    }
};

// Attach event listener to the form submission
document.getElementById("contactForm").onsubmit = handleFormSubmit;

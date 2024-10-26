// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
            toggleOtherInput(true); // Hide the "Other" input if it was shown
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

// Function to toggle "Other" input field based on the "Other" radio button selection
function toggleOtherInput(hide = false) {
    const otherInput = document.getElementById('otherSource');
    if (hide) {
        otherInput.style.display = 'none';
    } else {
        otherInput.style.display = otherInput.style.display === 'none' ? 'block' : 'none';
    }
}


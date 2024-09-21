document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('mouseenter', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate an admin check
    const isAdmin = true; // Change this flag to control access

    if (!isAdmin) {
        alert("You do not have access to this page.");
        window.location.href = "index.html"; // Redirect non-admins to the home page
    }
});

function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
}

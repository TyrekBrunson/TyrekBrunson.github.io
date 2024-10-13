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

document.addEventListener("DOMContentLoaded", function() {
    const jsonUrl = "https://raw.githubusercontent.com/TyrekBrunson/TyrekBrunson.github.io/main/projects/part7/timeline.json";  // Update with the raw GitHub URL

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => displayTimeline(data))
        .catch(error => console.error('Error loading JSON:', error));

    function displayTimeline(events) {
        const timelineContainer = document.getElementById('timeline-container');
        timelineContainer.innerHTML = '';  // Clear the container before adding new content

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('timeline-item');
            
            // Create inner HTML for each event
            eventDiv.innerHTML = `
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-content">
                    <img src="images/${event.img_name}" alt="${event.event}">
                    <h3>${event.event}</h3>
                    <p>${event.description}</p>
                    <ul>
                        ${event.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            `;

            // Append the event to the container
            timelineContainer.appendChild(eventDiv);
        });
    }
});


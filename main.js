// Define functions first
function highlightActivePage() {
    const currentPage = window.location.pathname;

    // Add the "active" class to the corresponding nav link
    if (currentPage.includes('index.html') || currentPage === '/') {
        document.getElementById('home-link').classList.add('active');
    } else if (currentPage.includes('company.html')) {
        document.getElementById('company-link').classList.add('active');
    } else if (currentPage.includes('cladding.html')) {
        document.getElementById('cladding-link').classList.add('active');
    } else if (currentPage.includes('contact.html')) {
        document.getElementById('contact-link').classList.add('active');
    } else if (currentPage.includes('worktops.html')) {
        document.getElementById('worktops-link').classList.add('active');
    } else if (currentPage.includes('tables.html')) {
        document.getElementById('tables-link').classList.add('active');
    }
}

function initializeSignupForm() {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('emailInput');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Send the form data to the Google Apps Script
            fetch(this.action, {
                method: 'POST',
                body: new URLSearchParams(new FormData(this))
            })
            .then(response => {
                if (response.ok) {
                    emailInput.value = 'Thank you for signing up!'; // Show thank-you message
                    emailInput.style.color = '#000'; // Set text color to black (or any color you prefer)
                    emailInput.style.backgroundColor = '#fff'; // Keep background white
                } else {
                    console.error('Error:', response.statusText);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    } else {
        console.error('Signup form not found!');
    }
}

// Now, the main DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the header content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            highlightActivePage(); // Highlight active page after header is loaded
        })
        .catch(error => console.error('Error loading header:', error));

    // Fetch and load the footer content
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            initializeSignupForm(); // Initialize the signup form after footer is loaded
        })
        .catch(error => console.error('Error loading footer:', error));

    // Sticky header functionality using jQuery
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $("body").addClass("sticky-header");
        } else {
            $("body").removeClass("sticky-header");
        }
    });
});

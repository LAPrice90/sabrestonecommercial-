document.addEventListener('DOMContentLoaded', function () {
    // Fetch and load the header content
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        
        // Now, run the script to highlight the active page
        highlightActivePage();
    });

    // Function to highlight the active page
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

});

$(document).ready(function () {
    $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-header");
      } else {
        $("body").removeClass("sticky-header");
      }
    });
  });
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Toggle a class to close the navbar on mobile
        navbar.classList.remove('active'); // Adjust this based on your CSS class name
    });
});

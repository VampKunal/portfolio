
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            console.log(`Target ID: ${targetId}`); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`Scrolling to: ${targetElement}`); 
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.log(`No element found with ID: ${targetId}`);
            }
        });
    });
});

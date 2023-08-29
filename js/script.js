window.addEventListener('load', function () {
    const maintenanceBanner = document.getElementById('maintenance-banner');
    maintenanceBanner.style.display = 'block';

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const logo = document.querySelector('.logo');
    const fullSize = '5rem'; // Full size on hover
    const basicSize = '4rem'; // Basic size

    logo.style.fontSize = basicSize;

    logo.addEventListener('mouseover', function () {
        logo.style.transition = 'font-size 0.2s'; // Adding a transition for smooth effect
        logo.style.fontSize = fullSize;
    });

    logo.addEventListener('mouseout', function () {
        logo.style.fontSize = basicSize;
    });

    // Additional JavaScript functionality if needed
});

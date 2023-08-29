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

    logo.addEventListener('mouseover', function () {
        logo.classList.add('logo-hover'); // Add class for hover effect
    });

    logo.addEventListener('mouseout', function () {
        logo.classList.remove('logo-hover'); // Remove class for normal size
    });

    // Additional JavaScript functionality if needed
});

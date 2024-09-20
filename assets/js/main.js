// Toggle Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal
ScrollReveal().reveal('.home__data', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.about__container', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.skills__container', { origin: 'right', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.work__container', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.contact__container', { origin: 'top', distance: '50px', duration: 1000, delay: 200 });

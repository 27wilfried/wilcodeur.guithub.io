let menuIcon = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
    menuIcon.classList.toggle('bx-x');
};

/* scrool section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Supprimer les classes lors du clic sur un lien de navigation uniquement lorsque la largeur de l'écran est de 600 pixels ou moins
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 600) { // Vérifie la largeur de l'écran
            menuIcon.classList.remove('bx-x');
            navbar.style.display = 'none';
        }
    });
});





ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact, form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Développeur web Full-Stack', 'Spécialiste Wordpress', 'Rédacteur Web'],
    typedSpeed: 100,
    backSpeed: 100,
    backSDelay: 1000,
    loop: true
})
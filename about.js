// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navLinks.classList.toggle('active');
});

// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// Fade in the box when it scrolls into view
function handleAboutBoxFade() {
  const box = document.getElementById('about-box');
  const triggerPoint = window.innerHeight * 0.85;
  const boxTop = box.getBoundingClientRect().top;

  if (boxTop < triggerPoint) {
    box.classList.add('visible');
  }
}

window.addEventListener('scroll', handleAboutBoxFade);
window.addEventListener('load', handleAboutBoxFade);

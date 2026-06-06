const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    card.classList.toggle('open');
    button.textContent = card.classList.contains('open') ? 'Hide Details' : 'View Details';
  });
});
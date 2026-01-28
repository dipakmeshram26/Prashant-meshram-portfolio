/* Mobile Menu */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

/* Typing Effect */
const titles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
let index = 0;
const typingText = document.getElementById('typingText');

function updateTitle() {
  typingText.textContent = titles[index];
  index = (index + 1) % titles.length;
}
updateTitle();
setInterval(updateTitle, 3000);

/* Scroll Animations */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.dataset.animation) {
      entry.target.classList.add('animate__animated', entry.target.dataset.animation);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el));

/* Footer Year */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* Scroll to top */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

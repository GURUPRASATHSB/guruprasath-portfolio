// Highlight nav link based on which section is visible
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
let currentSection = '';
sections.forEach(sec => {
if (window.scrollY >= sec.offsetTop - 100) {
currentSection = sec.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === '#' + currentSection) {
link.classList.add('active'); // bold the current section link
}
});
}); 

// Animate skill progress bars when they come into view
const skillBars = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const bar = entry.target;
const targetWidth = bar.getAttribute('data-width');
bar.style.width = targetWidth + '%'; // animate to the target %
}
});
}, { threshold: 0.3 });
skillBars.forEach(bar => observer.observe(bar));
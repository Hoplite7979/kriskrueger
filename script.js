// Highlight the correct nav link based on scroll position.
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function setActive() {
  let current = '';
  // Walk through each section; the last one whose top edge has passed 120px
  // above the viewport is considered the active section.
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  // Toggle the "active" class on whichever nav link matches the current section.
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// Re-run on every scroll event and once on load to set the initial state.
window.addEventListener('scroll', setActive, { passive: true });
setActive();

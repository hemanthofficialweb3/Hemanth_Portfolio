// Small JS for typing animation and page niceties.
// Place this file at /assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {
  // Typed text
  const typedEl = document.getElementById('typed');
  const text = "AI & ML Enthusiast | Hackathon Projects Creator";
  let i = 0;

  function type() {
    if (i <= text.length) {
      typedEl.textContent = text.slice(0, i) + (i % 2 === 0 ? '' : '▍');
      i++;
      setTimeout(type, 45);
    } else {
      typedEl.textContent = text; // final state without cursor
    }
  }
  type();

  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Alert on form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Tank-you! message you have send.');
});

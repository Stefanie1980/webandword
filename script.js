document.addEventListener("DOMContentLoaded", function () {
  // Detect site language from the <html> tag
  const language = document.documentElement.lang;

  // Contact form code
  const form = document.querySelector('.contact-form');
  const confirmation = document.getElementById('confirmation-message');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      confirmation.classList.remove('error');
      confirmation.classList.add('visible');

      // Choose message based on language
      if (language === 'de') {
        confirmation.textContent = 'Vielen Dank! Ihre Nachricht wurde verschickt.';
      } else {
        confirmation.textContent = 'Thank you! Your message has been sent.';
      }

    } else {
      confirmation.classList.add('visible', 'error');

      confirmation.textContent = (language === 'de')
        ? 'Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.'
        : 'Oops! Something went wrong. Please try again later.';
    }
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});

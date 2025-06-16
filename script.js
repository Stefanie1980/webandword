document.addEventListener("DOMContentLoaded", function () {
  // Contact form code
  const form = document.querySelector('.contact-form');
  const confirmation = document.getElementById('confirmation-message');

  form.addEventListener('submit', async function(e) {
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
      confirmation.style.display = 'block';
      confirmation.style.color = 'green';  // Reset color if needed
      confirmation.textContent = 'Vielen Dank! Ihre Nachricht wurde verschickt.';
    } else {
      confirmation.textContent = 'Oops! Something went wrong. Please try again later.';
      confirmation.style.color = 'red';
      confirmation.style.display = 'block';
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

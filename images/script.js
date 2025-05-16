<script>
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
</script>


<script>
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
    } else {
      confirmation.textContent = 'Oops! Something went wrong. Please try again later.';
      confirmation.style.color = 'red';
      confirmation.style.display = 'block';
    }
  });
</script>

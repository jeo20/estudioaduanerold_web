// =========================
// Navbar scroll effect
// =========================
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// =========================
// EmailJS - Envío de formulario
// =========================
(function () {
  emailjs.init("xVwdbB46eyW5LrqW4");
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formStatus.innerHTML = '<span class="text-info">Enviando mensaje...</span>';
    formStatus.className = '';

    emailjs.sendForm('service_lpndc49', 'template_qj19ozw', this).then(
      function () {
        formStatus.innerHTML = 'Mensaje enviado correctamente. Nos contactaremos a la brevedad.';
        formStatus.className = 'success';
        contactForm.reset();
      },
      function (error) {
        console.error('EmailJS error:', error);
        formStatus.innerHTML = 'Error al enviar el mensaje. Intente nuevamente.';
        formStatus.className = 'error';
      }
    );
  });
}

// =========================
// Smooth scroll para anclas
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// ===========================================
// NAVBAR SCROLL EFFECT
// ===========================================
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===========================================
// MOBILE MENU TOGGLE
// ===========================================
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===========================================
// EMAILJS - CONTACTO FORM
// ===========================================
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
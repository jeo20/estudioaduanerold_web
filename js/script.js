document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.8rem 8%";
            navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        } else {
            navbar.style.padding = "1.2rem 8%";
            navbar.style.boxShadow = "none";
        }
    });

    const form = document.querySelector('.contacto-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.');
            form.reset();
        });
    }
});
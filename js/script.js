document.addEventListener("DOMContentLoaded", function () {

  /* ======================
     AOS INIT
  ====================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true
    });
  }

  /* ======================
     GSAP ANIMATIONS
  ====================== */
  if (typeof gsap !== "undefined") {
    gsap.from(".navbar", { y: -80, opacity: 0, duration: 0.8, ease: "power2.out" });

    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero p");
    const heroBtn = document.querySelector(".hero .btn");

    if (heroTitle) gsap.from(heroTitle, { y: 40, opacity: 0, duration: 1, delay: 0.3 });
    if (heroText) gsap.from(heroText, { y: 40, opacity: 0, duration: 1, delay: 0.6 });
    if (heroBtn) gsap.from(heroBtn, { y: 40, opacity: 0, duration: 1, delay: 0.9 });
  }

  /* ======================
     EMAILJS FORM
  ====================== */
  if (typeof emailjs !== "undefined") {
    emailjs.init("xVwdbB46eyW5LrqW4");

    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const status = document.getElementById("form-status");
        status.innerHTML = "Enviando mensaje...";

        emailjs.sendForm("service_lpndc49", "template_qj19ozw", this)
          .then(function () {
            status.innerHTML = "<span class='text-success'>Mensaje enviado correctamente.</span>";
            form.reset();
          }, function (error) {
            status.innerHTML = "<span class='text-danger'>Error al enviar el mensaje. Intente nuevamente.</span>";
            console.error("EmailJS error:", error);
          });
      });
    }
  }

});

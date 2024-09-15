// JavaScript para actualizar el año en el copyright
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Mostrar pantalla de carga y redirigir después de 2 segundos
function showLoadingScreen(event) {
    event.preventDefault();  // Previene la navegación inmediata
    document.getElementById('loading-screen').style.display = 'block';
    
    setTimeout(function() {
        window.location.href = event.target.href;
    }, 2000);
}

// Agregar el evento showLoadingScreen a todos los enlaces del menú de navegación
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', showLoadingScreen);
});

// Actualizar el contador de caracteres en la página de contacto
const messageField = document.getElementById('message');
const charCount = document.getElementById('charCount');
if (messageField && charCount) {
    messageField.addEventListener('input', function() {
        const currentLength = messageField.value.length;
        charCount.textContent = `${currentLength}/500 caracteres`;
    });
}

// Validación del email en el formulario de contacto
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Enviar el formulario de contacto con EmailJS
function sendEmail(event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    emailjs.sendForm('service_4lisjg5', 'template_pdt1o0q', event.target)
        .then(function(response) {
            alert("Correo enviado exitosamente!");
        }, function(error) {
            alert("Hubo un error al enviar el correo: " + error);
        });
}

// Inicializa EmailJS
(function() {
    emailjs.init("C0kE4FBQADKTix4py");
})();

// Agregar el evento de envío al formulario de contacto si existe
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

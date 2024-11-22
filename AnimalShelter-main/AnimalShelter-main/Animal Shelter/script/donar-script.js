document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Modal de donación
    const modal = document.getElementById('donation-modal');
    const donationButtons = document.querySelectorAll('.btn-donate');
    const closeButton = document.querySelector('.close');

    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.getAttribute('data-amount');
            if (amount === 'custom') {
                const customAmount = prompt('Ingresa la cantidad que deseas donar:');
                if (customAmount && !isNaN(customAmount)) {
                    openModal(customAmount);
                }
            } else {
                openModal(amount);
            }
        });
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function openModal(amount) {
        modal.style.display = 'block';
        // Aquí puedes agregar lógica para manejar el monto de la donación
        console.log(`Monto de donación: $${amount}`);
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Formulario de inicio de sesión
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión y el proceso de pago
        alert('Inicio de sesión simulado. En una implementación real, aquí se procesaría el pago.');
        closeModal();
    });

    // Animaciones al hacer scroll
    const animatedElements = document.querySelectorAll('.donation-card, .impact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});
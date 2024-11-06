document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const petCards = document.querySelectorAll('.pet-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const parent = button.closest('.filter');
            
            // Toggle active class
            parent.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter pet cards
            petCards.forEach(card => {
                const size = card.getAttribute('data-size');
                const age = card.getAttribute('data-age');
                
                if (filter === size || filter === age) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
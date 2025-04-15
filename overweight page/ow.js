// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const exerciseCards = document.querySelectorAll('.exercise-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Hide all exercise cards
            exerciseCards.forEach(card => {
                card.style.display = 'none';
            });

            // Show only cards with matching category
            document.querySelectorAll(`.exercise-card[data-category="${category}"]`).forEach(card => {
                card.style.display = 'block';
            });
        });
    });
})

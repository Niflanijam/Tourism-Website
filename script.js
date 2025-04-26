document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.form-control[type="search"]');
    const cardContainer = document.querySelector('.row'); // Select the row containing the cards
    const allCards = document.querySelectorAll('.col'); // Select all card columns
    const initialColumnCount = getComputedStyle(cardContainer).getPropertyValue('grid-template-columns').split(' ').length; // Get initial number of columns

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let visibleCardCount = 0;

        allCards.forEach(col => {
            const card = col.querySelector('.card');
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            const cardText = card.querySelector('.card-text').textContent.toLowerCase();

            if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                col.style.display = ''; 
                visibleCardCount++;
            } else {
                col.style.display = 'none'; 
            }
        });

        
        cardContainer.className = 'row g-4'; 
        if (visibleCardCount > 0) {
            if (visibleCardCount === 1) {
                cardContainer.classList.add('row-cols-1');
            } else if (visibleCardCount === 2) {
                cardContainer.classList.add('row-cols-1', 'row-cols-md-2');
            } else if (visibleCardCount >= 3) {
                cardContainer.classList.add('row-cols-1', 'row-cols-md-' + initialColumnCount);
            }
        } else {

            col.style.display = 'none'; 

            
        }
    });
});

















































  

















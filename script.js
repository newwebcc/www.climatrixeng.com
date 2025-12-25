const cards = document.querySelectorAll('.contact-card');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        popupText.textContent = card.getAttribute('data-info');
        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => { popup.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target===popup){popup.style.display='none';} });

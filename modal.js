// JavaScript for navbar functionality

// Example: Toggle navbar for mobile
const modalTrigger = document.getElementById('modal-trigger');
const modalCloseBtn = document.getElementById('modal-close');
const modal = document.getElementById('modal');

modalTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

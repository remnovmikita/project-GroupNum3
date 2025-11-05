const OpenBtnMenu = document.querySelector('.subscribe-btn');
const modalMenu = document.querySelector('.modal');
const CloseMdMenu = document.querySelector('.success-btn-close');
const CloseMdMenutwo = document.querySelector('.modal-close-btn');

OpenBtnMenu.addEventListener('click', () => {
    modalMenu.classList.add('is-open');
});
CloseMdMenu.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});
CloseMdMenutwo.addEventListener('click', () => {
    modalMenu.classList.remove('is-open');
});
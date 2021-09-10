'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModals = document.querySelectorAll('.show-modal');


console.log(btnShowModals);

function openModal() {
    console.log('Button Clicked: ');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

btnShowModals.forEach(button => button.addEventListener('click', openModal));

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('.hidden'))
            closeModal();
    }
})


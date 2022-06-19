const modalContainer = document.querySelector('.modal-window-container');
const modalWindow = document.querySelector('.modal-window');
const button = document.getElementById('open-form');
const backButton = document.getElementById('back-btn');

const toggleForm = (isOpenWindow) => {
    modalContainer.style.display = isOpenWindow ? 'flex' : 'none';
    if (!isOpenWindow) {
        const inputs = modalContainer.querySelectorAll('input');
        inputs.forEach((input) => input.value = '');
        const errors = modalContainer.querySelectorAll('.inputs > span');
        errors.forEach((error) => error.style.display = 'none');
        modalContainer.querySelectorAll('.input-valid')
            .forEach(el => el.classList.remove('input-valid'));
    }
}

button.addEventListener('click', () => toggleForm(true));
modalContainer.addEventListener('click', () => toggleForm(false));
modalWindow.addEventListener('click', (e) => e.stopPropagation());
backButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm(false);
});

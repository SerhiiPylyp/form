const toggleForm = (isOpenWindow) => {
    const modalWindow = document.querySelector('.modal-window-container');
    modalWindow.style.display = isOpenWindow ? 'flex' : 'none';
    if (!isOpenWindow) {
        const inputs = modalWindow.querySelectorAll('input');
        inputs.forEach((input) => input.value = '');
        const errors = modalWindow.querySelectorAll('.inputs>span');
        errors.forEach((error) => error.style.display = 'none');
        modalWindow.querySelectorAll('.input-valid').forEach(el => el.classList.remove('input-valid'));
    }
}

const button = document.getElementById('open-form');
button.addEventListener('click', () => toggleForm(true));

const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm(false);
});

const modalContainer = document.querySelector('.modal-window-container');
modalContainer.addEventListener('click', () => toggleForm(false));

const modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', (e) => e.stopPropagation());

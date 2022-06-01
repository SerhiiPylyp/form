const toggleForm = (isOpenWindow) => {
    const modalWindow = document.querySelector('.modal-window-container');
    modalWindow.style.display = isOpenWindow ? 'flex' : 'none';
    if (!isOpenWindow) {
        const inputs = modalWindow.querySelectorAll('input');
        inputs.forEach((input) => input.value = '');
    }
}

const button = document.getElementById('open-form');
button.addEventListener('click', () => toggleForm(true));

const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', () => toggleForm(false));

const modalContainer = document.querySelector('.modal-window-container');
modalContainer.addEventListener('click', () => toggleForm(false));

const modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', (e) => e.stopPropagation());

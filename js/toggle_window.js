const toggleForm = (isOpenWindow) => {
    const modalWindow = document.querySelector('.modal-window-container');
    modalWindow.style.display = isOpenWindow ? 'flex' : 'none';
}

const button = document.getElementById('open-form');
button.addEventListener('click', () => toggleForm(true));

const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', () => toggleForm(false));

const modalContainer = document.getElementById('modal-container');
modalContainer.addEventListener('click', () => toggleForm(false));

const modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', (e) => e.stopPropagation());
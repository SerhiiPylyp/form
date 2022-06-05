const fullName = document.querySelector('#full-name');
const sendBtn = document.querySelector('#send-btn');

const validateFullName = (e) => {
    fullName.value = e.target.value.replace(/[^\p{L} _]/gui, '');
}

const validateForm = (e) => {
    const email = document.querySelector('#mail');
    const tell = document.querySelector('#mobile-number');
    const isValidEmail = !email.value || /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value);
    const operators = ['096', '097', '098', '067', '068','066', '093', '063'];
    const isValidTell = /[0-9]{10}$/.test(tell.value) && operators.includes(tell.value.substring(0,3));
    const isValidName = fullName.value.length >= 3 && fullName.value.length <= 30;
}

fullName.addEventListener('input', validateFullName);
sendBtn.addEventListener('click', validateForm);

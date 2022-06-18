const fullName = document.querySelector('#full-name');
const sendBtn = document.querySelector('#send-btn');
const Email = document.querySelector('#mail');
const Number = document.querySelector('#mobile-number');
const Form = document.querySelector('form');
const nameError = document.querySelector('.error-name');
const emailError = document.querySelector('.error-email');
const numError = document.querySelector('.error-num');

const validateFullName = (e) => {
    fullName.value = e.target.value.replace(/[^\p{L} _]/gui, '').replace(/\s{2,}/g, ' ');
}

const validateForm = (e) => {
    const email = document.querySelector('#mail');
    const tell = document.querySelector('#mobile-number');
    const isValidEmail = !email.value || /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value);
    const operators = ['096', '097', '098', '067', '068','066', '093', '063'];
    const isValidTell = /[0-9]{10}$/.test(tell.value) && operators.includes(tell.value.substring(0,3));
    const isValidName = fullName.value.length >= 3 && fullName.value.length <= 30;
    if (!(isValidName && isValidTell && isValidEmail)) {
        e.preventDefault();
    }
    if (!isValidName) {
        const errorName = document.querySelector('.error-name');
        errorName.style.display = 'flex';
        fullName.parentNode.classList.remove('input-valid');
    }
    else {
        fullName.parentNode.classList.add('input-valid');
    }
    if (!isValidTell) {
        const errorNum = document.querySelector('.error-num');
        errorNum.style.display = 'flex';
        Number.parentNode.classList.remove('input-valid');
    }
    else{
    Number.parentNode.classList.add('input-valid');
    }
    if (!isValidEmail) {
        const errorEmail = document.querySelector('.error-email');
        errorEmail.style.display = 'flex';
        Email.parentNode.classList.remove('input-valid');
    }
    else{
       Email.parentNode.classList.add('input-valid');
    }
}

const onSubmit = () => window.open("/form/success.html");

const closeNameError = () => {
    nameError.style.display = 'none';
    fullName.focus();
}
const closeEmailError = () => {
    emailError.style.display = 'none';
    Email.focus();
}
const closeNumError = () => {
    numError.style.display = 'none';
    Number.focus();
}

fullName.addEventListener('blur', () => fullName.value = fullName.value.trim());
fullName.addEventListener('input', validateFullName);
sendBtn.addEventListener('click', validateForm);
Form.addEventListener('submit', onSubmit);
nameError.addEventListener('click', closeNameError);
emailError.addEventListener('click', closeEmailError);
numError.addEventListener('click', closeNumError);
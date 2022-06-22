if (localStorage.getItem('name')) {
    window.location.href = "/form/success.html";
}

const operators = ['096', '097', '098', '067', '068','066', '093', '063'];
const MIN_NAME = 3;
const MAX_NAME = 30;
const RegExp = {
    allNumbersAndSymbols: /[^\p{L} _]/gui,
    coupleSpaceInRow: /\s{2,}/g,
    numbers: /[0-9]{10}$/,
    emailFormat: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
}
const fullName = document.querySelector('#full-name');
const sendBtn = document.querySelector('#send-btn');
const email = document.querySelector('#mail');
const phone = document.querySelector('#mobile-number');
const form = document.querySelector('form');
const nameError = document.querySelector('.error-name');
const emailError = document.querySelector('.error-email');
const numError = document.querySelector('.error-num');

const validateFullName = (e) => {
    fullName.value = e.target.value.replace(RegExp.allNumbersAndSymbols, '').replace(RegExp.coupleSpaceInRow, ' ');
}

const validateField = (errorSelector, input, isValid) => {
    if (!isValid) {
        document.querySelector(errorSelector).style.display = 'flex';
        input.parentNode.classList.remove('input-valid');
    }
    else input.parentNode.classList.add('input-valid');
}

const validateForm = (e) => {
    const isValidEmail = !email.value || RegExp.emailFormat.test(email.value);
    const isValidPhone = RegExp.numbers.test(phone.value) && operators.includes(phone.value.substring(0,3));
    const isValidName = fullName.value.length >= MIN_NAME && fullName.value.length <= MAX_NAME;
    if (!(isValidName && isValidPhone && isValidEmail)) e.preventDefault();

    validateField('.error-name', fullName, isValidName);
    validateField('.error-num', phone, isValidPhone);
    validateField('.error-email', email, isValidEmail);
}

const onSubmit = () => {
    localStorage.setItem('name', fullName.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
}

const clearError = (error, input) => {
    error.style.display = 'none';
    input.focus();

}


fullName.addEventListener('blur', () => fullName.value = fullName.value.trim());
fullName.addEventListener('input', validateFullName);
sendBtn.addEventListener('click', validateForm);
form.addEventListener('submit', onSubmit);
nameError.addEventListener('click', () => clearError(nameError, fullName));
emailError.addEventListener('click', () => clearError(emailError, email));
numError.addEventListener('click', () => clearError(numError, phone));

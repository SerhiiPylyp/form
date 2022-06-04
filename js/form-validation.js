const fullName = document.querySelector('#full-name');

const validateFullName = (e) => {
    // const value = e.target.value.split('').filter(i => /[A-Za-zА-Яа-яЁё\s_]/.test(i));
    // fullName.value = value.join('');
    fullName.value = e.target.value.replace(/[^\p{L} _]/gui, '');
}

fullName.addEventListener('input', validateFullName);

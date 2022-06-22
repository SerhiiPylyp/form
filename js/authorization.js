if (!localStorage.getItem('name') && window.location.pathname !== "/form/index.html")
    window.location.href = "/form/index.html";

document.querySelector('#value-name').prepend(localStorage.getItem('name'));
document.querySelector('#value-tel').prepend(localStorage.getItem('phone'));
document.querySelector('#value-email').prepend(localStorage.getItem('email'));

const removeData = () => {
    localStorage.clear();
    window.location.href = '/form/index.html';
}

document.querySelector('button').addEventListener('click', removeData);

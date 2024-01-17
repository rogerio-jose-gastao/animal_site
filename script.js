const embrulho = document.querySelector('.embrulho');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector(btnLogin-popup)

registerLink.addEventListener('click', ()=> {
    embrulho.classList.add('active');    
});

loginLink.addEventListener('click', ()=> {
    embrulho.classList.remove('active');    
});

btnPopup.addEventListener('click', ()=> {
    embrulho.classList.add('active');    
});
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');


if(btnPopup){
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
       
    })
}

if(btnClose) {
    btnClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
       
    })
    btnClose.addEventListener('click', ()=> {
        wrapper.classList.remove('ative-popup active');
    })
}


if(registerLink){
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    })
}
if(loginLink){
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    })
}
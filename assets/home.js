const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');
const btnMenu = document.getElementById('btn-menu');
const popUpMenu = document.querySelector('.popup-menu');
const closeMenu = document.querySelector('.icon-close-menu');

if(btnMenu) {
    btnMenu.addEventListener('click', ()=> {
        closeMenu.classList.add('active-close');
    })
}

if(btnMenu) {
    btnMenu.addEventListener('click', ()=> {
        btnMenu.classList.add('active-hidden');
        closeMenu.classList.remove('display-bars');

    })
}

if(closeMenu) {
    closeMenu.addEventListener('click', ()=> {
        popUpMenu.classList.remove('active-menu');
        btnMenu.classList.remove('active-hidden');
        closeMenu.classList.remove('active-close');
        closeMenu.classList.add('display-bars');

    })
}

if (btnMenu) {
    btnMenu.addEventListener('click', ()=> {
        popUpMenu.classList.add('active-menu');
    })
}

// if(btnMenu) {
//     btnMenu.addEventListener('click', ()=> {
//         popUpMenu.classList.remove('active-menu');
//     })
// }

if (btnPopup) {
    btnPopup.addEventListener('click', ()=> {
        popUpMenu.classList.remove('active-menu');
    })
}

if(btnPopup){
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
       
    })
}

if(btnClose) {
    btnClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
       
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
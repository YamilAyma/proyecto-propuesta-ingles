// Login - registro
const btnRegistrar = document.querySelector('#btnRegistrar');
const btnLogin = document.querySelector('#btnLogin');

const formLogin = document.querySelector('#form-login');
const formRegistrar= document.querySelector('#form-registrer');


btnRegistrar.addEventListener('click',()=>{
    formLogin.style.display='none'
    formRegistrar.style.display='flex'
})


btnLogin.addEventListener('click',()=>{
    formLogin.style.display='flex'
    formRegistrar.style.display='none'
})
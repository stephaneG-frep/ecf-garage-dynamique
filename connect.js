const login = document.querySelector('form.Fconnexion');
const signup = document.querySelector('form.Fsignup')
const loginBTN = document.querySelector('label.login')
const signupBTN= document.querySelector('label.signup')
const link = document.querySelector('.compte')
const titreC = document.querySelector('.titreCo')
const titreS = document.querySelector('.titreSi')

signupBTN.onclick = (() => {
  login.style.marginLeft = "-50%";
  titreC.style.marginLeft = "-150%";
});
loginBTN.onclick = (() => {
  login.style.marginLeft = "0%";
  titreC.style.marginLeft = "0%";
});
link.onclick = (() => {
  signupBTN.click();
  return false;
})

const btn = document.querySelector('.burger');
const menu = document.querySelector('nav');
const items = document.querySelectorAll('items');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('menu-active');
})


items.forEach((items) => {
  items.addEventListener('click',() => {
    btn.classList.remove("active");
    menu.classList.remove("menu-active");
  })
})
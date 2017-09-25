const formSignIn = document.querySelector('.form__signin');
const formSignUp = document.querySelector('.form__signup');
const formSwap = document.querySelector('.form__swap');
const formSwapNew = document.querySelector('.form__swap--new');
const formSwapExisting = document.querySelector('.form__swap--existing');

formSwap.addEventListener('click', function() {
  formSignIn.classList.toggle('hide');
  formSignUp.classList.toggle('hide');
  formSwapNew.classList.toggle('hide');
  formSwapExisting.classList.toggle('hide');
});

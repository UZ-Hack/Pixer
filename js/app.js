const menuBar = document.querySelector('.menu__bar');
const menuBurger = document.querySelector('.menu__burger');

function openMenuBar() {
    menuBar.classList.toggle('menu__bar-open');
    menuBurger.classList.toggle('menu__burger-active');
}
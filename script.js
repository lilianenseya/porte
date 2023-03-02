const myHamburgerMenu = document.querySelector('.hamburger-menu');

const menu = document.querySelector('.menu');

myHamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
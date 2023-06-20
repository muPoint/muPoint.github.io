const menuBars = document.querySelector('.menu-bars');
const navMenu = document.querySelector('.nav-menu');

menuBars.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
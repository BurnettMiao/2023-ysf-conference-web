const btnOpen = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-right');

btnOpen.onclick = () => {
  btnOpen.classList.toggle('fa-xmark');
  navMenu.classList.toggle('active');
};

const menu = document.querySelector('.menu_arriba');
const abrir = document.querySelector('.menu-bar');

abrir.addEventListener('click', () => {
    menu.classList.toggle('mover_menu');
})
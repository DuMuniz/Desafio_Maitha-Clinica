const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btnMenu_open');
const btnMenuClose = document.querySelector('.btnMenu_close');

btnMenuOpen.addEventListener('click', () => {
    btnMenuOpen.style.display = 'none';
    btnMenuClose.style.display = 'block';
    menu.classList.add('menu_open');
});

btnMenuClose.addEventListener('click', () => {
    btnMenuClose.style.display = 'none';
    btnMenuOpen.style.display = 'block';
    menu.classList.remove('menu_open');
});
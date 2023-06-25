const dropDowns = document.querySelectorAll('.dropdown');
const selected = document.querySelector('.selected');
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.dropdown__menu');
const options = document.querySelectorAll('.dropdown__menu-item');

dropDowns.forEach(() => {
    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('dropdown__menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('dropdown__menu-open');
        });
    });
});
const BTN_MENU = document.querySelector('#btn_menu');
const BTN_SHOW = document.querySelector('#btn_show');
const BTN_CLOSE = document.querySelector('#btn_close')
const MOBIE_MENU = document.querySelector('#mobie_menu');

BTN_MENU.onclick = function() {
    BTN_SHOW.classList.toggle('hidden')
    BTN_CLOSE.classList.toggle('hidden')
    MOBIE_MENU.classList.toggle('show')
    BTN_MENU.classList.toggle('close')
}
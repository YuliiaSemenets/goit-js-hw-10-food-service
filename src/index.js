import menuTpl from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
const menuList = document.querySelector('.js-menu')

menuList.innerHTML = menu.map(menuTpl).join('')


  checkBox.addEventListener('change', changeTheme)

function changeTheme(e) {
  if (e.target.checked) {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    localStorage.setItem('theme', 'dark')
  }
  else {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    localStorage.setItem('theme', 'light')
}

}

document.addEventListener('DOMContentLoaded', changeBodyTheme)

function changeBodyTheme() {
  if (localStorage.getItem('theme') === 'dark') {
  body.classList.add(Theme.DARK);
  checkBox.checked = true;
} else {
  body.classList.add(Theme.LIGHT);
  checkBox.checked = false;
}
}


const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('wrapper-open') == true) {
    menu.classList.remove('wrapper-open');

  } else {
    menu.classList.add('wrapper-open');
  }
  if (burger.classList.contains('menu-close') == true) {
    burger.classList.remove('menu-close');

  } else {
    burger.classList.add('menu-close');
  }
})

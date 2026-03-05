const menuOpenBtnEl = document.querySelector('.js-open-menu');
const menuCloseBtnEl = document.querySelector('.js-close-menu');
const mobileMenuEl = document.querySelector('.burger-container');
const bodyEl = document.body;
const mobileMenuLinks = mobileMenuEl.querySelectorAll('.burger-list-link');

function toggleMenu() {
  mobileMenuEl.classList.toggle('is-open');
  bodyEl.classList.toggle('no-scroll');
}

function removeMobilMenu() {
  mobileMenuEl.classList.remove('is-open');
  bodyEl.classList.remove('no-scroll');
}

menuOpenBtnEl.addEventListener('click', toggleMenu);
menuCloseBtnEl.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', removeMobilMenu);
});

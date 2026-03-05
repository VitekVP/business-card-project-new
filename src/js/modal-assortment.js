import { assortmentArray } from './assortment/assortment-array';
import { markupCardAssortment } from './assortment/assortment-card';

const modalCloseBtnEl = document.querySelector('.js-close-modal');
const modalBackdropEl = document.querySelector('.backdrop-assortment');
const bodyEl = document.body;
const categoryButtons = document.querySelectorAll('[data-category]');
const assortmentListEl = document.querySelector('.js-assortment-list');

categoryButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    const itemCategory = assortmentArray[category];

    renderAssortment(itemCategory);
    openModalWindow();
  })
);

modalCloseBtnEl.addEventListener('click', closeModalWindow);
modalBackdropEl.addEventListener('click', closeModalWindowOnBackdrop);

function renderAssortment(item) {
  const markupSetAssortment = item
    .map(el => {
      return markupCardAssortment(el);
    })
    .join('');

  assortmentListEl.innerHTML = markupSetAssortment;
}

function openModalWindow() {
  window.addEventListener('keydown', closeModalWindowOnEsc);
  modalBackdropEl.classList.add('show-modal');
  bodyEl.classList.add('no-scroll');
}

function closeModalWindow() {
  window.removeEventListener('keydown', closeModalWindowOnEsc);
  modalBackdropEl.classList.remove('show-modal');
  bodyEl.classList.remove('no-scroll');
}

function closeModalWindowOnBackdrop(e) {
  if (e.currentTarget === e.target) {
    closeModalWindow();
  }
}

function closeModalWindowOnEsc(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}

const formOpenBtlEl = document.querySelector('.js-open-form');
const formCloseBtnEl = document.querySelector('.js-close-form');
const formBackdropEl = document.querySelector('.backdrop-form');
const bodyEl = document.body;
const formEl = document.querySelector('.form');
const btnSubmitEl = document.querySelector('.form-btn');
const toastEl = document.querySelector('.form-toast');

let isSending = false;
let toastTimeout = null;
let closeTimeout = null;

formOpenBtlEl.addEventListener('click', openModalForm);
formCloseBtnEl.addEventListener('click', closeModalForm);
formBackdropEl.addEventListener('click', closeModalFormOnBackdrop);
formEl.addEventListener('submit', handleSubmitForm);

async function handleSubmitForm(e) {
  if (isSending) return;

  e.preventDefault();
  const formObject = e.currentTarget;

  if (!formObject.checkValidity()) {
    formObject.reportValidity();
    return;
  }

  const formData = new FormData(formObject);
  const inputData = Object.fromEntries(formData);

  try {
    isSending = true;

    showLoader();

    await sendMessage(inputData);

    showToast('Дякуємо! Лист успішно надіслано!', 'success');

    formObject.reset();

    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      closeModalForm();
    }, 4000);
  } catch (error) {
    showToast('Сталася помилка. Спробуйте знову.', 'error');
  } finally {
    isSending = false;
    hideLoader();
  }
}

function openModalForm() {
  window.addEventListener('keydown', closeModalFormOnEsc);
  formBackdropEl.classList.add('show-modal');
  bodyEl.classList.add('no-scroll');
}

function closeModalForm() {
  if (isSending) return;

  clearTimeout(closeTimeout);

  window.removeEventListener('keydown', closeModalFormOnEsc);
  formBackdropEl.classList.remove('show-modal');
  bodyEl.classList.remove('no-scroll');
}

function closeModalFormOnBackdrop(e) {
  if (isSending) return;
  if (e.currentTarget === e.target) {
    closeModalForm();
  }
}

function closeModalFormOnEsc(e) {
  if (isSending) return;
  if (e.code === 'Escape') {
    closeModalForm();
  }
}

function showLoader() {
  btnSubmitEl.classList.add('loading');
  btnSubmitEl.disabled = true;
}

function hideLoader() {
  btnSubmitEl.classList.remove('loading');
  btnSubmitEl.disabled = false;
}

function showToast(message, type) {
  clearTimeout(toastTimeout);

  toastEl.classList.remove('success', 'error');
  toastEl.classList.add(type);
  toastEl.textContent = message;

  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('success', 'error');
    toastEl.textContent = ' ';
  }, 3000);
}

async function sendMessage(data) {
  const response = await fetch('https://formspree.io/f/xrearnzd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response;
}

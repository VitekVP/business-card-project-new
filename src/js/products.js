import { productsArray } from './products/products-array';
import { markupCardProduct } from './products/card-product';

const productsListEl = document.querySelector('.js-products-list');

const markupSetProduct = productsArray
  .map(el => {
    return markupCardProduct(el);
  })
  .join('');

productsListEl.innerHTML = markupSetProduct;

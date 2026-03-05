export const markupCardProduct = ({ category, title, img, img2, text }) =>
  `<li class="products-list-item">
    <div class="products-card">
      <div class="products-img">
        <img
          srcset="${img} 1x, ${img2} 2x"
          src="${img}"
          alt="${title}"
          width="554"
          loading="lazy"
        />
      </div>
      <div class="products-info">
        <h3 class="products-name">${title}</h3>
        <p class="products-text">${text}</p>
        <button class="products-btn js-open-modal" data-category="${category}" type="button">асортимент</button>
      </div>
    </div>
  </li>`;

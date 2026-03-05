export const markupCardAssortment = item =>
  `<li class="assortment-list-item">
    <div class="assortment-card">
      <div class="assortment-img">
        <img
          srcset="${item.img} 1x, ${item.img2} 2x"
          src="${item.img}"
          alt="${item.name}"
          width="554"
          loading="lazy"
        />
      </div>
      <div class="assortment-info">
        <h4 class="assortment-name">${item.name}</h4>
        <div class="assortment-text">
          <p>жирність - ${item.fat}</p>
          <p>вага одиниці - ${item.weight} кг</p>
        </div>
      </div>
    </div>
  </li>`;

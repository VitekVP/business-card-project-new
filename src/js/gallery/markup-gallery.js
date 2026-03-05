export const markupImgGallery = ({
  title,
  imgm,
  imgm2,
  imgt,
  imgt2,
  imgd,
  imgd2,
}) =>
  `<li class="gallery-list-item swiper-slide"><picture class="gallery-picture">
          <source
            srcset="
              ${imgd} 1x,
              ${imgd2} 2x
            "
            media="(min-width:1200px)"
          />
          <source
            srcset="
              ${imgt} 1x,
              ${imgt2} 2x
            "
            media="(max-width:1199.98px)"
          />
          <source
            srcset="
              ${imgm} 1x,
              ${imgm2} 2x
            "
            media="(max-width:767.98px)"
          />
          <img
            class="gallery-img"
            src="${imgm}"
            alt="${title}"
            loading="lazy"
          />
        </picture></li>`;

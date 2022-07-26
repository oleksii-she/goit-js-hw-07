import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryCards = document.querySelector(".gallery");

// добавляємо фотокартки в нашу галерею
const imgConteiner = creatImgCards(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", imgConteiner);

// функція імпортує зображення galleryItems, в штмл
function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
// блокую перехід по лінку
console.log(captionDelay);
function BlockEventClickLoad(e) {
  e.preventDefault();
}

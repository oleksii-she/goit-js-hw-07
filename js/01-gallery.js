import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// добавляємо фотокартки в нашу галерею
const imgConteiner = creatImgCards(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgConteiner);

// функція імпортує зображення galleryItems, в штмл
function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// робим клік по фотокарткам

gallery.addEventListener("click", onOpenClickModal);

function onOpenClickModal(event) {
  BlockEventClickLoad(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalBigImageOn();
}

// модалка

function modalBigImageOn() {
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    
`);
  instance.show(instance);
  if (instance.visible()) {
    window.addEventListener("keydown", onCloseKeyEsc);
  }

  function onCloseKeyEsc(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseKeyEsc);
      return;
    }
  }
}

// блокую перехід по лінку

function BlockEventClickLoad(event) {
  event.preventDefault();
}

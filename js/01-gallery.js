import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');



const images = galleryItems.reduce((acc,{preview, original, description}) => acc +`
<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`,'');
list.insertAdjacentHTML('beforeend', images);

list.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show();

};


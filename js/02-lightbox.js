import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');



const images = galleryItems.reduce((acc,{preview, original, description}) => acc +`
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,'');
list.insertAdjacentHTML('beforeend', images);

list.addEventListener('click', onGalleryClick);

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'});

function onGalleryClick(evt) {
    evt.preventDefault();

};

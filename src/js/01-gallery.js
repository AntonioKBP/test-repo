// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryMainDiv = document.querySelector('.gallery');
// console.log(galleryMainDiv);
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);

galleryMainDiv.insertAdjacentHTML('beforeend', galleryMarkup);
galleryMainDiv.addEventListener('click', onPictureClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

function onPictureClick(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName !== 'IMG') return;
  console.log(event);
}

var lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

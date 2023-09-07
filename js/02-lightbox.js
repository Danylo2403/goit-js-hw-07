import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
// container.addEventListener('click', handleProductClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item js-product-item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
        </a>
        </li>`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
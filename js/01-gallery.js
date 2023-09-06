import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
//*
const galleryLi = galleryItems
    .map(({ preview, original, description }) =>
        `<li data-preview="${preview}" class="gallery__item js-product-item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
        </li>`
    ).join('');

gallery.innerHTML = galleryLi;

// console.log(galleryItems);

gallery.addEventListener(`click`, evt => {
    evt.preventDefault();
    if (evt.target.targetName === `IMG`) {
        const largeImageSrc = evt.target.getAttribute('data-source');
        const lightbox = basicLightbox.create(`
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>`)
        lightbox.show();
    }
});

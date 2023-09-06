import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);












// const container = document.querySelector('.gallery');
// const markup = createMarkup(galleryItems);

// container.insertAdjacentHTML('beforeend', markup);
// container.addEventListener('click', handleGalleryClick);

// function createMarkup(arr) {
//     return arr.map(({ preview, original, description }) => {
//         return `<li data-preview="${preview}" class="gallery__item js-gallery-item">
//         <a class="gallery__link" href="${original}" rel="noopener noreferrer nofollow">
//         <img <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image" />
//         </a>
//         </li>`
//     }).join('');
// }

// function handleGalleryClick(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }

//     const targetElement = event.target.closest('.js-gallery-item');
//     const galleryDesc = targetElement.dataset.preview;
//     const galleryInfo = galleryItems.find(gallery => gallery.preview === galleryDesc);

//     const instance = basicLightbox.create(`<div class="modal">
//     <img src="${preview}" data-source="${galleryInfo.original}" alt="${galleryInfo.description}" />
//     </div>`);
//     instance.show();
// };
// console.log(galleryItems);


///////////////////////////////////////////////////////////////////
// const gallery = document.querySelector(".gallery");
// //*
// const galleryLi = galleryItems
//     .map(({ preview, original, description }) =>
//         `<li data-preview="${preview}" class="gallery__item js-product-item">
//         <a class="gallery__link" href="${original}">
//         <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
//         </a>
//         </li>`
//     ).join('');

// gallery.innerHTML = galleryLi;

// // console.log(galleryItems);

// gallery.addEventListener(`click`, evt => {
//     evt.preventDefault();
//     if (evt.target.targetName === `IMG`) {
//         const largeImageSrc = evt.target.getAttribute('data-source');
//         const lightbox = basicLightbox.create(`
//         <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>`)
//         lightbox.show();
//     }
// });

////////////////////////////////////////////////////////////////////////////////////////////

// import { galleryItems } from './gallery-items.js';

// const container = document.querySelector("ul");
// const markup = createMarkup(galleryItems);

// container.insertAdjacentHTML("beforeend", markup);
// container.addEventListener("click", handlePhoto);

// function createMarkup(arr) {
//     return arr.map(({ preview, original, description }) => {
//         return `<li class="gallery__item">
//          <a class="gallery__link" href="${original}">
//        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
//        </a>
//     </li>`;
//     }).join("");
// }
// function handlePhoto(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }

//     event.preventDefault();
//     const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}"`);
//     modal.show();
// }
// console.log(galleryItems);
import { galleryItems } from './gallery-items.js';

// Розмітка карток
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handleProductClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item js-product-item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
        </li>`
    }).join('');
}

// 2) Юзер клікає на картку товару

function handleProductClick(event) {
    event.preventDefault(); // Забороняємо стандартну дію переходу по посиланню
    const targetElement = event.target.closest('.js-product-item');
    
    if (!targetElement) return; // Перевіряємо, чи клікнули на потрібному елементі
    
    const productId = targetElement.dataset.preview;
    const productInfo = galleryItems.find(product => product.preview === productId);

    const instance = basicLightbox.create(`
    <div class="modal">
    <a class="gallery__link" href="${productInfo.original}">
        <img src="${productInfo.preview}" data-source="${productInfo.original}" alt="${productInfo.description}" class="gallery__image"/>
        </a>
    </div>`);
    instance.show();
    };
// console.log(galleryItems);
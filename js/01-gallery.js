import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const markup = createMarkup(galleryItems)

function createMarkup(arr) {
  return arr.map((card) => {
    console.log(card);
    return card; // Повертаємо оригінальний об'єкт card
  });
}
import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import './js/render-function';
import { createMarkUp } from './js/render-function';
import { galleryEl } from './js/render-function';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const inputEl = document.querySelector('input');

formEl.addEvenListener('submit', event => {
  event.preventDefault();
  galleryEl.innerHTML = '';
  lightbox.refresh();
  loaderEl.classList.add('is-open');
  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    loaderEl.classList.remove('is-open');
    return;
  }
  getImages(inputValue)
    .then(response => {
      if (response.hits.length === 0) {
        return iziToast.info({
          title: 'Sorry',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      createMarkUp(response.hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => loaderEl.classList.remove('is-open'));
  inputEl.value = '';
});
new SimpleLightbox('.gallery-li', {
  captionsData: 'alt',
  captionDelay: 250,
});

import refs from './refs';
import galleryTpl from '../templates/gallery.hbs';

function renderGallery(hits) {
  const markup = galleryTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};

export default renderGallery;

import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import showBtn from './js/load-more-btn';
import renderGallery from './js/render-gallery';

refs.searchForm.addEventListener('submit', searchHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreHandler);

function searchHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearGallery();
  apiService.resetPage();
  fetchImages();
};

function loadMoreHandler(event) {
  event.preventDefault();
  fetchImages();
};

function fetchImages() {

  apiService
    .fetchImages()
    .then(images => {
      renderGallery(images);
      
      if (images.length < 12) {
        return;
      };
      if (images.length === 12) {
        showBtn();
      };
    })
    .catch(error => console.log(error));
};

function clearGallery() {
  refs.gallery.innerHTML = '';
};

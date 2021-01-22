import refs from './refs';

export default {
  showBtn() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },

  hideBtn() {
    refs.loadMoreBtn.classList.add('is-hidden');
  },

};

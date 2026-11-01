import { getImagesByQuery, imgOnPage } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  btn: document.querySelector('.btn-next'),
};

let page = 1;
let searchedValue = '';
let totalPages = '';
let doubleLoading = false;

const onLoadMoreBtn = async event => {
  if (doubleLoading) {
    return;
  }

  doubleLoading = true;

  try {
    page++;
    showLoader();

    const getPhotoListNext = await getImagesByQuery(searchedValue, page);

    createGallery(getPhotoListNext.hits);

    const card = document.querySelector('.gallery-card');

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page >= totalPages) {
      hideLoadMoreButton();
      refs.btn.removeEventListener('click', onLoadMoreBtn);
      iziToast.info({
        title: 'Infor',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    doubleLoading = false;
    hideLoader();
  }
};

const submitSearchValue = async event => {
  try {
    event.preventDefault();

    const { currentTarget: formEl } = event;
    searchedValue = formEl.elements['search-text'].value.trim();

    if (!searchedValue) {
      iziToast.warning({
        message: 'The search field should be filled in!',
      });

      formEl.reset();
      return;
    }

    formEl.reset();
    clearGallery();
    showLoader();
    hideLoadMoreButton();

    page = 1;

    const data = await getImagesByQuery(searchedValue, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / imgOnPage);

    if (totalPages > page) {
      showLoadMoreButton();
      refs.btn.addEventListener('click', onLoadMoreBtn);
    }

    createGallery(data.hits);
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
};

refs.form.addEventListener('submit', submitSearchValue);

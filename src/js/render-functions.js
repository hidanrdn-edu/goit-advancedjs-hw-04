import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
  btn: document.querySelector('.btn-next'),
};

const lightbox = new SimpleLightbox('.gallery a');

const createGallery = images => {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-card">

        <a href="${largeImageURL}" class="gallery-link"><img class="gallery-img" src="${webformatURL}" alt="${tags}" /></a>              

        <div class="box-info">
            <ul class="card-infor">
                <li class="item-infor">
                    <p class="item-infor-name">Likes</p>
                    <p class="item-infor-value">${likes}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Views</p>
                    <p class="item-infor-value">${views}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Comments</p>
                    <p class="item-infor-value">${comments}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Downloads</p>
                    <p class="item-infor-value">${downloads}</p>
                </li>
            </ul>
        </div>
    </li>
  `
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh();
};

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showLoadMoreButton() {
  refs.btn.classList.remove('is-hidden');
} 

function hideLoadMoreButton() {
  refs.btn.classList.add('is-hidden');
} 

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};

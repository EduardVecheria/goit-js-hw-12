import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loadMoreBtn =document.querySelector('.load-more')
const loader = document.querySelector('.load')
const galleryEl = document.querySelector('.gallery');
let lightbox = null;

export function createGallery(images) {
    const markup = images.map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <li class="photo-card">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
    Likes:
    <span class="value">❤️ ${likes}</span>
  </p>
  <p class="info-item">
    Views:
    <span class="value">👀 ${views}</span>
  </p>
  <p class="info-item">
    Comments:
    <span class="value">📝 ${comments}</span>
  </p>
  <p class="info-item">
    Downloads:
    <span class="value">⬇️ ${downloads}</span>
  </p>
        </div>
      </li>`
    ).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
  }

export function clearGallery() {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

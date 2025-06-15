import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
  const galleryEl = document.querySelector('.gallery');

  const markup = images.map(
      image => `<li>
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p> Likes ${image.likes}</p>
          <p> Views ${image.views}</p>
          <p> Comments ${image.comments}</p>
          <p> Downoloads ${image.downloads}</p>
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
    return document.querySelector('.load').classList.remove('hidden');
}

export function hideLoader() {
  return document.querySelector('.load').classList.add('hidden');
}

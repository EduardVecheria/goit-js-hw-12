import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';




const form = document.querySelector('.form');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const query = event.currentTarget.elements['search-text'].value.trim();

    // console.log(query);
    
    if (!query) {
    iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query!',
        position: 'topRight',
    });
    return;
}

    clearGallery();
    showLoader();

    getImagesByQuery(query)
    
    .then(data => {
        hideLoader();
        
// console.log(data);

    if (data.hits.length === 0) {
        iziToast.info({
            title: 'Info',
            message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        return;
    }

        createGallery(data.hits);
    })
    .catch(error => {
        hideLoader();

        iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        });

    // console.error(error);
    });
}

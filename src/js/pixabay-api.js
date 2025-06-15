import axios from 'axios';

const API_KEY = '50838161-3c383bf924b9914213562243a';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios('https://pixabay.com/api/', { params })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}

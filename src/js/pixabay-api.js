import axios from 'axios';

const API_KEY = '50838161-3c383bf924b9914213562243a';

export async function getImagesByQuery(query, page=1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page
  };

  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data;
}

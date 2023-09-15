import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38536372-159bf0f59ef5a36c5ad4ff6d0';

export const fetchImages = async (query, page) => {
    const resp = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return resp.data;
}
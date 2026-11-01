import axios from 'axios';

const API_KEY = '58027101-8436ffa8ff8504f480371d17b';
const imgOnPage =  15;

axios.defaults.baseURL = 'https://pixabay.com'

const getImagesByQuery = async (query, page) => {
  const searchParams = {
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    key: API_KEY,
    q: query,
    page: page,
    per_page: imgOnPage,
  };

  const response = await axios
    .get(`/api/`,{ params: searchParams });
    
    return response.data;
};

export  {getImagesByQuery, imgOnPage};

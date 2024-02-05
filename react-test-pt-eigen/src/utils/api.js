import formattedDateForAPI from './formattedDateForAPI';

const api = (() => {
  const BASE_URL = 'https://newsapi.org/v2';
  const API_KEY = 'YOUR_API_KEY';
  const COUNTRY = 'id';

  async function getAllTopHeadLines() {
    const response = await fetch(`${BASE_URL}/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'ok') {
      throw new Error(message);
    }

    const { articles } = responseJson;

    return articles;
  }

  async function getAllArticle(query) {
    const date = new Date();
    const fromDate = formattedDateForAPI(new Date(Date.now()) - (1000 * 60 * 60 * 24));
    const toDate = formattedDateForAPI(date);
    let response = '';

    if (query !== '') {
      response = await fetch(`${BASE_URL}/everything/?q=${query}&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${API_KEY}`);
    } else {
      response = await fetch(`${BASE_URL}/everything/?q=''&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${API_KEY}`);
    }
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== 'ok') {
      throw new Error(message);
    }
    const { articles } = responseJson;

    return articles;
  }

  return {
    getAllTopHeadLines,
    getAllArticle,
  };
})();

export default api;

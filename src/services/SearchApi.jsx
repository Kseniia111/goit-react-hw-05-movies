import axios from 'axios';

const API_KEY = 'd3f1e252515ffd863daf881642a1c381';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?`, params);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?`, params);
  return response.data;
};

export const handleSearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.credits;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};

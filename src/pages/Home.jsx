import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/SearchApi';

import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;

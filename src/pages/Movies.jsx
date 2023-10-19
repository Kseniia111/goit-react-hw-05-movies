import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/SearchApi';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await handleSearch(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
// const Movies = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('query') || '';
//   const [loading, setLoading] = useState(false);

//   const updateQueryString = query => {
//     const nextParams = query !== '' && { query };
//     setSearchParams(nextParams);
//   };

//   useEffect(() => {
//     const search = async () => {
//       try {
//         setLoading(true);
//         const movies = await handleSearch(movieName);
//         setSearchResults(movies);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     search();
//   }, [movieName]);

//   return (
//     <div>
//       <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
//         <SearchForm value={movieName} onChange={updateQueryString} />
//         {loading ? (
//           <Skeleton
//             count={15}
//             style={{ height: 30, width: 300, marginTop: 15 }}
//           />
//         ) : searchResults.length === 0 && movieName ? (
//           <h2> Nothing found</h2>
//         ) : (
//           <MoviesList films={searchResults} />
//         )}
//       </SkeletonTheme>
//     </div>
//   );
// };

// export default Movies;

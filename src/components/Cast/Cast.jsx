import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/SearchApi';
import { BASE_POSTER_URL, PLACEHOLDER } from 'services/constants';
import { Wrapper, Item, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <Wrapper>
          <List>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <Item key={id}>
                <img
                  src={`${
                    profile_path
                      ? BASE_POSTER_URL + profile_path
                      : PLACEHOLDER + '?text=' + original_name
                  }`}
                  alt={original_name}
                />
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </Item>
            ))}
          </List>
        </Wrapper>
      }
    </>
  );
};

export default Cast;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { fetchMovieCredits } from 'services/SearchApi';
// import { List, Item } from './Cast.styled';
// import placeholder from '../images/placeholder.png';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     // Отримання інформації про акторський склад фільму з API

//     const movieCast = async () => {
//       try {
//         const response = await fetchMovieCredits(movieId);
//         setCast(response);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     movieCast();
//   }, [movieId]);

//   return (
//     <>
//       {cast.length !== 0 && (
//         <div>
//           <h2>Movie Cast</h2>
//           <List>
//             {cast.map(actor => (
//               <Item key={actor.id}>
//                 <img
//                   width="200px"
//                   height="300px"
//                   src={
//                     actor.profile_path
//                       ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
//                       : `${placeholder}`
//                   }
//                   alt={actor.original_name}
//                 />
//                 <p>{actor.name}</p>
//               </Item>
//             ))}
//           </List>
//         </div>
//       )}
//       {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
//     </>
//   );
// };

// export default Cast;

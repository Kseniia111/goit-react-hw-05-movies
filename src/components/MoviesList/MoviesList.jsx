import { useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <div
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              cover={movie.poster_path}
            >
              {movie.title}
            </div>
          </Item>
        ))}
      </List>
    </>
  );
  // return (
  //   <List>
  //     {movies.map(({ id, title, poster_path }) => {
  //       const imgPoster = searchImages(poster_path);
  //       console.log(imgPoster);
  //       return (
  //         <div state={{ from: location }} to={`/movies/${id}`} key={id}>
  //           <Item>
  //             <img src={imgPoster} alt={title} />
  //             <p>{title}</p>
  //           </Item>
  //         </div>
  //       );
  //     })}
  //   </List>
  // );
};

export default MoviesList;

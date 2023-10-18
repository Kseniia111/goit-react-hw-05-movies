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
};

export default MoviesList;

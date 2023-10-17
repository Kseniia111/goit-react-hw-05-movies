import { useLocation } from 'react-router-dom';
import { Wrapper, List, Item, LinkToDetails } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <LinkToDetails
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              cover={movie.poster_path}
            >
              {movie.title}
            </LinkToDetails>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default MoviesList;

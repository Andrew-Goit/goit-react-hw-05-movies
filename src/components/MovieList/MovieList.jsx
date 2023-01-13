import { useLocation } from 'react-router-dom';
import { Element, FilmImage, FilmLink, List, ListTitle, CardWraper, 
  FilmTitle, ListWraper } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (movies.length === 1) return;

  return (
    <List>
      <ListTitle>Trending Movies</ListTitle>
        <ListWraper>
          {movies.map(el => (
            <Element key={el.id}>
              <CardWraper>
                <FilmLink
                  to={`/goit-react-hw-05-movies/movies/${el.id}`}
                  state={{ from: location }}
                >
                  <FilmImage
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                  }
                  alt=""
                  width="40"
                />
                  <FilmTitle>{el.title}</FilmTitle>
                </FilmLink>
              </CardWraper>
            </Element>
          ))}
        </ListWraper>
    </List>
  );
};

export default MovieList;

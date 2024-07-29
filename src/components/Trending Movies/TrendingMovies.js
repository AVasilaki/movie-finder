import { useEffect, useState } from 'react';
import { fetchApi } from 'takeApi';
import { StyledLink, StyledLi } from './TrendingMovies.styled';
import { useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    async function getI() {
      const endPoint = '/trending/all/day';
      try {
        const resp = await fetchApi(endPoint);

        setMovies(resp.data.results);
      } catch (error) {
        console.error(error);
        alert('something wrong');
        return error;
      } finally {
        setLoader(false);
      }
    }
    getI();
  }, []);
  return (
    <>
      <ul>
        {movies.map(movie => {
          return (
            <StyledLi key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.name || movie.title}
              </StyledLink>
            </StyledLi>
          );
        })}
      </ul>
      <Audio visible={loader} />
    </>
  );
}

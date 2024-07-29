import { useEffect, useState } from 'react';
import { fetchApi } from 'takeApi';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
const StyledLink = styled(NavLink)`
  margin: 10px;
  font-size: 24px;
  color: #f5e4e5;
  &.active {
    color: red;
  }
`;

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
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.name || movie.title}
              </StyledLink>
            </li>
          );
        })}
      </ul>
      <Audio visible={loader} />
    </>
  );
}

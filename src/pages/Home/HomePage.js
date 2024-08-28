import TrendingMovies from 'components/Trending Movies/TrendingMovies';
import { StyledTitle } from './HomePage.styled';
const Home = () => {
  return (
    <>
      <StyledTitle>Trending today</StyledTitle>
      <TrendingMovies />
    </>
  );
};
export default Home;

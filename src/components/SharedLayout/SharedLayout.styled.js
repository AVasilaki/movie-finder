import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import background from '../../images/charli-movie.png';

export const Container = styled.div`
  max-width: 1300px;
  margin: 20px;
  padding: 0 16px;
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.5),
      rgba(255, 255, 0, 0.5)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: 1300px 1200px;
  background-position: left bottom;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin: 10px;
  font-size: 24px;
  color: #f5e4e5;
  &.active {
    color: red;
  }
`;
export const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 8px;
  background-color: rgba(0, 0, 255, 0.5);
`;

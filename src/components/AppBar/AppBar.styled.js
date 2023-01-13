import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.2);
`;

export const StyledLink = styled(NavLink)`
  color: #555;
  font-size: 22px;
  font-weight: 600;
  margin-left: 30px;

  &.active {
    color: #cc25b0;
  }
`;

export const Nav = styled.nav`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

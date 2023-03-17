import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const SearchFormStyled = styled.p`
  font-size: 20px;
  color: black;
`;
export const Logo = styled.img``;
export const StyledNavLink = styled(NavLink)`
  padding-top: ${props => props.theme.spacing.step * 21.5}px;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    padding-top: ${props => props.theme.spacing.step * 23}px;
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(21 / 18);
  color: #000;
`;
export const Wrap = styled.div`
  margin-bottom: 78px;
  color: #f2f2f2;
  padding-top: 23px;
  @media (min-width: 1440px) {
    margin-bottom: 31px;
  }
`;

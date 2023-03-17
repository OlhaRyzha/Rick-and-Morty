import styled from '@emotion/styled';

export const CharacterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 312px;
  @media (min-width: 1440px) {
    width: 413px;
  }
`;

export const CharacterDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const Poster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 148px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
  margin-bottom: 34px;
`;
export const AccentTitle = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 120%;
  color: #8e8e93;
  @media (min-width: 1440px) {
    margin-bottom: ${props => props.theme.spacing.step * 5}px;
  }
`;

export const CharacterTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const CharacterScore = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: calc(38 / 32);
  color: #081f32;
  margin-bottom: 35px;
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const CharacterDetail = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #081f32;
  padding-left: ${props => props.theme.spacing.step * 4}px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    margin-top: 36px;
    min-width: 100%;
    height: 1px;
    background: rgba(33, 33, 33, 0.08);
  }
`;

export const Accent = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 143%;
  color: #6e798c;
`;

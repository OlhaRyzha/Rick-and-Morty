import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: ${props => props.theme.spacing.step}px;
`;

export const Container = styled.div``;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: ${props => props.theme.spacing.step * 5}px;
  margin-top: 51px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 12px;
  background-color: ${props => props.color};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  min-height: 232px;
  margin-bottom: 12px;
`;
export const CardName = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  line-height: 150%;
  padding-left: ${props => props.theme.spacing.step * 4}px;
  color: rgba(0, 0, 0, 0.87);
`;
export const CardText = styled.span`
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
  padding-left: ${props => props.theme.spacing.step * 4}px;
`;

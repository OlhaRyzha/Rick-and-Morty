import styled from '@emotion/styled';

export const GalleryBtn = styled.button`
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #00b0c8;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #84fd67;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 150%;
  font-weight: 700;
  min-width: 180px;
  margin: 30px auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  text-shadow: 0px 0px 10px #84fd67, 0px 0px 20px #84fd67, 0px 0px 30px #84fd67;
`;

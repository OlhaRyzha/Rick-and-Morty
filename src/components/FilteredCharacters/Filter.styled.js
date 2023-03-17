import styled from '@emotion/styled';
export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 10px lightgrey;
  height: 56px;
  margin-top: 16px;
  outline: grey solid 1px;
  padding-left: 50px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: 16px center;
  opacity: 0.6;
  background-image: url('https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.svg');
  &::placeholder {
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
  }
`;

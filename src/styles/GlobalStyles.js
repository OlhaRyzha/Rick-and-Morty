import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.small};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .container {
    min-width: 368px;
    padding: 0 24px;
    @media (min-width: 1440px) {
      min-width: 1440px;
      padding: 0 210px;
    }
  }
  .logo {
    min-width: 320px;
    transition: all 0.3s ease-in-out;
    @media (min-width: 500px) {
      min-width: 420px;
    }
    @media (min-width: 768px) {
      min-width: 450px;
    }
    @media (min-width: 1100px) {
      min-height: 200px;
      min-width: 550px;
    }
    @media (min-width: 1440px) {
      min-width: 600px;
    }
  }
  #d {
    fill: #7df963;
    scale: 0.52;
    animation: neon-pulse 5s ease-in-out infinite;
    transition: all 0.3s ease-in-out;
    @media (min-width: 500px) {
      scale: 0.7;
    }
    @media (min-width: 768px) {
      scale: 0.75;
    }
    @media (min-width: 1100px) {
      scale: 0.8;
    }
    @media (min-width: 1440px) {
      scale: 1;
    }
  }
  #a {
    fill: #0cadb6;
    scale: 0.52;
    transition: all 0.3s ease-in-out;
    @media (min-width: 500px) {
      scale: 0.7;
    }
    @media (min-width: 768px) {
      scale: 0.75;
    }
    @media (min-width: 1100px) {
      scale: 0.8;
    }
    @media (min-width: 1440px) {
      scale: 1;
    }
  }
  @keyframes neon-pulse {
    0% {
      fill: #ff0066;
    }
    25% {
      fill: #ffff00;
    }
    50% {
      fill: #00ff00;
    }
    75% {
      fill: #00ffff;
    }
    100% {
      fill: #ff00ff;
    }
  }
`;

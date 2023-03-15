import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: math, sans-serif;
    background-color: ${({ theme }) => theme.mainBackgroundColor};
  }
  `;

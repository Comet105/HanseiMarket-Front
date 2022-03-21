import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root, #__next{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
    a { cursor: pointer; text-decoration: none; }
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size};
  }
`;

export default GlobalStyle;

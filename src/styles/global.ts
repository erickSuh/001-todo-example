import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme.colors.primary ? 'white' : 'black')};
  }
`;

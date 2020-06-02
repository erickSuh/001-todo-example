import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from '~/containers/Home';

import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme/dark';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;

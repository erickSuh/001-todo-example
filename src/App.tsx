import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Home from '~/containers/Home';

import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme/dark';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

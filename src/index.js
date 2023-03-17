import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize/modern-normalize.css';
import { theme } from './styles/theme';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <BrowserRouter basename="/Rick-and-Morty/">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

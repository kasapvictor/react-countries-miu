import './styles/styles.css';

import { theme } from '@app/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@pages';

import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

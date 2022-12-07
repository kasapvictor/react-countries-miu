import './styles/styles.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@pages';

import { store } from './store';

const theme = createTheme({
  mode: 'light', // dark
  typography: {
    fontFamily: ['Nunito Sans', 'BlinkMacSystemFont', 'Roboto', '-apple-system', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontFamilyCode: 'Menlo,Consolas,"Droid Sans Mono",monospace',
  },
  // palette: {
  //   primary: {
  //     main: '#0971f1',
  //   },
  //   dark: {
  //     main: 'hsl(200, 15%, 8%)',
  //   },
  //   neutral: {
  //     main: '#64748B',
  //     contrastText: '#fff',
  //   },
  // },
});

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

import './styles/styles.css';

import { theme } from '@app/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@pages';

import { store } from './store';

const WithTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

WithTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <WithTheme>
          <Routing />
        </WithTheme>
      </BrowserRouter>
    </Provider>
  );
};

import './styles/styles.css';

import { lightTheme, darkTheme } from '@app/theme';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { themeModel } from '@features';
import { Routing } from '@pages';

import { store } from './store';

const WithTheme = ({ children }) => {
  const themeMode = useSelector(themeModel.selectThemeMode);

  return <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>{children}</ThemeProvider>;
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

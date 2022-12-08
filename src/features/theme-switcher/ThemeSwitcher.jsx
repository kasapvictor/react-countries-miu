import { ModeNight, WbSunny } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectThemeMode, setMode } from './model';

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const useTheme = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const theme = themeMode ? THEME.LIGHT : THEME.DARK;

  const handleTheme = () => {
    dispatch(setMode(!themeMode));
  };

  return [themeMode ? <WbSunny /> : <ModeNight />, theme, handleTheme];
};

export const ThemeSwitcher = () => {
  const [icon, theme, handleTheme] = useTheme();

  return (
    <Button variant="contained" startIcon={icon} onClick={handleTheme} color="secondary">
      {theme}
    </Button>
  );
};

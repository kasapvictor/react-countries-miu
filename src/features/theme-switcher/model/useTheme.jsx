import { ModeNight, WbSunny } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);
  const icon = theme === THEME.LIGHT ? <WbSunny /> : <ModeNight />;

  const handleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return [theme, handleTheme, icon];
};

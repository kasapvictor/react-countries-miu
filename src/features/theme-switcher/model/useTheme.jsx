import { useState, useEffect } from 'react';

import { THEME } from '../constants';

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const handleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return [theme, handleTheme];
};

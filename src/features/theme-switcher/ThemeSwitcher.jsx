import { ModeNight, WbSunny } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

import { COLOR, FONT_SIZE, SHADOW, SPACE } from '@shared';

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

const buttonSx = {
  fontSize: FONT_SIZE.xxsmall,
  color: COLOR.color2,
  background: COLOR.color1,
  boxShadow: SHADOW.default,
  padding: `${SPACE.xsmall} ${SPACE.medium}`,

  '&:hover': {
    color: COLOR.color12,
    background: COLOR.color6,
  },
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

export const ThemeSwitcher = () => {
  const [theme, handleTheme, icon] = useTheme();

  return (
    <Button variant="contained" startIcon={icon} onClick={handleTheme} sx={buttonSx}>
      {theme}
    </Button>
  );
};

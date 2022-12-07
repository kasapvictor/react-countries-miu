import { Button } from '@mui/material';

import { useTheme } from './model';

export const ThemeSwitcher = () => {
  const [theme, handleTheme, icon] = useTheme();

  return (
    <Button variant="contained" startIcon={icon} onClick={handleTheme} color="secondary">
      {theme}
    </Button>
  );
};

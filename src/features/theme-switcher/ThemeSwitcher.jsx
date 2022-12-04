import { IoMoon, IoSunny } from 'react-icons/io5';

import { Button } from '@shared';

import { THEME } from './constants';
import { useTheme } from './model';
import { ThemeSwitcherStyled } from './styled';

export const ThemeSwitcher = () => {
  const [theme, handleTheme] = useTheme();

  return (
    <ThemeSwitcherStyled>
      {theme === THEME.LIGHT ? <IoSunny size={24} /> : <IoMoon size={22} />}
      <Button variant="dark" onClick={handleTheme}>
        {theme}
      </Button>
    </ThemeSwitcherStyled>
  );
};

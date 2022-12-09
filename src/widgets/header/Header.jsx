import { AppBar, Toolbar, Container } from '@mui/material';

import { ThemeSwitcher } from '@features';
import { COLOR, SHADOW, SPACE } from '@shared';

import { Brand } from './components';

const appBarSx = {
  boxShadow: SHADOW.default,
  backgroundColor: COLOR.color3,
  pt: SPACE.small,
  pb: SPACE.small,
};

export const Header = () => {
  return (
    <AppBar component="header" position="static" sx={appBarSx}>
      <Container>
        <Toolbar disableGutters={true}>
          <Brand />
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

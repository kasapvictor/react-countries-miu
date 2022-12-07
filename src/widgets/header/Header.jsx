import { AppBar, Toolbar, Container } from '@mui/material';

import { ThemeSwitcher } from '@features';

import { Brand } from './components';

export const Header = () => {
  return (
    <AppBar component="header" position="static">
      <Container>
        <Toolbar disableGutters={true}>
          <Brand />
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

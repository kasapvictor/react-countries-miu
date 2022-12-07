import { AppBar, Toolbar, Container } from '@mui/material';

import { ThemeSwitcher } from '@features';

import { Brand } from './components';

export const Header = () => {
  return (
    <AppBar component="header" position="static" color="primary">
      <Container>
        <Toolbar>
          <Brand />
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

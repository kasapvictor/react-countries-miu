import { Grid, Box, Container } from '@mui/material';

import { ThemeSwitcher } from '@features';
import { SHADOW, SPACE } from '@shared';

import { Brand } from './components';

export const Header = () => {
  return (
    <Box
      sx={{
        padding: `${SPACE.gutter} 0`,
        boxShadow: SHADOW.default,
      }}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Brand />
          <ThemeSwitcher />
        </Grid>
      </Container>
    </Box>
  );
};

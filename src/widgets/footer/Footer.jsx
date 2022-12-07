import { Grid, Typography, Box, Container, Link } from '@mui/material';

import { SHADOW, SPACE } from '@shared';

export const Footer = () => {
  return (
    <Box
      sx={{
        boxShadow: SHADOW.footer,
        // backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800]),
      }}>
      <Container>
        <Grid
          container
          sx={{
            justifyContent: 'start',
            alignItems: 'center',
            pb: SPACE.gutter,
            pt: SPACE.gutter,
            gap: SPACE.xsmall,
          }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 100,
              // color: (theme) => (theme.palette.mode === 'light' ? 'inherit' : '#333'),
            }}>
            Created by Victor Kasap &copy; {new Date().getFullYear()}
          </Typography>
          <Link target="_blank" href="https://github.com/kasapvictor" underline="none">
            GitHub
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

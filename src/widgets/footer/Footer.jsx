import { Grid, Typography, Box, Container, Link } from '@mui/material';

import { COLOR, SHADOW, SPACE } from '@shared';

const gridSx = {
  justifyContent: 'start',
  alignItems: 'center',
  pb: SPACE.gutter,
  pt: SPACE.gutter,
  gap: SPACE.xsmall,
};
export const Footer = () => {
  return (
    <Box
      sx={{
        boxShadow: SHADOW.footer,
        backgroundColor: COLOR.color3,
      }}>
      <Container>
        <Grid container sx={gridSx}>
          <Typography
            variant="body2"
            color={COLOR.color1}
            sx={{
              fontWeight: 100,
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

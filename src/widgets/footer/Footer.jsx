import { Grid, Typography, Box, Container, Link } from '@mui/material';

import { COLOR, SHADOW, SPACE } from '@shared';

export const Footer = () => {
  return (
    <Box sx={{ boxShadow: SHADOW.footer }}>
      <Container>
        <Grid container justifyContent="start" alignItems="center" padding={`${SPACE.gutter} 0`} gap={SPACE.xsmall}>
          <Typography fontWeight={100} fontSize="small" lineHeight={2} color={COLOR.color1} fontFamily="inherit">
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

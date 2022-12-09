import { Box, Container } from '@mui/material';
import { Footer } from '@widgets/footer';
import { Outlet } from 'react-router-dom';

import { SPACE } from '@shared';
import { Header } from '@widgets';

const containerSx = {
  pt: SPACE.large,
  pb: SPACE.large,

  '@media(min-width: 767px)': {
    pt: SPACE.xlarge,
    pb: SPACE.xlarge,
  },
};

export const Base = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Container sx={containerSx}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

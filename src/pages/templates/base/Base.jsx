import { Container } from '@mui/material';
import { Footer } from '@widgets/footer';
import { Outlet } from 'react-router-dom';

import { SPACE } from '@shared';
import { Header } from '@widgets';

const mainSx = {
  flex: 1,
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
      <Container component="main" sx={mainSx}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

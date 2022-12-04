import { Footer } from '@widgets/footer';
import { Outlet } from 'react-router-dom';

import { Main } from '@shared';
import { Header } from '@widgets';

export const Base = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SPACE } from '@shared';

import { selectCountryById } from '../../model';

import { Body } from './Body';
import { Flag } from './Flag';
import { Footer } from './Footer';
import { Header } from './Header';
import { Map } from './Map';
export const Details = () => {
  const { countryId } = useParams();
  const countryById = useSelector((state) => selectCountryById(state, countryId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ paddingBottom: SPACE.gutter }}>
      <Grid container columnSpacing={{ md: 6 }} rowSpacing={{ xs: 2 }}>
        <Grid item xs={12} md={6}>
          <Flag countryById={countryById} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Header countryById={countryById} />
          <Body countryById={countryById} />
          <Footer countryById={countryById} />
        </Grid>
      </Grid>

      <Map countryById={countryById} />
    </Box>
  );
};

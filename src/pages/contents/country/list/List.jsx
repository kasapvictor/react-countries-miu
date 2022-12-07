import { Box, Link, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkItem } from 'react-router-dom';

import { CountryCard, countryModel } from '@entities';
import { COLOR, RADII, SHADOW, STATUS } from '@shared';
import { CountryFilter } from '@widgets';

const listItemSx = {
  display: 'block',
  height: '100%',
  textDecoration: 'none',
  color: COLOR.color1,
  border: '1px solid',
  borderColor: COLOR.color14,
  borderRadius: RADII.xsmall,
  boxShadow: SHADOW.card,
  transition: 'box-shadow .2s ease-in-out',
  overflow: 'hidden',

  '&:hover': {
    boxShadow: SHADOW.hover,
  },
};
const ListItems = () => {
  const filteredIds = useSelector(countryModel.selectFilteredIds);

  if (!filteredIds.length) {
    return (
      <Typography component="code" variant="body1" fontFamily="monospace">
        Countries not found
      </Typography>
    );
  }

  return filteredIds.map((countryId) => (
    <Grid item component="li" key={countryId} xs={12} sm={6} md={4} lg={3}>
      <Link component={LinkItem} to={`/${countryId}`} sx={listItemSx}>
        <CountryCard countryId={countryId} />
      </Link>
    </Grid>
  ));
};

export const List = () => {
  const dispatch = useDispatch();
  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return (
    <Box>
      {statusFetch === STATUS.LOADING_STATUS && (
        <Typography component="code" variant="body1" fontFamily="monospace">
          Loading ...
        </Typography>
      )}

      {statusFetch === STATUS.FAILED_STATUS && (
        <Typography component="code" variant="body1" fontFamily="monospace">
          {errorFetch}
        </Typography>
      )}

      {statusFetch === STATUS.SUCCESS_STATUS && (
        <Box>
          <CountryFilter />
          <Grid component="ul" container columnSpacing={{ sm: 2, md: 3 }} rowSpacing={{ xs: 2, sm: 2, md: 3 }}>
            <ListItems />
          </Grid>
        </Box>
      )}
    </Box>
  );
};

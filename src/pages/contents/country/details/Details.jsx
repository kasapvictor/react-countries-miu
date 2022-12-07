import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { countryModel, CountryDetails } from '@entities';
import { SPACE, STATUS } from '@shared';

const useDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return { statusFetch, errorFetch, handleClick };
};

export const Details = () => {
  const { statusFetch, errorFetch, handleClick } = useDetails();

  return (
    <Box>
      <Box>
        <Button variant="contained" onClick={handleClick} startIcon={<ArrowBack />}>
          Back
        </Button>
      </Box>
      <Box sx={{ pt: SPACE.gutter }}>
        {statusFetch === STATUS.LOADING_STATUS && <Typography variant="code">Loading Details ...</Typography>}

        {statusFetch === STATUS.FAILED_STATUS && <Typography variant="code">{errorFetch}</Typography>}

        {statusFetch === STATUS.SUCCESS_STATUS && <CountryDetails />}
      </Box>
    </Box>
  );
};

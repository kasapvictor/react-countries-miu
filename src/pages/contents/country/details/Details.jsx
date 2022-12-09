import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { countryModel, CountryDetails } from '@entities';
import { COLOR, FONT_SIZE, SHADOW, SPACE, STATUS } from '@shared';

const buttonSx = {
  fontSize: FONT_SIZE.xxsmall,
  color: COLOR.color9,
  background: COLOR.color7,
  boxShadow: SHADOW.default,
  padding: `${SPACE.xsmall} ${SPACE.medium}`,

  '&:hover': {
    color: COLOR.color9,
    background: COLOR.color8,
  },
};

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
        <Button variant="contained" onClick={handleClick} startIcon={<ArrowBack sx={{ fontSize: 30 }} />} sx={buttonSx}>
          Back
        </Button>
      </Box>
      <Box sx={{ pt: SPACE.gutter }}>
        {statusFetch === STATUS.LOADING_STATUS && <Typography fontFamily="monospace">Loading Details ...</Typography>}

        {statusFetch === STATUS.FAILED_STATUS && <Typography fontFamily="monospace">{errorFetch}</Typography>}

        {statusFetch === STATUS.SUCCESS_STATUS && <CountryDetails />}
      </Box>
    </Box>
  );
};

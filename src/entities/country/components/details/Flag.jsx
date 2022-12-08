import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { RADII, SHADOW } from '@shared';

const boxSx = {
  display: 'flex',
  alignItems: 'center',
  minHeight: 450,

  '@media (max-width: 991px)': {
    minHeight: 'auto',
  },
};

const imgSx = {
  height: 'auto',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  borderRadius: RADII.xsmall,
  boxShadow: SHADOW.default,
};
export const Flag = ({ countryById }) => {
  const { flag, countryName } = countryById;
  return (
    <Box sx={boxSx}>
      <img src={flag[1]} alt={countryName[1]} style={imgSx} />
    </Box>
  );
};

Flag.propTypes = {
  countryById: PropTypes.object,
};

import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { COLOR, SPACE } from '@shared';

const coatBoxSx = {
  position: 'absolute',
  top: -80,
  right: 0,

  '@media (max-width: 991px)': {
    top: -60,
    right: 10,
  },

  '@media (max-width: 479px)': {
    position: 'static',
  },
};

const coatImgSx = {
  width: 80,
  filter: `drop-shadow(4px 0px 16px ${COLOR.color2})`,
};

export const Header = ({ countryById }) => {
  const { countryName, coatOfArms } = countryById;

  return (
    <Box sx={{ position: 'relative', paddingBottom: SPACE.xsmall }}>
      <Typography variant="h3" component="h1" fontWeight={600} pb={2}>
        {countryName[1]}
      </Typography>

      {coatOfArms[1] && (
        <Box sx={coatBoxSx}>
          <img style={coatImgSx} src={coatOfArms[1]} alt={countryName[1]} />
        </Box>
      )}
    </Box>
  );
};

Header.propTypes = {
  countryById: PropTypes.object,
};

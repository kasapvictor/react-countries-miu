import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { COLOR, FONT_SIZE, SPACE } from '@shared';

const titleSx = {
  fontSize: FONT_SIZE.h3,
  pt: SPACE.small,
  pb: SPACE.small,
  fontWeight: 700,

  '@media (max-width: 449px)': {
    fontSize: FONT_SIZE.h3,
  },
};

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
    pb: SPACE.small,
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
      <Typography component="h1" fontWeight={600} sx={titleSx}>
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

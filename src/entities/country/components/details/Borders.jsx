import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { COLOR, RADII } from '@shared';

import { selectById } from '../../model';

const buttonSx = {
  borderColor: COLOR.color7,
  borderRadius: RADII.xxsmall,

  '&:hover': {
    borderColor: COLOR.color1,
  },

  '& span': {
    lineHeight: 1,
  },
};

const typographySx = {
  color: COLOR.color1,
};

export const Borders = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <Button component={Link} to={`/${countryId}`} variant="outlined" sx={buttonSx}>
      <Typography variant="caption" sx={typographySx}>
        {countryById.name.common}
      </Typography>
    </Button>
  );
};

Borders.propTypes = {
  countryId: PropTypes.string,
};

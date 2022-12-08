import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectById } from '../../model';

const buttonSx = {
  '& span': { lineHeight: 1 },
};

export const Borders = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <Button component={Link} to={`/${countryId}`} variant="outlined" sx={buttonSx}>
      <Typography variant="caption">{countryById.name.common}</Typography>
    </Button>
  );
};

Borders.propTypes = {
  countryId: PropTypes.string,
};

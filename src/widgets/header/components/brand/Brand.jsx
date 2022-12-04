import { Typography, Link as LinkStyled } from '@mui/material';
import { Link } from 'react-router-dom';

import { COLOR } from '@shared';

export const Brand = () => {
  return (
    <LinkStyled component={Link} to="/" sx={{ textDecoration: 'none', color: COLOR.text.default }}>
      <Typography fontWeight="bold" fontSize="larger" fontFamily="inherit">
        React Countries
      </Typography>
    </LinkStyled>
  );
};

import { Typography, Link as LinkStyled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Brand = () => {
  return (
    <LinkStyled to="/" component={Link} underline="none" sx={{ flexGrow: 1 }}>
      <Typography component="div" variant="h5" fontWeight={900} color="white">
        React Countries
      </Typography>
    </LinkStyled>
  );
};

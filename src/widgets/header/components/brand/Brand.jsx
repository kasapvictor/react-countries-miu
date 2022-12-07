import { Typography, Link as LinkStyled } from '@mui/material';
import { Link } from 'react-router-dom';

const brandSx = {
  fontSize: '1.2rem',
  fontWeight: 900,
  color: '#ffffff',

  '@media (min-width: 767px)': {
    fontSize: '1.4rem',
  },
};

export const Brand = () => {
  return (
    <LinkStyled to="/" component={Link} underline="none" sx={{ flexGrow: 1 }}>
      <Typography component="h1" sx={brandSx}>
        React Countries
      </Typography>
    </LinkStyled>
  );
};

import { Typography, Link as LinkStyled, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const brandSx = {
  fontSize: '1.2rem',
  fontWeight: 900,

  '@media (min-width: 767px)': {
    fontSize: '1.4rem',
  },
};

export const Brand = () => {
  const theme = useTheme();

  return (
    <LinkStyled to="/" component={Link} underline="none" sx={{ flexGrow: 1 }}>
      <Typography component="h1" sx={brandSx} color={theme.palette.brand}>
        React Countries
      </Typography>
    </LinkStyled>
  );
};

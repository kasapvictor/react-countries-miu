import { Typography, Link as LinkStyled } from '@mui/material';
import { Link } from 'react-router-dom';

import { COLOR, FONT_SIZE, SPACE } from '@shared';

const brandSx = {
  fontSize: FONT_SIZE.xlarge,
  fontWeight: 700,
  textDecoration: 'none',
  color: COLOR.text.default,
  pr: SPACE.xsmall,

  '@media (max-width: 767px)': {
    fontSize: FONT_SIZE.large,
  },
};

export const Brand = () => {
  return (
    <LinkStyled to="/" component={Link} underline="none" sx={{ flexGrow: 1 }}>
      {/* <Typography component="span" sx={brandSx} style={{ fontSize: FONT_SIZE.xlarge }}> */}
      <Typography component="span" sx={brandSx}>
        React Countries MUI
      </Typography>
    </LinkStyled>
  );
};

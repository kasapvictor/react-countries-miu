import { Box } from '@mui/material';

import { CountrySelectRegion, CountrySearch } from '@features';
import { SPACE } from '@shared';

const boxSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pb: SPACE.gutter,

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: SPACE.gutter,
  },
};

export const CountryFilter = () => {
  return (
    <Box sx={boxSx}>
      <CountrySearch />
      <CountrySelectRegion />
    </Box>
  );
};

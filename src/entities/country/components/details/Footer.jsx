import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { SPACE } from '@shared';

import { Borders } from './Borders';

const boxSx = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: SPACE.xxsmall,
};

export const Footer = ({ countryById }) => {
  const { borders } = countryById;

  return (
    borders[1] && (
      <Box pt={SPACE.gutter}>
        <Box sx={boxSx}>
          <Typography component="span" fontWeight={600} pr={1}>
            {borders[0]}:
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap" alignItems="center">
            {borders[1].map((borderCode) => (
              <Borders key={borderCode} countryId={borderCode} />
            ))}
          </Stack>
        </Box>
      </Box>
    )
  );
};

Footer.propTypes = {
  countryById: PropTypes.object,
};

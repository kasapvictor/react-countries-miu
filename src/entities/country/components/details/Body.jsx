import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const Body = ({ countryById }) => {
  const { spellings, capital, area, region, population, subRegion, currencies, languages, tld, timezones } = countryById;

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
        <Typography fontWeight={600} pr={1}>
          {spellings[0]}:
        </Typography>
        <Typography>{spellings[1]}</Typography>
      </Box>

      <Grid container rowSpacing={{ xs: 1 }}>
        {[capital, region, languages, subRegion, population, area, currencies, tld, timezones]
          .filter(([, value]) => value)
          .map(([name, value]) => (
            <Grid key={name} container item gap={1} xs={12} sm={6} alignItems="center">
              <Typography component="span" fontWeight={600}>
                {name}:
              </Typography>
              <Typography component="span" variant="body2">
                {value}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

Body.propTypes = {
  countryById: PropTypes.object,
};

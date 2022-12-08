import { numberFormatted } from '@entities/country/lib';
import { selectById } from '@entities/country/model';
import { Card as CardStyled, CardMedia, CardContent, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { COLOR, RADII, SPACE } from '@shared';

const boxRowSx = {
  display: 'flex',
  alignItems: 'center',
};

const boxMetaSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 30,
  width: 30,
  position: 'absolute',
  top: '-1rem',
  right: SPACE.gutter,
  background: COLOR.color7,
  borderRadius: RADII.round,
  border: '1px solid',
  borderColor: COLOR.color14,
  lineHeight: 0,
};

export const Card = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <CardStyled>
      <CardMedia
        component="img"
        height={150}
        image={countryById.flags.png}
        alt={countryById.name.common}
        sx={{
          borderBottom: '1px solid',
          borderColor: COLOR.color14,
        }}
      />

      <CardContent sx={{ position: 'relative' }}>
        <Box sx={boxMetaSx}>
          <Typography variant="caption" sx={{ lineHeight: 1 }}>
            {countryById.cca2}
          </Typography>
        </Box>

        <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
          {countryById.name.common}
        </Typography>

        <Box sx={boxRowSx} gap={1}>
          <Typography variant="body1" fontWeight={600}>
            Capital:
          </Typography>
          <Typography variant="body2">{countryById.capital ? countryById.capital[0] : countryById.name.common}</Typography>
        </Box>

        <Box sx={boxRowSx} gap={1}>
          <Typography variant="body1" fontWeight={600}>
            Region:
          </Typography>
          <Typography variant="body2">{countryById.region}</Typography>
        </Box>

        <Box sx={boxRowSx} gap={1}>
          <Typography variant="body1" fontWeight={600}>
            Population:
          </Typography>
          <Typography variant="body2">{numberFormatted(countryById.population)}</Typography>
        </Box>
      </CardContent>
    </CardStyled>
  );
};

Card.propTypes = {
  countryId: PropTypes.string,
};

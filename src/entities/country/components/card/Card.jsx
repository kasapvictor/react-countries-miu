import { numberFormatted } from '@entities/country/lib';
import { selectById } from '@entities/country/model';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Text } from '@shared';

import { CardStyled, CardImage, CardContent, CardTitle, CardContentRow, CardMeta } from './styled';

export const Card = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <CardStyled>
      <CardImage src={countryById.flags.png} />

      <CardContent>
        <CardMeta>
          <Text tag="span" size="xsmall" variant="medium">
            {countryById.cca2}
          </Text>
        </CardMeta>

        <CardTitle>
          <Text tag="span" variant="bold" size="large">
            {countryById.name.common}
          </Text>
        </CardTitle>

        <CardContentRow>
          <Text tag="span" variant="bold">
            Capital:
          </Text>
          <Text size="small">{countryById.capital ? countryById.capital[0] : countryById.name.common}</Text>
        </CardContentRow>
        <CardContentRow>
          <Text tag="span" variant="bold">
            Region:
          </Text>
          <Text size="small">{countryById.region}</Text>
        </CardContentRow>
        <CardContentRow>
          <Text tag="span" variant="bold">
            Population:
          </Text>
          <Text size="small">{numberFormatted(countryById.population)}</Text>
        </CardContentRow>
      </CardContent>
    </CardStyled>
  );
};

Card.propTypes = {
  countryId: PropTypes.string,
};

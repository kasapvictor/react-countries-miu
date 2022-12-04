import PropTypes from 'prop-types';

import { Columns, Text } from '@shared';

import { DetailsContentBody, DetailsContentRow } from './styled';

export const Body = ({ countryById }) => {
  const { spellings, capital, area, region, population, subRegion, currencies, languages, tld, timezones } = countryById;

  return (
    <DetailsContentBody>
      <DetailsContentRow>
        <Text tag="span" variant="bold">
          {spellings[0]}:
        </Text>
        <Text size="medium">{spellings[1]}</Text>
      </DetailsContentRow>

      <Columns columns={2} gap="0.25rem">
        {[capital, region, languages, subRegion, population, area, currencies, tld, timezones]
          .filter(([, value]) => value)
          .map(([name, value]) => (
            <DetailsContentRow key={name}>
              <Text tag="span" variant="bold">
                {name}:
              </Text>
              <Text size="medium">{value}</Text>
            </DetailsContentRow>
          ))}
      </Columns>
    </DetailsContentBody>
  );
};

Body.propTypes = {
  countryById: PropTypes.object,
};

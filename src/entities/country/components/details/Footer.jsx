import PropTypes from 'prop-types';

import { Text } from '@shared';

import { Borders } from './Borders';
import { DetailsContentFooter, DetailsContentRow } from './styled';

export const Footer = ({ countryById }) => {
  const { borders } = countryById;

  return (
    borders[1] && (
      <DetailsContentFooter>
        <DetailsContentRow>
          <Text tag="span" variant="bold">
            {borders[0]}:
          </Text>
          {borders[1].map((borderCode) => (
            <Borders key={borderCode} countryId={borderCode} />
          ))}
        </DetailsContentRow>
      </DetailsContentFooter>
    )
  );
};

Footer.propTypes = {
  countryById: PropTypes.object,
};

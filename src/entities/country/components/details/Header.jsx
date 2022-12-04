import PropTypes from 'prop-types';

import { Title } from '@shared';

import { DetailsCoatOfArmsImg, DetailsContentCoatOfArms, DetailsContentHeader } from './styled';

export const Header = ({ countryById }) => {
  const { countryName, coatOfArms } = countryById;

  return (
    <DetailsContentHeader>
      <Title type="h1" variant="bold">
        {countryName[1]}
      </Title>

      {coatOfArms[1] && (
        <DetailsContentCoatOfArms>
          <DetailsCoatOfArmsImg src={coatOfArms[1]} alt={countryName[1]} />
        </DetailsContentCoatOfArms>
      )}
    </DetailsContentHeader>
  );
};

Header.propTypes = {
  countryById: PropTypes.object,
};

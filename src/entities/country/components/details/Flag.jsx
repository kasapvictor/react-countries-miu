import PropTypes from 'prop-types';

import { DetailsImage, DetailsImageWrapper } from './styled';

export const Flag = ({ countryById }) => {
  const { flag, countryName } = countryById;
  return (
    <DetailsImageWrapper>
      <DetailsImage src={flag[1]} alt={countryName[1]} />
    </DetailsImageWrapper>
  );
};

Flag.propTypes = {
  countryById: PropTypes.object,
};

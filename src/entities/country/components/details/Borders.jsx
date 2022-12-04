import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Text } from '@shared';

import { selectById } from '../../model';

import { BorderButton } from './styled';

export const Borders = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <BorderButton to={`/${countryId}`}>
      <Text size="medium">{countryById.name.common}</Text>
    </BorderButton>
  );
};

Borders.propTypes = {
  countryId: PropTypes.string,
};

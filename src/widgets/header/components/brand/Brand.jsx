import { Text } from '@shared';

import { BrandStyled } from './styled';

export const Brand = () => {
  return (
    <BrandStyled to="/">
      <Text tag="p" variant="bold" size="xlarge">
        React Countries
      </Text>
    </BrandStyled>
  );
};

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { COLOR } from '@shared';

export const BrandStyled = styled(Link)({
  textDecoration: 'none',
  color: COLOR.text.default,
});

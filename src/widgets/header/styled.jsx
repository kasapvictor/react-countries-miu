import styled from '@emotion/styled';

import { SPACE, SHADOW } from '@shared';

export const HeaderStyled = styled.header({
  padding: `${SPACE.gutter} 0`,
  boxShadow: SHADOW.default,
});

export const HeaderInner = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

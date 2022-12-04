import styled from '@emotion/styled';

import { SHADOW, SPACE } from '@shared';

export const FooterStyled = styled.footer({
  boxShadow: SHADOW.footer,
});

export const FooterInner = styled.div({
  display: 'flex',
  gap: SPACE.gutter,
  padding: `${SPACE.gutter} 0`,
});

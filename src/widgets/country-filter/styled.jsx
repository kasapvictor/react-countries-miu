import styled from '@emotion/styled';

import { SPACE } from '@shared';

export const FilterStyled = styled.div({
  paddingBottom: SPACE.gutter,
});

export const FilterInner = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: SPACE.gutter,
  },
});

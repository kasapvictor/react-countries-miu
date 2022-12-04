import styled from '@emotion/styled';

import { COLOR } from '@shared';

export const LinkStyled = styled.a({
  textDecoration: 'none',
  color: COLOR.color11,

  '&:hover': {
    color: COLOR.color13,
  },
});

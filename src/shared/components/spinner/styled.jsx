import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { COLOR, RADII } from '@shared';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  from {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled.div({
  width: 20,
  minWidth: 20,
  height: 20,
  minHeight: 20,
  border: '3px solid',
  borderColor: COLOR.color14,
  borderLeftColor: COLOR.color1,
  borderTopColor: COLOR.color1,
  borderRadius: RADII.round,
  animation: `${spin} 1s linear infinite`,
});

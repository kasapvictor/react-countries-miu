import styled from '@emotion/styled';

import { FONT_SIZE, FONT_WEIGHT } from '@shared';

const commonStyles = ({ size, variant }) => ({
  fontSize: FONT_SIZE[size],
  fontWeight: FONT_WEIGHT[variant],
});

export const TextDiv = styled.div(({ size, variant }) => ({
  ...commonStyles({ size, variant }),
}));

export const TextSpan = styled.span(({ size, variant }) => ({
  ...commonStyles({ size, variant }),
}));

export const TextCode = styled.code(({ size, variant }) => ({
  ...commonStyles({ size, variant }),
  fontFamily: 'monospace',
}));

export const TextP = styled.p(({ size, variant }) => ({
  ...commonStyles({ size, variant }),
}));

import styled from '@emotion/styled';

import { FONT_SIZE, FONT_WEIGHT } from '@shared';

const textStyles = (size, variant) => {
  return {
    lineHeight: 1.2,
    fontSize: FONT_SIZE[size],
    fontWeight: FONT_WEIGHT[variant],
  };
};

export const H1Styled = styled.h1(({ size, variant }) => ({
  ...textStyles(size, variant),
  lineHeight: 1,
}));

export const H2Styled = styled.h2(({ size, variant }) => ({
  ...textStyles(size, variant),
}));

export const H3Styled = styled.h3(({ size, variant }) => ({
  ...textStyles(size, variant),
}));

export const H4Styled = styled.h4(({ size, variant }) => ({
  ...textStyles(size, variant),
}));

export const H5Styled = styled.h5(({ size, variant }) => ({
  ...textStyles(size, variant),
}));

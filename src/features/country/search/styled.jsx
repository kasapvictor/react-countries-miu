import styled from '@emotion/styled';

import { SPACE, COLOR, RADII, SHADOW, FONT_SIZE } from '@shared';

export const SearchStyled = styled.div({
  width: '100%',

  '@media (min-width: 767px)': {
    maxWidth: 250,
  },
});

export const SearchInner = styled.label({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  padding: SPACE.normal,
  boxShadow: SHADOW.default,
  borderRadius: RADII.xsmall,
  background: COLOR.color3,
  gap: SPACE.small,
});

export const SearchIcon = styled.div({
  left: SPACE.small,
  height: SPACE.normal,
});

export const SearchInput = styled.input({
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'none',
  color: COLOR.color1,
  fontSize: FONT_SIZE.small,

  '::placeholder': {
    color: COLOR.color1,
  },
});

export const SearchLoading = styled.div({
  position: 'absolute',
  right: -30,
  top: '50%',
  transform: 'translateY(-50%)',
});

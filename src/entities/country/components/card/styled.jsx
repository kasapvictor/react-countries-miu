import styled from '@emotion/styled';

import { COLOR, RADII, SPACE } from '@shared';

export const CardStyled = styled.div({});

export const CardImage = styled.img({
  height: 150,
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderBottom: '1px solid',
  borderColor: COLOR.color14,
});

export const CardContent = styled.div({
  padding: `${SPACE.xxsmall} ${SPACE.gutter} ${SPACE.gutter} ${SPACE.gutter}`,
  position: 'relative',
});

export const CardMeta = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 30,
  width: 30,
  position: 'absolute',
  top: '-1.3rem',
  right: SPACE.gutter,
  background: COLOR.color7,
  color: COLOR.color1,
  borderRadius: RADII.round,
  border: '1px solid',
  borderColor: COLOR.color14,
  lineHeight: 0,
});

export const CardTitle = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: SPACE.xxsmall,
  paddingBottom: SPACE.xsmall,
});

export const CardContentRow = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: SPACE.xxsmall,
  paddingBottom: SPACE.xxsmall,
});

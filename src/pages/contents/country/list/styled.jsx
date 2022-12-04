import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { COLOR, RADII, SHADOW, SPACE } from '@shared';

export const ListStyled = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: SPACE.gutter,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const ListItem = styled.li({
  border: '1px solid',
  borderColor: COLOR.color14,
  borderRadius: RADII.xsmall,
  boxShadow: SHADOW.card,
  transition: 'box-shadow .2s ease-in-out',
  overflow: 'hidden',

  '&:hover': {
    boxShadow: SHADOW.hover,
  },
});

export const LinkStyled = styled(Link)({
  display: 'block',
  height: '100%',
  textDecoration: 'none',
  color: COLOR.color1,
});

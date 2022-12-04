import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { COLOR, RADII, SHADOW, SPACE } from '@shared';

export const DetailsContainer = styled.div({
  // gridTemplateColumns: 'minmax(400px, 600px) 1fr'
  paddingBottom: SPACE.gutter,
});

export const DetailsImageWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  minHeight: 450,

  '@media (max-width: 991px)': {
    minHeight: 'auto',
  },
});

export const DetailsImage = styled.img({
  height: 'auto',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  borderRadius: RADII.xsmall,
  boxShadow: SHADOW.default,
});

export const DetailsContent = styled.div({
  paddingLeft: SPACE.large,

  '@media (max-width: 991px)': {
    paddingLeft: 0,
  },
});

export const DetailsContentHeader = styled.div({
  paddingBottom: SPACE.xsmall,
  position: 'relative',
});

export const DetailsContentCoatOfArms = styled.div({
  position: 'absolute',
  top: -100,
  right: 0,

  '@media (max-width: 479px)': {
    position: 'static',
  },
});

export const DetailsCoatOfArmsImg = styled.img({
  width: 80,
  filter: `drop-shadow(4px 0px 16px ${COLOR.color2})`,
});

export const DetailsContentBody = styled.div({});

export const DetailsContentColumns = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: SPACE.xxsmall,
  paddingBottom: SPACE.gutter,

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

export const DetailsContentFooter = styled.div({
  paddingTop: SPACE.gutter,
});

export const DetailsContentRow = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  flex: '48%',
  gap: SPACE.xxsmall,
  paddingBottom: SPACE.xxsmall,

  '@media (max-width: 768px)': {
    flex: '100%',
  },
});

export const BorderButton = styled(Link)({
  padding: `${SPACE.xxsmall} ${SPACE.xsmall}`,
  borderRadius: RADII.xsmall,
  backgroundColor: COLOR.color2,
  color: COLOR.color1,
  transition: 'background-color .2s ease-in-out, box-shadow .2s ease-in-out',
  boxShadow: SHADOW.default,
  border: '1px solid',
  borderColor: COLOR.color7,

  '&:hover': {
    backgroundColor: COLOR.color7,
    boxShadow: SHADOW.hover,
  },
});

export const MapBox = styled.div({
  width: '100%',
  height: 600,
  position: 'relative',
  marginTop: SPACE.gutter,
  borderRadius: RADII.xsmall,
  overflow: 'hidden',
  boxShadow: SHADOW.default,

  '@media (max-width: 768px)': {
    height: 400,
  },
});

import styled from '@emotion/styled';

import { RADII, SPACE, COLOR, FONT_WEIGHT, FONT_SIZE } from '@shared';

const color = {
  dark: {
    normal: {
      bg: COLOR.color5,
      text: COLOR.color12,
    },
    hover: {
      bg: COLOR.color6,
      text: COLOR.color12,
    },
  },
  light: {
    normal: {
      bg: 'var(--color-theme7)',
      text: 'var(--color-theme9)',
    },
    hover: {
      bg: 'var(--color-theme8)',
      text: 'var(--color-theme9)',
    },
  },
  alert: {
    normal: {
      bg: 'var(--color23)',
      text: 'var(--color-theme10)',
    },
    hover: {
      bg: 'var(--color24)',
      text: 'var(--color-theme10)',
    },
  },
  warning: {
    normal: {
      bg: 'var(--color19)',
      text: 'var(--color1)',
    },
    hover: {
      bg: 'var(--color20)',
      text: 'var(--color1)',
    },
  },
  default: {
    normal: {
      bg: 'var(--color-theme11)',
      text: 'var(--color-theme12)',
    },
    hover: {
      bg: 'var(--color5)',
      text: 'var(--color-theme12)',
    },
  },
};

export const ButtonStyled = styled.button(({ variant }) => ({
  padding: `${SPACE.small} ${SPACE.medium}`,
  borderRadius: RADII.xsmall,
  transition: 'background-color .2s ease-in-out , color .2s ease-in-out',
  fontWeight: FONT_WEIGHT.medium,
  fontSize: FONT_SIZE.small,
  backgroundColor: color[variant].normal.bg,
  color: color[variant].normal.text,
  textTransform: 'inherit',

  '&:hover': {
    backgroundColor: color[variant].hover.bg,
    color: color[variant].hover.text,
  },
}));

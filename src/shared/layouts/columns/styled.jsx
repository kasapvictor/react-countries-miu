import styled from '@emotion/styled';

import { SPACE } from '@shared';

const buildColumns = (columns) => Array(columns).fill('1fr').join(' ');

export const ColumnsStyled = styled.div(({ columns, gap, align }) => ({
  display: 'grid',
  gridTemplateColumns: buildColumns(columns),
  gap: gap || SPACE.gutter,
  alignItems: align,

  '@media (max-width: 767px)': {
    gridTemplateColumns: '1fr',
  },
}));

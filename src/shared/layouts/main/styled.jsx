import styled from '@emotion/styled';

import { SPACE } from '@shared';

export const MainStyled = styled.main({
  flex: 1,
  padding: `${SPACE.large} 0`,

  '@media(min-width: 767px)': {
    padding: `${SPACE.xlarge} 0`,
  },
});

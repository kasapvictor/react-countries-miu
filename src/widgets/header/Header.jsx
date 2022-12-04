import { ThemeSwitcher } from '@features';
import { Container } from '@shared';

import { Brand } from './components';
import { HeaderInner, HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <Brand />
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyled>
  );
};

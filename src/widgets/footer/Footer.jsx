import { Container, Link, Text } from '@shared';

import { FooterStyled, FooterInner } from './styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterInner>
          <Text tag="span">Created by Victor Kasap &copy; {new Date().getFullYear()}</Text>
          <Link target="_blank" href="https://github.com/kasapvictor">
            GitHub
          </Link>
        </FooterInner>
      </Container>
    </FooterStyled>
  );
};

import PropTypes from 'prop-types';

import { LinkStyled } from './styled';

export const Link = ({ children, target = null, href = '#' }) => {
  return (
    <LinkStyled href={href} target={target}>
      {children}
    </LinkStyled>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  href: PropTypes.string,
};

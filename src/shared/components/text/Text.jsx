import PropTypes from 'prop-types';

import { TextCode, TextSpan, TextDiv, TextP } from './styled';

export const Text = ({ children, tag = 'div', size = 'medium', variant = 'normal' }) => {
  const text = {
    p: TextP,
    div: TextDiv,
    span: TextSpan,
    code: TextCode,
  };

  const TextStyled = text[tag];

  return (
    <TextStyled size={size} variant={variant}>
      {children}
    </TextStyled>
  );
};

Text.propTypes = {
  tag: PropTypes.oneOf(['div', 'code', 'span', 'p']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  variant: PropTypes.oneOf(['normal', 'medium', 'bold']),
  children: PropTypes.node.isRequired,
};

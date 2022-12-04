import PropTypes from 'prop-types';

import { ButtonStyled } from './styled';

export const Button = ({ variant = 'default', children, onClick }) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dark', 'light', 'warning', 'alert', 'mute']),
};

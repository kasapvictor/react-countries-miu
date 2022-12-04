import PropTypes from 'prop-types';

import { MainStyled } from './styled';

export const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

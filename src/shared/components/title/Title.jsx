import PropTypes from 'prop-types';

import { H1Styled, H2Styled, H3Styled, H5Styled, H4Styled } from './styled';

export const Title = ({ type = 'h1', size = 'h1', variant = 'normal', children }) => {
  const title = {
    h1: H1Styled,
    h2: H2Styled,
    h3: H3Styled,
    h4: H4Styled,
    h5: H5Styled,
  };

  const TitleComponent = title[type];

  return (
    <TitleComponent size={size} variant={variant}>
      {children}
    </TitleComponent>
  );
};

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  variant: PropTypes.oneOf(['normal', 'medium', 'bold']),
  children: PropTypes.node.isRequired,
};

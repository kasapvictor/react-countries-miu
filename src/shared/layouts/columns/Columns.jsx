import PropTypes from 'prop-types';

import { ColumnsStyled } from './styled';

export const Columns = ({ columns = 2, gap = '', align = '', children }) => {
  return (
    <ColumnsStyled columns={columns} gap={gap} align={align}>
      {children}
    </ColumnsStyled>
  );
};

Columns.propTypes = {
  gap: PropTypes.string,
  align: PropTypes.string,
  columns: PropTypes.number,
  children: PropTypes.node.isRequired,
};
